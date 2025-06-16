"use client"

import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { useActionState } from "react";
import { createDotsRun } from '@/lib/actions/dotActions';
import { toast } from "sonner"
import Link from 'next/link';




export function DotsForm() {

  const [state, action, isPending] = useActionState(createDotsRun, {
    succes: false,
    message: "",  
  })

  console.log(state);

const AddDotsButton = () => {   
      return (
        <Button 
         className='w-full' variant='default'
         type="submit"
         >
          {isPending ? "Saving..." : "Save Dot Run"}
        </Button>
      );
    };

   return (
    <>
      <form action={action}>
        <div className='space-y-6'>
          <Label htmlFor='date'>Date</Label>
          <Input
            id='daterun'
            name='daterun'
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
          <Label htmlFor='loops'>Loops</Label>
          <Input
            id='loops'
            name='loops'
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
          <Label htmlFor='shoes'>Shoes</Label>
          <Input
            id='shoes'
            name='shoes'
            type='text'
            className='mb-5'
          />
        </div>
        <div className='space-y-6'>
          <Label htmlFor='comments'>Comments</Label>
          <Input
            id='comments'
            name='comments'
            type='text'
            className='mb-5'
          />
        </div>
{/* <button type="submit">Save</button> */}

    <AddDotsButton />   

      </form>
       
        
    </> 
   )
  }



  export default DotsForm

