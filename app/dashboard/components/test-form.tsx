'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { formSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod'  
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { testItemAction } from "@/lib/actions/testActions";
// import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import DatePicker from "./date-picker";


export type TestItemData = {
  id?: string;
  date?: string;
  item?: string;
  qty?: number;
  comments?: string;
  errors?: string[];
};
export function TestForm({ initialData }: { initialData?: TestItemData }) {
  const router = useRouter();

  type TestFormState = {
    success: boolean;
    errors: string | Record<string, unknown> | null;
    message: string;
  };

  // Ensure testItemAction always returns TestFormState with errors property
  const wrappedTestItemAction = async (prevState: TestFormState, formData: FormData): Promise<TestFormState> => {
    const result = await testItemAction(prevState, formData);
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
  };

  // Use useActionState to manage the state of the action
  // This will handle the action state, including success, errors, and loading state  
  const [state, action, isPending] = useActionState<TestFormState, FormData>(
    wrappedTestItemAction,
    {
      success: false,
      errors: null,
      message: '',
    } 
  );


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: initialData?.date ?? new Date().toISOString().split('T')[0],
      item: initialData?.item ?? '',
      qty: initialData?.qty ?? 0,
      comments: initialData?.comments ?? '',
    },
  });

 useEffect(() => {
    if (initialData) {
      form.reset({
        date: initialData.date ?? new Date().toISOString().split('T')[0],
        item: initialData.item ?? '',
        qty: initialData.qty ?? 0,
        comments: initialData.comments ?? '',
      });
    }
  }, [initialData, form]);

   useEffect(() => {
    if (state.success) {
      router.push('/dashboard/test');
    }
  }, [state.success, router]);

  return (
    <>
    <Form {...form}>
    <form action={action} className="space-y-6 w-full max-w-sm">
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
            name="date"
           render={({ field }) => (  
            <FormItem className="flex flex-col pt-2">
              <FormLabel>Date of Test Item</FormLabel>
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
   
        <FormField
            control={form.control}
            name="item"
            render={({ field }) => (    
            <FormItem>
              <FormControl>
                <Input
                  id="item"
                  placeholder="Enter item name"
                  
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
            )}
          />

        <FormField
            control={form.control}
            name="qty"
            render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  id="qty"
                  placeholder="Enter quantity"
                  type="number"
                  min="0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
        )}
          />

        <FormField
            control={form.control}
            name="comments"
            render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  id="comments"
                  placeholder=" Comments"
                  type="text"
                  {...field}
                />
              </FormControl>
            </FormItem>
            )}
        />
        
        <Button
        className='w-full' variant='default'
        type="submit"
        disabled={isPending}
        >
            {isPending ? "Saving..." : initialData?.id ? "Update Test Item" : "Save Test Item"}
        </Button>
        </form>
  
    </Form>
    </>
  );
}






