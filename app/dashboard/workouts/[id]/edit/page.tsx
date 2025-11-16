
import { getWorkoutById } from '@/lib/actions/workoutActions';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import  WorkoutForm  from '@/app/dashboard/components/workout-form'


export default async function UpdateWorkoutPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

    const workout = await getWorkoutById(id);

  // Handle not found or error
  if (!workout || "error" in workout) {
    return <div>Workout not found.</div>;
  }

  // Map DB fields to form fields if needed
const initialData = {
    id: workout.id,
   workoutDate: workout.workoutDate ? new Date(workout.workoutDate).toISOString().slice(0, 10) : "",
    situps: workout.situps ?? 0,
    pushups: workout.pushups ?? 0,
    deadlifts: workout.deadlifts ?? 0,
    ballrolls: workout.ballrolls ?? 0,
    kneeups: workout.kneeups ?? 0,
    comments: workout.comments ?? "",
  };

console.log(initialData);

  return (
      <div className='w-full mx-auto'>
         <Card className="w-full">
                    <CardHeader>
                      <CardTitle>Update Workout</CardTitle>
                      <CardDescription></CardDescription>
                    </CardHeader>
          <CardContent className='space-y-4'>
          <WorkoutForm initialData={initialData}/>
          </CardContent>
          </Card>
      </div>
    );
  };


