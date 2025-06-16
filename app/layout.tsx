import type { Metadata } from "next";
// import { Poppins} from "next/font/google";
// import { cn } from '@/lib/utils'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { Toaster } from "@/components/ui/sonner"

// const poppins = Poppins({
//   subsets: ["latin"], weight: ["100","200", "300", "400", "500", "600", "700", "800", "900"]
// });



export const metadata: Metadata = {
  title: "Runtrakr",
  description: "Built with NextJS, Tailwind, Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        {children}
        </ThemeProvider>     
        <Toaster />
      </body>
    </html>
  );
}
