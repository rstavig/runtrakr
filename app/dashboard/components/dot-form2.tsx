'use client'

import { useActionState, useFormStatus } from "react";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { addDotRunSchema } from '../validators'
import { createDotRunAction } from "@/lib/actions/dotActions";

const initialState = {
    success: '',
    errors: {
        et: '',
        loops: '',
        best: ''
    }
}

export default function DotForm2() {
 const [state, formAction, isPending] = useActionState(createDotRunAction, initialState)

 return (
    <form action={createDotRunAction}>
        <div className="mt-6 flex flex-col gap-5">
            <div>
            <Input type='text' name='et' placeholder="Enter Elapsed Time" />
            {state.errors?.et && (
                <p className="text-red-500">{state.errors.et}</p>
            )}
            </div>
            {/* <Input type='text' name='loops' placeholder="Enter Number of Loops" /> */}
            <Input type='text' name='best' placeholder="Enter Best Loop Time" />
            <div>
            <Button type='submit'>
                {isPending ? 'Adding...' : 'Add Dot Run'}
                </Button>
            </div>
        </div>
    </form>
 )
  
}
