"use client"

import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner"
import Link from 'next/link';
import { useActionState, useEffect, useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form'
import { useFormStatus } from 'react-dom';
import { addWorkoutSchema } from '@/lib/validators'
import { Workout } from '@/types'
import { createWorkout } from '@/lib/actions/workoutActions'
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns'
import { Label } from '@/components/ui/label';
import { Popover, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { PopoverContent } from '@radix-ui/react-popover';
import { Calendar } from '@/components/ui/calendar';
import { redirect } from 'next/navigation';
// import { useRouter } from 'next/router';



const WorkoutForm = ({

}) => {

  const form = useForm<z.infer<typeof addWorkoutSchema>>({
    resolver: zodResolver(addWorkoutSchema),
    defaultValues: {
      workoutDate: '',
      situps: 25,
      pushups: 25,
      deadlifts: 25,
      ballrolls: 25,
      kneeups: 10,
      comments: ''
    },
  })

const onSubmit: SubmitHandler<z.infer<typeof addWorkoutSchema>> = async (
  values
) => {
  const res = await createWorkout(values)

    if (!res.success) {
      toast('Oops! Oops! Oops!') 
    } else {
      toast('Workout successfully recorded')      
    }
redirect('/dashboard/workouts')


}


   return (
    <Form {...form}> 
      <form  
      method='POST'
      className='flex flex-col mx-auto max-w-md gap-3' 
      onSubmit={form.handleSubmit(onSubmit)}
      >


<FormField 
        control={form.control} 
        name='workoutDate'
        render={({ field }) => (
          <FormItem className='flex flex-col pb-2'>
            <FormLabel className='mb-1'>Enter Date of Workout</FormLabel>

            <FormControl>
              <Input {...field} className='mb-4'/>
            </FormControl>
            
        {/* <Popover>
                <PopoverTrigger asChild>
                            <FormControl>
                            <Button variant="outline" className='normal-case flex justify-between pr-10'>
                        {!!field.value ? format(field.value, "P") :  <span>Pick a Date</span>}
                               
                                <CalendarIcon />
                                </Button>
                            </FormControl>
                </PopoverTrigger>
                <PopoverContent align='start' className='w-auto p-0'>
                    <Calendar 
                    mode="single"
                    defaultMonth={field.value}
                    selected={field.value}
                    onSelect={field.onChange}
                    fixedWeeks
                    weekStartsOn={1}
                    initialFocus
                    captionLayout="dropdown-buttons"
                    fromDate={new Date()}
                    fromYear={2000}
                    toYear={2025}
                    className='bg-popover'
                    />
                </PopoverContent>

        </Popover>        */}


            <FormMessage />
          </FormItem>
        )}
/>        
<div className="flex flex-col md:flex-row gap-5">
<FormField 
        control={form.control} 
        name="situps" 
        render={({ field }) => (
          <FormItem>
            <FormLabel>Situps</FormLabel>
            <FormControl>
              <Input placeholder='' {...field} className='mb-4 max-w-28'/>
            </FormControl>
            {/* <FormDescription>Enter Total Time</FormDescription> */}
            <FormMessage />
          </FormItem>
        )}
        />
        
     
      <FormField 
        control={form.control} 
        name="pushups" 
        render={({ field }) => (
          <FormItem>
            <FormLabel>Pushups</FormLabel>
            <FormControl>
              <Input placeholder='' {...field} className='mb-4 max-w-28'/>
            </FormControl>
            {/* <FormDescription>Enter number of loops</FormDescription> */}
            <FormMessage />
          </FormItem>
        )}
        />

<FormField 
        control={form.control} 
        name="deadlifts" 
        render={({ field }) => (
          <FormItem>
            <FormLabel>Deadlifts</FormLabel>
            <FormControl>
              <Input placeholder='' {...field} className='mb-4 max-w-28'/>
            </FormControl>
            {/* <FormDescription>Enter best Loop time</FormDescription> */}
            <FormMessage />
          </FormItem>
        )}
        />
       
        <FormField 
        control={form.control} 
        name="ballrolls" 
        render={({ field }) => (
          <FormItem>
            <FormLabel>Ballrolls</FormLabel>
            <FormControl>
              <Input placeholder='' {...field} className='mb-4 max-w-28'/>
            </FormControl>
            {/* <FormDescription>Enter best Loop time</FormDescription> */}
            <FormMessage />
          </FormItem>
        )}
        />
        


<FormField 
        control={form.control} 
        name="kneeups" 
        render={({ field }) => (
          <FormItem>
            <FormLabel>Kneeups</FormLabel>
            <FormControl>
              <Input placeholder=''             
               {...field} className='mb-4 max-w-28'/>
            </FormControl>
            {/* <FormDescription>Enter best Loop time</FormDescription> */}
            <FormMessage />
          </FormItem>
        )}
        />
</div>
      
        <FormField 
        control={form.control} 
        name="comments" 
        render={({ field }) => (
          <FormItem>
            <FormLabel>Comments</FormLabel>
            <FormControl>
              <Input placeholder='' {...field} className='mb-4'/>
            </FormControl>
            {/* <FormDescription>Enter best Loop time</FormDescription> */}
            <FormMessage />
          </FormItem>
        )}
        />

      <Button
      type='submit'
      className='w-full mt-5 bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-200'
      >
        Submit
        </Button> 
    
     
      </form>

     </Form>
        
   )
}




  export default WorkoutForm

