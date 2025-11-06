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
    export async function createWorkout(
      prevState: unknown,
      formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  
try {
    const workout = addWorkoutSchema.safeParse(
      {
        workoutDate: formData.get('workoutDate'),
        situps: formData.get('situps'),
        pushups: formData.get('pushups'),
        deadlifts: formData.get('deadlifts'),
        ballrolls: formData.get('ballrolls'),
        kneeups: formData.get('kneeups'),
        comments: formData.get('comments') || '',
      }
  )


if (!workout.success) {
  return {
    error: workout.error.flatten().fieldErrors
  }
}
    const { workoutDate, situps, pushups, deadlifts, ballrolls, kneeups, comments } = workout.data  


    // Create a new workout record
    await prisma.workouts.create({
      data: {
       workoutDate: new Date(workoutDate).toISOString(),
       situps: situps,
       pushups: pushups,
       deadlifts: deadlifts,
       ballrolls: ballrolls,
       kneeups: kneeups,
       comments: comments || '',
      }
    })

    return {
        success: true,
        message: 'Workout added successfully'
    }

 revalidatePath('dashboard/workouts')
    redirect('dashboard/workouts')

    } catch (error) {
 
  // Handle validation errors or other errors');
    return {success: false, message: formatError(error)}
} 

  }

// Update a Workout
export async function updateWorkout(id: string, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay

    try {
        const workout = addWorkoutSchema.safeParse(
            {
                workoutDate: formData.get('workoutDate'),
                situps: formData.get('situps'),
                pushups: formData.get('pushups'),
                deadlifts: formData.get('deadlifts'),
                ballrolls: formData.get('ballrolls'),
                kneeups: formData.get('kneeups'),
                comments: formData.get('comments') || '',
            }
        )

        if (!workout.success) {
            return {
                error: workout.error.flatten().fieldErrors
            }
        }

        const { workoutDate, situps, pushups, deadlifts, ballrolls, kneeups, comments } = workout.data

        // Update the existing workout record
        await prisma.workouts.update({
            where: { id },
            data: {
                workoutDate: new Date(workoutDate).toISOString(),
                situps,
                pushups,
                deadlifts,
                ballrolls,
                kneeups,
                comments: comments || '',
            }
        })

        revalidatePath('/dashboard/workouts')
        redirect('/dashboard/workouts')

        return {
            success: true,
            message: 'Workout updated successfully'
        }

    } catch (error) {
        return {success: false, message: formatError(error)}
    }
  
    
   
}

// Delete a Workout
export async function deleteWorkout(id: string) {
    try {
        await prisma.workouts.delete({
            where: { id }
        })

        revalidatePath('dashboard/workouts')
        return {
            success: true,
            message: 'Workout deleted successfully'
        }
    } catch (error) {
        return {success: false, message: formatError(error)}
    }
}
    

