"use client";

import { SessionProvider } from "next-auth/react";
import MainMenu from "@/app/dashboard/components/main-menu";
import MenuTitle from "@/app/dashboard/components/menu-title";
import LightDarkToggle from "@/components/ui/light-dark-toggle";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<>
  <SessionProvider>
        <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
                <MainMenu />
                <div className="p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border">  
                <MenuTitle />
                </div>

                <div className="overflow-auto py-2 px-4">
                  {/* todo: s/b able to make this dynamic w/params */}
                <h1 className="py-4 mb-5"></h1>
                    {children}     
                </div>
        </div>
        </SessionProvider>
<LightDarkToggle />
        </>
    );
}