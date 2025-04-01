"use client";


import MainMenu from "./components/main-menu";
import MenuTitle from "./components/menu-title";
// import { FaRunning } from "react-icons/fa";


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

 return (
        <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
                <MainMenu />
                <div className="p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border">  
                <MenuTitle />
       

     </div>

        <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Track Bob&lsquo;s Runs</h1>
            {children}     
        </div>
        </div>
 ) 
}