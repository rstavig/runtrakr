'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CalendarIcon } from 'lucide-react'
import { addDotRunSchema } from '@/lib/validators'
import { createDotsRun } from '@/lib/actions/dotActions'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { useActionState, useState } from 'react';
import { format } from 'date-fns';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

export default function DotForm2() {
const [date, setDate] = useState<Date>(new Date());
const [open, setOpen] = useState(false);
 
    
    const [state, action, isPending] = useActionState(createDotsRun,
        {
            success: false,
            message: '',
            error: undefined
        }
    );

console.log(state);

    const form = useForm<z.infer<typeof addDotRunSchema>>({
        resolver: zodResolver(addDotRunSchema),
        defaultValues: {
            daterun: new Date().toISOString(),
            et: '',
            loops: 0,
            best: '',
            shoes: '',
            comments: ''
        }
    });

    

    form.watch((data) => {
        console.log(data);
    });


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
        <Form {...form}>
            <form  action={action}>

            
                
                <FormField
                    control={form.control}
                    name='daterun'
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Date</FormLabel>
                        <Popover  open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant='outline'
                                    className='w-full justify-start text-left font-normal'
                                >
                                    {field.value ? format(new Date(field.value), 'PPP') : 'Select a date'}
                                    <CalendarIcon className='ml-2 h-4 w-4' />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className='w-auto p-0'>
                                <Calendar
                                    mode='single'
                                    selected={date}
                                    onSelect={(newValue) => {
                                        if (newValue) {
                                            setDate(newValue);
                                            field.onChange(newValue);
                                            setOpen(false);
                                        }
                                    }}
                                autoFocus
                                         
                                />
                            </PopoverContent>
                        </Popover>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name='et'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Elapsed Time</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder='Enter elapsed time' />
                        </FormControl>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name='loops'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Loops</FormLabel>
                        <FormControl>
                            <Input {...field} type='number' placeholder='Number of loops' />
                        </FormControl>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name='best'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Best Loop Time</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder='Best loop time' />
                        </FormControl>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name='shoes'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Shoes</FormLabel>
                        <Input {...field} placeholder='Shoes used' />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name='comments'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Comments</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder='Comments' />
                        </FormControl>
                    </FormItem>
                )}
            />

                <AddDotsButton />   
            </form>
        </Form>
    );
}

