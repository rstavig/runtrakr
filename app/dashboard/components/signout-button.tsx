"use client"

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button"
// import { signOutUser } from "@/lib/actions/userActions"
 



export function SignOutButton(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <>
    <Button
      variant="ghost"
      className="w-full p-0"
      {...props}
      type="button"
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      Sign Out
    </Button>
    </>
  )
}
