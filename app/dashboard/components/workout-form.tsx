"use client"


import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// import { toast } from "sonner"
import { useActionState } from "react";
import {useForm } from 'react-hook-form'
import { addWorkoutSchema } from '@/lib/validators'
import { createWorkout } from '@/lib/actions/workoutActions'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// import { format } from 'date-fns'
import { Label } from '@radix-ui/react-label';
// import { redirect } from 'next/navigation';



export default function WorkoutForm() {

  // Use useActionState to manage the state of the action
  // This will handle the action state, including success, errors, and loading state  

  const [state, action, isPending] = useActionState(
    createWorkout, {   
    success: false,
    message: "",
  }
  );
    
 

  // console.log("State: " + JSON.stringify(state, null, 2));

  const form = useForm<z.infer<typeof addWorkoutSchema>>({
    resolver: zodResolver(addWorkoutSchema),
    defaultValues: {
      workoutDate: new Date(),
      situps: 25,
      pushups: 25,
      deadlifts: 25,
      ballrolls: 25,
      kneeups: 10,
      comments: ''
    },
  })

  // console.log(state);



  const AddWorkoutButton = () => {
      return (
        <Button 
         className='w-full' variant='default'
         type="submit"
         >
          {isPending ? "Saving..." : "Save Workout Data"}
        </Button>
      );
    };
   return (
   
      <form  action={action} className='space-y-6'>

        <div className='space-y-6'>
          <Label htmlFor='date'>Date</Label>
          <Input
            id='workoutDate'
            name='workoutDate'
            type='Date'
            
            className='mb-5'
          />
        </div>
<div className="flex flex-col md:flex-row gap-5">
<div>
<Label htmlFor='situps'>Situps</Label>
<Input
            id='situps'
            name='situps'
            type='number'
            className='mb-5'
            defaultValue={25}
          />
</div>
<div>
<Label htmlFor='pushups'>Pushups</Label>
<Input
            id='pushups'
            name='pushups'
            type='number'
            className='mb-5'
            defaultValue={25}
          />
</div>


        <div>
          <Label htmlFor='deadlifts'>Deadlifts</Label>
          <Input
            id='deadlifts'
            name='deadlifts'
            type='number'
            className='mb-5'
              defaultValue={25}
          />
</div>

        <div>
          <Label htmlFor='ballrolls'>Ballrolls</Label>
          <Input
            id='ballrolls'
            name='ballrolls'
            type='number'
            className='mb-5'
              defaultValue={25}
          />
</div>

        <div>
          <Label htmlFor='kneeups'>Kneeups</Label>
          <Input
            id='kneeups'
            name='kneeups'
            type='number'
            className='mb-5'
              defaultValue={10}
          />
</div>

        <div>
          <Label htmlFor='comments'>Comments</Label>
          <Input
            id='comments'
            name='comments'
            type='text'
            className='mb-5'
          />
</div>

       
        



{/* </div> */}
      
        


   </div> 
        <AddWorkoutButton />

      </form>

    
        
   )
}




  

