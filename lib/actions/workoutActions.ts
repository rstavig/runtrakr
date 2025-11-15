'use server';

import { prisma } from '@/db/prisma';
import {  convertToPlainObject, formatError } from '../utils'; 
import { revalidatePath } from 'next/cache';
import { workoutItemSchema } from '@/lib/validators'




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

    // Create or Update Workout
    export async function workoutItemAction(
      prevState: unknown,
      formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  
try {
    const workout = workoutItemSchema.parse(
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

    const { workoutDate, situps, pushups, deadlifts, ballrolls, kneeups, comments } = workout  

// Check if we are updating an existing workout
const id = formData.get('id') as string | null;
if (id) {
    // Update existing workout record
    await prisma.workouts.update({
      where: { id },
      data: {
       workoutDate: new Date(workoutDate),
       situps: situps,
       pushups: pushups,
       deadlifts: deadlifts,
       ballrolls: ballrolls,
       kneeups: kneeups,
       comments: comments ?? '',
      }
    })
} else {
    // Create a new workout record
    await prisma.workouts.create({
      data: {
       workoutDate: new Date(workoutDate),
       situps: situps,
       pushups: pushups,
       deadlifts: deadlifts,
       ballrolls: ballrolls,
       kneeups: kneeups,
       comments: comments ?? '',
      }
    })
}
    revalidatePath('/dashboard/workouts');

    return {
        success: true,
        message: id ?'Workout updated successfully' :
        'Workout created successfully'
    }
    } catch (error) {
    console.error('Error creating workout:', error);
 
  // Handle validation errors or other errors');
    return {success: false, message: formatError(error)}
} ;
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

// Get Workout Item by Id
export async function getWorkoutById(id: string) {
    try {
        const workout = await prisma.workouts.findUnique({
            where: { id }
        });

        if (!workout) {
            return null;
        }

        return convertToPlainObject(workout);
    } catch (error) {
        console.error("Error fetching workout by ID:", error);
        return { error: formatError(error) };
    }
}