import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ExercisesProvider } from "./contexts/ExercisesContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
})

export const metadata: Metadata = {
  title: "Fitness Exercise APP",
  description: "Pesquise por exercícios de diversos tipos, seja por parte do corpo, equipamentos ou músculos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-slate-50`}
      >
        <ExercisesProvider>
          {children}
        </ExercisesProvider>
      </body>
    </html>
  );
}
