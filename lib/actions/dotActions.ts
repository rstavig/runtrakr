'use server';

import { prisma } from '@/db/prisma';
import { addDotRunSchema } from '../validators'
import {  formatError } from '../utils';
import { z } from 'zod' 
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';



// Get All Dots
export async function getMyDots() {
try {
  const data = await prisma.dots.findMany({
    orderBy: {
      daterun: 'desc'
    }
  });
  
  return  data 
} catch (error) {
  return {error}
}

  
}

// Create a Dots Run
export async function createDotsRun(prevState: unknown, formData:FormData) {

await new Promise((resolve) => setTimeout(resolve, 1200))

  try {
    const dots = addDotRunSchema.parse({
             daterun: formData.get('daterun'),
             et: formData.get('et'),
             loops: formData.get('loops'),
             best:  formData.get('best'),
             shoes:  formData.get('shoes'),
             comments: formData.get('comments'),
    })



await prisma.dots.create({
  data: {
    daterun: dots.daterun,
    et: dots.et,
    loops: dots.loops,
    best:  dots.best,
    shoes: dots.shoes,
    comments: dots.comments,
  }
})

return { success: true, message: "Dot Run recorded successfully"}

revalidatePath('/dashboard/dots')
     redirect('/dashboard/dots')

} catch (error) {
  return {success: false, message: formatError(error)}
}  
  
}

// Get all Dot Loops
export async function getDotLoops() {
try {
    const result = await prisma.dots.aggregate({
      _sum: {
        loops: true,
      },
    }) as { _sum: { loops: number | null } };
   
    return result._sum.loops ?? 0;
  } catch (error) {
    console.log("Error getting Loop Count " + error);
    return {error: {message: ['Failed to get Loop Count']}}
  }
}

// This is for dotrun2


// export async function createDotRunAction(prevState: any, formData: FormData ) {
//   const dotFormData = Object.fromEntries(formData)
//   const validatedDotFormData = addDotRunSchema.safeParse(dotFormData)

//   await new Promise((resolve) => setTimeout(resolve, 500));

// console.log(validatedDotFormData);

//   if (!validatedDotFormData.success) {
//     const formFieldErrors = validatedDotFormData.error.flatten().fieldErrors
//     return {
//       errors: {
//         et: formFieldErrors?.et,
//         loops: formFieldErrors?.loops,
//         best: formFieldErrors?.best
//       }
//     }
//   }
// return {
//   success: "Your data was recorded successfully"
// }

// }