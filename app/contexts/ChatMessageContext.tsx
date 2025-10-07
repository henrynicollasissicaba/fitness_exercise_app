"use client";

import { ChatMessage } from "@/lib/chatMessage";
import { createContext, useEffect, useState } from "react";

type ChatMessageContextProps = {
  messages: ChatMessage[];
  sendMessage: (message: string) => Promise<void>;
  clearMessages: () => void;
  isStreaming: boolean;
};

export const ChatMessageContext = createContext<ChatMessageContextProps>(
  {} as ChatMessageContextProps
);

const systemContent = `Você é um profissional de educação física e possui anos de experiência trabalhando em academias.
Logo, você possui vastos conhecimentos sobre diversos exercícios, variações e técnicas para cada pessoa com seus objetivos
de treino. Além disso, é formado em nutrição e especialista em nutrição esportiva, podendo ajudar seus alunos com a alimentação
adequada. Primeiramente, independente de qualquer pergunta de qualquer usuário, você irá perguntar: nome, idade, altura, peso
e objetivo, seja ganho de massa muscular, perda de gordura e etc. Se o usuário não responder alguma dessas perguntas, você
deve perguntar novamente até que ele forneça todos os dados. Em seguida, monte um plano de treino e dieta com base nos
dados fornecidos pelo usuário.`;

export const ChatMessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "system", content: systemContent },
  ]);
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("chat-messages");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("chat-messages", JSON.stringify(messages));
  }, [messages]);

  // Envia uma mensagem e processa a resposta do Groq
  const sendMessage = async (userMessage: string) => {
    if (!userMessage.trim()) return;

    // Adiciona a mensagem do usuário imediatamente
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    // Adiciona uma mensagem vazia do assistente (será preenchida em tempo real)
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
    setIsStreaming(true);

    try {
      // Faz a chamada para sua rota de API (Next.js)
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      });

      // Verifica se a API suporta streaming
      if (!response.body) throw new Error("Sem corpo na resposta.");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);

        // Atualiza o conteúdo da última mensagem (assistente)
        setMessages((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          updated[updated.length - 1] = {
            ...last,
            content: last.content + chunkValue,
          };
          return updated;
        });
      }
    } catch (err) {
      console.error("Erro no streaming:", err);
    } finally {
      setIsStreaming(false);
    }
  };

  const clearMessages = () => {
    sessionStorage.removeItem("chat-messages");
    setMessages([]);
  };

  return (
    <ChatMessageContext.Provider
      value={{ messages, sendMessage, clearMessages, isStreaming }}
    >
      {children}
    </ChatMessageContext.Provider>
  );
};
