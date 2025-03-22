import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../app/globals.css";
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from "sonner";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar/ui/sidebar";
import { AppSidebar } from "../components/ui/sidebar/AppSidebar";

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
    <ClerkProvider>
      <html lang="pt-BR">
        <body
          className={`${poppins.className} antialiased bg-slate-50 overflow-x-clip`}
        >
          <Toaster richColors />
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
              <SidebarTrigger />
              {children}
            </main>
        </SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
