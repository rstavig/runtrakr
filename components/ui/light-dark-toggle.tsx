
"use client";

import { useEffect, useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
import { MoonIcon, SunIcon } from "lucide-react";
// import { z } from 'zod';


type Props = {
  className?: string;
};

export default function LightDarkToggle({ className }: Props) {
  const { setTheme, theme, resolvedTheme } = useTheme();
  

   const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null
  }
  
{/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className={className}>
            <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}


  // The following block is commented out to avoid JSX parsing errors.
  // If you want to use it, uncomment and wrap it in a fragment or parent element.
  /*
  
  */

  return (
    <>
      <TooltipProvider>
    <Tooltip>
      <TooltipTrigger 
        asChild className={className}
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}>
        <Button variant="outline">
          <SunIcon className='block dark:hidden' />
          <MoonIcon className='hidden dark:block' />
        </Button>
      </TooltipTrigger> 
      <TooltipContent>
        {resolvedTheme === "dark" ? "Enable light mode" : "Enable dark mode"}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
    </>
  );
}
