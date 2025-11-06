

import { getTestItemById } from "@/lib/actions/testActions";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import  { TestForm } from '@/app/dashboard/components/test-form'
  
export default async function UpdateTestItemPage({ params }: { params: { id: string } }) {

  const { id } = await params;

   const item = await getTestItemById(id);


  // Handle not found or error
  if (!item || "error" in item) {
    return <div>Test item not found.</div>;
  }

  // Map DB fields to form fields if needed
  const initialData = {
   date: item.date ? new Date(item.date).toISOString().slice(0, 10) : "",
    item: item.item ?? "",
    qty: item.qty ?? 0,
    comments: item.comments ?? "",
  };


  return (
      <div className='w-full mx-auto'>
         <Card className="w-full">
                    <CardHeader>
                      <CardTitle>Update Test Page</CardTitle>
                      <CardDescription></CardDescription>
                    </CardHeader>
          <CardContent className='space-y-4'>
          <TestForm initialData={initialData} />
          </CardContent>
          </Card>
      </div>
    );
  };


