import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaRunning } from "react-icons/fa";


export default function LandingPage() {
    return (
        <>
        <h1 className="flex gap-2 items-center">
        <FaRunning  size={40} className="text-amber-400  mr-2 mb-3"/>RunTrakr
        </h1>
        <p>Sign In to Track Your Runs</p>
        <div className="flex gap-2 items-center">
          <Button asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <small>or</small>
          <Button asChild variant="outline">
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </>
    )
}