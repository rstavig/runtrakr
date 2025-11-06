'use server';

import { prisma } from '@/db/prisma';
import { addHillRunSchema } from '@/lib/validators'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { convertToPlainObject, formatError } from '../utils';



// / Get All Hills
export async function getMyHills() {
try {
  const data = await prisma.hills.findMany({
    orderBy: {  
      date: 'desc'
    }
  });
  console.log(data);
  
  return convertToPlainObject(data);
} catch (error) {
  return {error}
}

}

// Get Hill Count
export async function getHillCount() {
  try {
    const result = await prisma.hills.aggregate({
      _sum: {
        numHills: true,
      },
    }) as { _sum: { numHills: number | null } };
    // result._sum.numHills will be the sum or null if no rows
    return result._sum.numHills ?? 0;
  } catch (error) {
    console.log("Error getting Hill Count " + error);
    return {error: {message: ['Failed to get Hill Count']}}
  }
}

// Create Hill Run
export async function createHillRun(prevState: unknown, formData:FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1200))
    
    try {
    const hills = addHillRunSchema.parse(
        {
            date: formData.get('date'),
            numHills: formData.get('numHills'),
            et: formData.get('et'),
            best: formData.get('best'),
            shoes: formData.get('shoes'),
            comments: formData.get('comments') || '',
        } )
        
        const {date, et, numHills, best, shoes, comments} = hills

        await prisma.hills.create({
            data: {
                date: new Date(date),
                numHills,
                et,
                best,
                shoes,
                comments
            }
        });
    } catch (error) {
        console.log("Error creating Hill Run " + error);
        return {
          success: false,
          message: formatError(error),
        }
    }
    // Revalidate and redirect after successful creation
    revalidatePath('/dashboard/hills')
redirect('/dashboard/hills')
}

// Delete Hill Run
export async function deleteHillRun(id: string) {
  try {

    await prisma.hills.delete({ where: { id: Number(id) } });

    revalidatePath('/dashboard/hills');

    return {
      success: true,
      message: 'Hill Run deleted successfully',
    };
  } catch (error) {
    return { success: false, message: error instanceof Error ? error.message : 'An error occurred'};
  }
}


  
  