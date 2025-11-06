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

// Create a Dots Run/for the dot-form.tsx
export async function createDotsRun(prevState: unknown, formData:FormData) {

await new Promise((resolve) => setTimeout(resolve, 1200))

  try {
    const dots = addDotRunSchema.safeParse(
      {
             daterun: formData.get('daterun'),
             et: formData.get('et'),
             loops: formData.get('loops'),
             best:  formData.get('best'),
             shoes:  formData.get('shoes'),
             comments: formData.get('comments'),
    }
  )
if (!dots.success) {return {
  error: dots.error.flatten().fieldErrors
}}
const {daterun, loops, best, et, shoes, comments} = dots.data

await prisma.dots.create({
  data: {
    daterun: new Date(daterun).toISOString(),
    et: et,
    loops: loops,
    best:  best,
    shoes: shoes,
    comments: comments,
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


export async function createDotRunAction(data: z.infer<typeof addDotRunSchema>) {

  try {
  const dotRun = addDotRunSchema.parse(data)

   await prisma.dots.create({data: dotRun})
 
  revalidatePath('/dashboard/dots')
  redirect('/dashboard/dots')

  return {
      success: true,
      message: 'Dot Run created successfully',
    };

  } catch (error) {
    console.log("Error creating Dot Run " + error);
    return {error: {message: ['Failed to create Dot Run']}}
  }

}

// Delete Dot Run
export async function deleteDotRun(id: string) {
  try {
    await prisma.dots.delete({
      where: { id }
    });
    revalidatePath('/dashboard/dots')
    return { success: true, message: "Dot Run deleted successfully" };
  } catch (error) {
    console.log("Error deleting Dot Run " + error);
    return { success: false, message: formatError(error) };
  }
}
