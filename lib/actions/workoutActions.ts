'use server';

import { prisma } from '@/db/prisma';
import {  formatError } from '../utils';
import { z } from 'zod' 
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { addWorkoutSchema } from '@/lib/validators'


// Get All Workouts
export async function getMyWorkouts() {
    try {
      const data = await prisma.workouts.findMany({
        orderBy: {
          workoutDate: 'desc'
        }
      });
      
      return  data 
    } catch (error) {
      return {error}
    }     
    }

    // Create a Workout
    export async function createWorkout(data: z.infer<typeof addWorkoutSchema>) {
try {
    const workout = addWorkoutSchema.parse(data)
    await prisma.workouts.create({ data: workout })

    revalidatePath('dashboard/workouts')
    redirect('dashboard/workouts')
  
    return {
        success: true,
        message: 'Workout added successfully'
    }
} catch (error) {
    return {success: false, message: formatError(error)}
}    
}
    

