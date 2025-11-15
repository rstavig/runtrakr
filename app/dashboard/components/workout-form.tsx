"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
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
import { workoutItemSchema } from '@/lib/validators'
import { workoutItemAction } from '@/lib/actions/workoutActions'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
// import { redirect } from 'next/navigation';
import DatePicker from "./date-picker";


export type WorkoutItemData = {
  id?: string;
  workoutDate?: string;
  situps?: number;
  pushups?: number;
  deadlifts?: number;
  ballrolls?: number;
  kneeups?: number;
  comments?: string;
  errors?: string[];
};

export default function WorkoutForm({ initialData }: { initialData?: WorkoutItemData }) {
 const router = useRouter();

  type WorkoutFormState = {
    success: boolean;
    errors: string | Record<string, unknown> | null;
    message: string;
  };

  // Ensure testItemAction always returns TestFormState with errors property
  const wrappedWorkoutItemAction = async (prevState: WorkoutFormState, formData: FormData): Promise<WorkoutFormState> => {
    const result = await workoutItemAction(prevState, formData);
    return {
      success: result.success,
      message: result.message,
      errors: 'errors' in result && result.errors
        ? (typeof result.errors === "string"
            ? result.errors
            : Object.keys(result.errors).length > 0
              ? result.errors as Record<string, unknown>
              : null)
        : null,
    };
  }

  // Use useActionState to manage the state of the action
  // This will handle the action state, including success, errors, and loading state  

  const [state, action, isPending] = useActionState<WorkoutFormState, FormData>(
    wrappedWorkoutItemAction, {   
    success: false,
    errors: null,
    message: "",
  }
  );
    

  const form = useForm<z.infer<typeof workoutItemSchema>>({
    resolver: zodResolver(workoutItemSchema),
    defaultValues: {
      workoutDate: initialData?.workoutDate ?? new Date().toISOString().split('T')[0],
      situps: initialData?.situps ?? 25,
      pushups: initialData?.pushups ?? 25,
      deadlifts: initialData?.deadlifts ?? 25,
      ballrolls: initialData?.ballrolls ?? 25,
      kneeups: initialData?.kneeups ?? 15,
      comments: initialData?.comments || ''
    },
  })

  useEffect(() => {
    if (initialData) {
      form.reset({
          workoutDate: initialData?.workoutDate ?? new Date().toISOString().split('T')[0],
        situps: initialData.situps ?? 25,
        pushups: initialData.pushups ?? 25,
        deadlifts: initialData.deadlifts ?? 25,
        ballrolls: initialData.ballrolls ?? 25,
        kneeups: initialData.kneeups ?? 15,
        comments: initialData.comments ?? ''
      });
    }
   }, [initialData, form]);

  // console.log(state);

  useEffect(() => {
    if (state.success) {
      router.push('/dashboard/workouts');
    }
  }, [state.success, router]);

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
    <>
   <Form {...form}>
      <form  action={action} className='space-y-6 mx-auto w-full max-w-lg'>
        {/* Hidden ID field for updates */}
        {initialData?.id && <input type="hidden" name="id" value={initialData.id} />}

{state.message && (
          <div className="text-green-600 mb-2">{state.message}</div>
        )}
        {state.errors && (
          <div className="text-red-600 mb-2">
            {typeof state.errors === "string"
              ? state.errors
              : JSON.stringify(state.errors)}
          </div>
        )}
        <FormField
                    control={form.control}
                    name="workoutDate"
                   render={({ field }) => (  
                    <FormItem className="flex flex-col pt-2">
                    <FormLabel>Date of Workout</FormLabel>
                    <FormControl>
                <div>
                  <DatePicker
                     value={field.value as string}
                     onChange={field.onChange}
                  />
                  {/* Hidden input to ensure date is included in FormData */}
                  <input type="hidden" name="workoutDate" value={field.value ?? ""} />
                </div>
</FormControl>
      <FormMessage />
    </FormItem>                       
  )}     
/>

<div className="flex flex-col md:flex-row gap-5">
<div>
<Label htmlFor='situps'>Situps</Label>
<Input
            id='situps'
            name='situps'
            type='number'
            className='mb-5'
            defaultValue={initialData?.situps ?? 25}
          />
</div>
<div>
<Label htmlFor='pushups'>Pushups</Label>
<Input
            id='pushups'
            name='pushups'
            type='number'
            className='mb-5'
            defaultValue={initialData?.pushups ?? 25}
          />
</div>


        <div>
          <Label htmlFor='deadlifts'>Deadlifts</Label>
          <Input
            id='deadlifts'
            name='deadlifts'
            type='number'
            className='mb-5'
              defaultValue={initialData?.deadlifts ?? 25}
          />
</div>

        <div>
          <Label htmlFor='ballrolls'>Ballrolls</Label>
          <Input
            id='ballrolls'
            name='ballrolls'
            type='number'
            className='mb-5'
              defaultValue={initialData?.ballrolls ?? 25}
          />
</div>

        <div>
          <Label htmlFor='kneeups'>Kneeups</Label>
          <Input
            id='kneeups'
            name='kneeups'
            type='number'
            className='mb-5'
              defaultValue={initialData?.kneeups ?? 15}
          />
</div>

        <div>
          <Label htmlFor='comments'>Comments</Label>
          <Input
            id='comments'
            name='comments'
            type='text'
            className='mb-5'
            defaultValue={initialData?.comments ?? ''}
          />
</div>

   </div> 
        <AddWorkoutButton />
      </form>
      </Form>
</>
    
        
   )
}




  

