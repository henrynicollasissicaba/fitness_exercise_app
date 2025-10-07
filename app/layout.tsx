import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ExerciseProvider } from "./contexts/ExerciseContext";
import { ChatMessageProvider } from "./contexts/ChatMessageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Fitness Exercise APP",
  description:
    "Pesquise por exercícios de diversos tipos, seja por parte do corpo, equipamentos ou músculos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} antialiased bg-slate-50`}>
        <ExerciseProvider>
          <ChatMessageProvider>{children}</ChatMessageProvider>
        </ExerciseProvider>
      </body>
    </html>
  );
}
