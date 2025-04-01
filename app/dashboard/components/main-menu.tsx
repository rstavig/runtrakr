// import { FaRunning } from "react-icons/fa";

import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import MenuItem from "./menu-item";
import MenuTitle from "./menu-title";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";

export default function MainMenu({ className }: { className?: string }) {
    return (
        <nav
      className={cn(`md:bg-muted overflow-auto p-4 flex flex-col`, className)}
    >
    {/* <div className="bg-muted overflow-auto p-4 flex flex-col"> */}
        <div className="border-b dark:border-b-black border-b-zinc-300">
            <header className="hidden md:block border-b dark:border-b-black border-b-zinc-300 pb-4">
            <MenuTitle />
            </header>
        </div>
      <div className="py-4p pl-4 mt-3 grow">
        <MenuItem href="/dashboard">Dashboard</MenuItem>
        <div className="mt-4 ml-4 gap-3">
        <MenuItem href="/dashboard/runs">Runs</MenuItem>
        <MenuItem href="/dashboard/hills">Hills</MenuItem>
        <MenuItem href="/dashboard/dots">Dots</MenuItem>
        <MenuItem href="/dashboard/races">Races</MenuItem>
        <MenuItem href="/dashboard/exercises">Exercises</MenuItem>
        <MenuItem href="/dashboard/traildirt">Trail Dirt</MenuItem>
        </div>
      </div>
        
        <footer className="flex gap-2 p-5 mb-5 items-center">
            <Avatar>
                <AvatarFallback className="bg-amber-500 p-2 rounded-full w-40 h-40">BS</AvatarFallback>
            </Avatar>
            <Link href="/" className="hover:underline pl-5">Logout</Link>
            <LightDarkToggle className="ml-auto" />
        </footer>
     </nav> 
)
}
