"use client"

import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label'
// import { toast } from "sonner"
// import Link from 'next/link';
// import { Checkbox } from '../ui/checkbox';
import { useActionState } from 'react';
import { createHillRun } from '@/lib/actions/hillActions'


export function HillForm() {


    const [state, action, isPending] = useActionState(createHillRun, {
        success: false,
        message: ""
       
    })

    console.log(state);

const AddHillsButton = () => {
     
      return (
        <Button disabled={isPending} className='w-full' variant='default'>
           Add Hill Run
        </Button>
      );
    };



    return (
     
        <form action={action}>  
        <div className='space-y-6'>
          <Label htmlFor='date'>Date</Label>
          <Input
            id='date'
            name='date'
            type='text'
            className='mb-5'
          />
        </div>
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
     
    )
}



