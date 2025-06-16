
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import MenuItem from "./menu-item";
import MenuTitle from "./menu-title";
import { cn } from "@/lib/utils";
// import { auth } from '@/auth';

import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import { signOutUser } from '@/lib/actions/userActions';

import { SignOutButton } from "./signout-button";

// const session = await auth();


// const firstInitial = session?.user?.name?.charAt(0).toUpperCase() ?? '';

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
      <div className="py-4p pl-4 mt-7 grow">
        <MenuItem href="/dashboard">Dashboard</MenuItem>
        <div className="mt-4 ml-4 gap-3">
        <MenuItem href="/dashboard/runs">Runs</MenuItem>
        <MenuItem href="/dashboard/hills">Hills</MenuItem>
        <MenuItem href="/dashboard/dots">Dots</MenuItem>
        <MenuItem href="/dashboard/races">Races</MenuItem>
        <MenuItem href="/dashboard/workouts">Workouts</MenuItem>
       
        </div>
      </div>
        
        <footer className="flex gap-2 p-5 mb-5 items-center">
            <Avatar>
                <AvatarFallback className="bg-amber-500 p-2 rounded-full w-40 h-40">BS</AvatarFallback>
            </Avatar>
            {/* <Link href="/" className="hover:underline pl-5">Logout</Link> */}
            <form action={signOutUser} className="ml-auto">
                <SignOutButton
                    className="w-full py-4 px-2 h-4 justify-start"
                    variant="ghost"
                />
            </form>
            {/* <LightDarkToggle className="ml-auto" /> */}
        </footer>
     </nav>
)
}
