import { FaRunning } from "react-icons/fa";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function MenuTitle() {
    const { data: session } = useSession();

    return (
        <>
        <Link href="/" className="flex items-center mb-2 px-3">
        <h4 className="flex items-center mb-2 px-3">    
            <FaRunning  size={40} className="text-amber-400  mr-2  mt-2"/> RunTrakr
        </h4>

        </Link>
         <span className='flex flex-col items-center px-3 font-medium leading-none'>{session?.user?.name}</span>
         </>
    )
}