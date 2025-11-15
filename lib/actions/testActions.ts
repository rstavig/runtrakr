'use server';

import { prisma } from '@/db/prisma';
import { revalidatePath } from "next/cache";
import { formSchema } from '../validators';
import {  formatError } from '../utils';
import { convertToPlainObject } from '../utils';


// Get All Test Items
export async function getMyTestItems() {
try {
  const data = await prisma.test.findMany({
    orderBy: {
      date: 'desc'
    }
  });
  
  return  data 
} catch (error) {
  return {error}
} 
}

// Create or Update Test Item
export async function testItemAction(
    prevState: unknown,
    formData: FormData) {


    try {
const testItem = formSchema.parse(
    {
        date: formData.get('date'),
        item: formData.get('item'),
        qty: Number(formData.get('qty')),
        comments: formData.get('comments') || '',
    }
);


const {  date, item, qty, comments } = testItem
const id = formData.get('id') as string | null;

// If id exists, update; otherwise, create
if (id) {
    await prisma.test.update({
        where: { id },
        data: {
            date: new Date(date),
            item: item,
            qty: qty,
            comments: comments ?? '',
        }
    });
} else {
    await prisma.test.create({
        data: {
            date: new Date(date),
            item: item,
            qty: qty,
            comments: comments ?? '',
        }
    });
}

       revalidatePath('/dashboard/test');

        return {
            success: true,
            message: id ? "Test item updated successfully" :
            "Test item created successfully"
        }
   } catch (error) {
    console.error("Error saving test item:", error);
    return {
      success: false,
      message: formatError(error),
    };
 }

    }

    

    // Delete Test Item
export async function deleteTestItem(id: string) {
    try {
        await prisma.test.delete({
            where: { id }            
        });      

         revalidatePath('/dashboard/test');

        return {
            success: true,
            message: "Test item deleted successfully"
        }
       
       

    } catch (error) {
        console.error("Error deleting test item:", error);
        return {
            success: false,
            message: "Failed to delete test item"
        }
    }
}


// Get Test Item by Id
export async function getTestItemById(id: string) {
    try {
        const testItem = await prisma.test.findUnique({
            where: { id }
        });

if (!testItem) {
    return null;
}

        return convertToPlainObject(testItem);


    } catch (error) {
        console.error("Error fetching test item:", error);
        return { error: formatError(error) };
    }
}