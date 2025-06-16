
import { FaRunning } from "react-icons/fa";
import {
    Card,
    CardContent,
    CardDescription,
  
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  import Link from "next/link";
 
 


import SignUpForm from './signup-form';
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Sign Up',
};

  
export default function SignupPage() {
   
        

  
        



   

    return (
        <>
      
          <div className='w-full max-w-md mx-auto'>
      <Card>
        <CardHeader className='space-y-4'>
          <Link href='/' className='flex-center'>
          <h1 className="flex gap-2 items-center">
        <FaRunning  size={40} className="text-amber-400  mr-2 mb-3"/>RunTrakr
        </h1>
          </Link>
          <CardTitle className='text-center'>Sign up to log your runs</CardTitle>
          <CardDescription className='text-center'>
            Enter your information below to sign up
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>

    </>
  )
}
      
    