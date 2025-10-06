"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "../components/Button";
import { successAlert } from "@/lib/sweetalert2";
import ChatMessage from "./_components/ChatMessages";

const systemContent = `Você é um profissional de educação física e possui anos de experiência trabalhando em academias.
Logo, você possui vastos conhecimentos sobre diversos exercícios, variações e técnicas para cada pessoa com seus objetivos
de treino. Além disso, é formado em nutrição e especialista em nutrição esportiva, podendo ajudar seus alunos com a alimentação
adequada. Primeiramente, independente de qualquer pergunta de qualquer usuário, você irá perguntar: nome, idade, altura, peso
e objetivo, seja ganho de massa muscular, perda de gordura e etc. Se o usuário não responder alguma dessas perguntas, você
deve perguntar novamente até que ele forneça todos os dados. Em seguida, monte um plano de treino e dieta com base nos
dados fornecidos pelo usuário.`;

export default function Page() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [{ role: "system", content: systemContent }]
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ messages: newMessages }),
    });

    if (!res.body) return;

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let assistantReply = "";

    // Atualiza em tempo real
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      assistantReply += decoder.decode(value, { stream: true });

      setMessages((prev) => {
        const updated = [...prev];
        if (updated[updated.length - 1]?.role === "assistant") {
          updated[updated.length - 1].content = assistantReply;
        } else {
          updated.push({ role: "assistant", content: assistantReply });
        }
        return updated;
      });
    }

    setLoading(false);
  };

  const copyToClipboard = () => {
    const text = messages
      .filter((msg) => msg.role !== "system")
      .map((msg) => (msg.role === "user" ? "Você: " : "Bot: ") + msg.content)
      .join("\n\n");

    navigator.clipboard
      .writeText(text)
      .then(() => successAlert("Copiado para a área de transferência!"));
  };

  return (
    <section className="flex flex-col gap-8 w-full max-w-6xl mx-auto p-3 overflow-hidden">
      <Link href="/" className="self-end">
        Voltar
      </Link>
      <h1 className="text-lg md:text-3xl font-bold text-center text-primary-700">
        Receba treinos + dieta personalizada com a Inteligência Artificial
      </h1>
      <div className="flex flex-col items-center">
        <div
          id="chat-container"
          className="w-full max-w-2xl h-[500px] overflow-y-auto border-2 border-primary-950 p-4 rounded bg-gray-50"
        >
          <p className="text-sm italic text-gray-600 mb-6 text-center">
            Inicie a conversa enviando uma mensagem
          </p>
          {messages
            .filter((m) => m.role !== "system")
            .map((msg, i) => (
              <ChatMessage
                key={i}
                content={msg.content}
                isUser={msg.role === "user"}
              />
            ))}
          {loading && <p className="text-gray-500">Pensando...</p>}
        </div>

        <div className="flex mt-4 w-full max-w-2xl">
          <input
            className="flex-1 border-2 border-primary-950 px-3 py-2 rounded-l focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button
            className="rounded-none rounded-r"
            onClick={sendMessage}
            disabled={loading || !input.trim()}
          >
            Enviar
          </Button>
        </div>
      </div>
      <Button onClick={copyToClipboard} className="w-fit mx-auto">
        Copiar conversa
      </Button>
    </section>
  );
}
