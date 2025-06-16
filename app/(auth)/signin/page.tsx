
import { Metadata } from 'next';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import CredentialsSignInForm from './credentials-signin-form';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
 import { FaRunning } from "react-icons/fa";
  
  
  export const metadata: Metadata = {
    title: 'Sign In'
  }
  
  const LoginPage = async (props: {
    searchParams: Promise<{
      callbackUrl: string;
    }>;
  }) => {
  const { callbackUrl } = await props.searchParams

  const session = await auth()


  if (session) {
    return redirect(callbackUrl || '/dashboard');
  }


    return (
        <>
         <h1 className="flex gap-2 items-center">
        <FaRunning  size={40} className="text-amber-400  mr-2 mb-3"/>RunTrakr
        </h1>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Sign in to track your runs!</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <CredentialsSignInForm />
            </CardContent>
      </Card>
    </>
  );
}

export default LoginPage