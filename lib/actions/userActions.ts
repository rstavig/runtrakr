'use server';

import {  
    signInFormSchema,
    signUpFormSchema,
  } from '../validators';
  import { signIn, signOut } from '@/auth';
  import { isRedirectError } from 'next/dist/client/components/redirect-error';
  import { hashSync } from 'bcrypt-ts-edge';
import { prisma } from '@/db/prisma';
// import { formatError } from '../utils';
import { redirect } from 'next/navigation';
// import { z } from 'zod';
import { revalidatePath } from 'next/cache';




// Sign in the user with credentials
export async function signInWithCredentials(
    prevState: unknown,
    formData: FormData
  ) {
    try {
      // set user from form and validate with Zod schema
      const user = signInFormSchema.parse({
        email: formData.get('email'),
        password: formData.get('password'),
      });

      console.log(user);


      await signIn('credentials', user);

      return { success: true, message: 'Signed in successfully'};

    } catch (error) {
      if (isRedirectError(error)) {
        throw error;
      }
      return { success: false, message: 'Invalid email or password' };
    }
  }

  // Sign user out
export async function signOutUser() { 
    await signOut();
    redirect('/')
  }

//   Sign up user
export async function signUp(
  prevState: unknown, 
  formData: FormData
) {

  await new Promise((resolve) => setTimeout(resolve, 1200))
  const validatedFields = signUpFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  )

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors
    }
    }

    const { name, email, password } = validatedFields.data
    // Hash the password before saving
    const hashedPassword = hashSync(password, 5);
    // console.log("Hashed password
try {
        await prisma.user.create({
            data: {            
                name,
                email,
                password: hashedPassword,       
            }
        });
        return { success: true, message: 'User created successfully' }
    } catch (error) {
        console.log("Error creating new user " + error);
        return {error: {message: ['Failed to create new user']}}
    }
    revalidatePath('/dashboard/')
redirect('/dashboard/')
}

        



      
        
        // user.password = await hashSync(user.password, 5)

        //  await prisma.user.create({
        //     data: {
        //         name: user.name,
        //         email: user.email,
        //         password: user.password            
        //     }                     
        // })
        
        // await signIn('credentials', {
        //     email: user.email,
        //     password: user.plainPassword
        // })
       
    
