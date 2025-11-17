"use client"

import { useActionState } from 'react';
import { useForm } from 'react-hook-form';
import { addHillRunSchema } from '@/lib/validators'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label'

import { createHillRun } from '@/lib/actions/hillActions'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import DatePicker from './date-picker';




export default function HillForm() {


const [state, action, isPending] = useActionState(
    createHillRun,
    {
        success: false,
        message: '',
    }
);

console.log(state);

const form = useForm<z.infer<typeof addHillRunSchema>>({
    resolver: zodResolver(addHillRunSchema),
    defaultValues: {
        date: new Date().toISOString(),
        numHills: 5,
        et: 0,
        best: 0,
        shoes: '',
        comments: '',
    },
});

const AddHillsButton = () => {   
    return (
        <Button disabled={isPending} className='w-full' variant='default'>
            Add Hill Run
        </Button>
    );
};

return (
 <Form {...form}>
    <form action={action} className='space-y-6'>  
        <FormField
          control={form.control}
          name='date'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              
<FormControl>
        <div>
          <DatePicker
            value={field.value}
            onChange={field.onChange}
          />
          {/* Hidden input to ensure date is included in FormData */}
          <input type="hidden" name="date" value={field.value ?? ""} />
        </div>
      </FormControl>
      <FormMessage />
            </FormItem>
           
          )}
          />
         

        <div className='space-y-6'>
          <Label htmlFor='numHills'>Number</Label>
          <Input
            id='numHills'
            name='numHills'
            type='text'
            className='mb-5'
          />
        </div>
        <div className='space-y-6'>
          <Label htmlFor='et'>Time</Label>
          <Input
            id='et'
            name='et'
            type='text'
            className='mb-5'
          />
        </div>
        
        <div className='space-y-6'>
          <Label htmlFor='best'>Best</Label>
          <Input
            id='best'
            name='best'
            type='text'
            className='mb-5'
          />
        </div>
        <div className='space-y-6'>
          <Label htmlFor='Shoes'>Shoes</Label>
          <Input
            id='shoes'
            name='shoes'
            type='text'
            className='mb-5'
          />
        </div>
        {/* <div className='space-y-6'>
          <Label htmlFor='pr'>PR</Label>
          <Input
            id='pr'
            name='pr'
            type='text'
            className='mb-5'
          />
        </div> */}

        <div className='space-y-6'>
          <Label htmlFor='Comments'>Comments</Label>
          <Input
            id='comments'
            name='comments'
            type='text'
            className='mb-5'
          />
        </div>                    
             
        
          <div>
        <AddHillsButton />
        </div>

       {/* {!state.success && (
          <div className='text-center text-destructive'>{state.message}</div>
        )} */}
      

        </form>
        </Form>
     
    )
}



