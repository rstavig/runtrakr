'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
// import { useFormState } from 'react';
import { useActionState } from 'react';
import { signUp } from '@/lib/actions/userActions';
import { useSearchParams } from 'next/navigation';
// import { redirect } from 'next/navigation';





type SignupFormState = {
  error?: Record<string, string[]> | string;
};

const SignupForm = () => {
  const [data, action, isPending] = useActionState<SignupFormState, FormData>(signUp, { error: {} });
 

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'

const SignUpButton = () => {
  return (
    <Button disabled={isPending} className='w-full' variant='default'>
      {isPending ? 'Submitting...' : 'Sign Up'}  
    </Button>
  );
};


  return (
    <>
    <form action={action}>
    <input type='hidden' name='callbackUrl' value={callbackUrl} />
      <div className='space-y-6'>
      <div>
          <Label htmlFor='email'>Name</Label>
          <Input
            id='name'
            name='name'
            required
            type='text'
            autoComplete='name'
          />
        </div>
        <div>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            required
            type='email'
            autoComplete='email'
          />
        </div>
        <div>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            name='password'
            required
            type='password'
            // defaultValue={signInDefaultValues.password}
            autoComplete='current-password'
          />
        </div>
        <div>
          <Label htmlFor='confirmPassword'>Confirm Password</Label>
          <Input
            id='confirmPassword'
            name='confirmPassword'
            required
            type='password'
            // defaultValue={signInDefaultValues.password}
            autoComplete='current-password'
          />
        </div>
        <div>
        <SignUpButton />
        </div>
        
{data && data.error && (
  <div className='text-center text-destructive'>
    {typeof data.error === 'object'
      ? Object.values(data.error).flat().join(', ')
      : String(data.error)}
  </div>
)}
        <div className='text-sm text-center text-muted-foreground'>
          Already have an account?{' '}
          <Link target='_self' className='link' href='/signin'>
            Sign In
          </Link>
        </div>
      </div>
    </form>
    </>
  )
};
  
  export default SignupForm;