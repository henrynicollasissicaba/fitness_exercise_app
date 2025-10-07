"use client";

import { useState } from "react";
import Button from "../components/buttons/Button";
import { successAlert } from "@/lib/sweetalert2";
import ChatMessage from "./_components/ChatMessages";
import { useChatMessages } from "../hooks/useChatMessages";
import ArrowBackBtn from "../components/ArrowBackBtn";

export default function Page() {
  const { messages, sendMessage, clearMessages, isStreaming } =
    useChatMessages();
  const [input, setInput] = useState("");

  const handleSend = async () => {
    await sendMessage(input);
    setInput("");
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
      <ArrowBackBtn href="/" />

      <h1 className="text-lg md:text-3xl font-bold text-center text-primary-700">
        Receba treinos + dieta personalizada com a Inteligência Artificial
      </h1>

      <div className="flex flex-col items-center">
        <div className="w-full max-w-3xl h-[500px] overflow-y-auto border-2 border-primary-950 p-4 rounded bg-gray-50">
          {messages.length > 1 ? (
            messages
              .filter((m) => m.role !== "system")
              .map((msg, i) => (
                <ChatMessage
                  key={i}
                  content={msg.content}
                  isUser={msg.role === "user"}
                />
              ))
          ) : (
            <p className="text-gray-500 text-center">
              Envie uma mensagem para inicar a conversa.
            </p>
          )}
          {isStreaming && <p className="text-gray-500">Pensando...</p>}
        </div>

        <div className="flex mt-4 w-full max-w-3xl">
          <input
            className="flex-1 border-2 border-primary-950 px-3 py-2 rounded-l focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Digite aqui"
          />
          <Button
            className="rounded-none rounded-r"
            onClick={handleSend}
            disabled={isStreaming || !input.trim()}
          >
            Enviar
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <Button onClick={clearMessages} className="w-fit">
          Limpar
        </Button>
        <Button onClick={copyToClipboard} className="w-fit">
          Copiar
        </Button>
      </div>
    </section>
  );
}
