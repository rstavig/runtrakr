import Link from 'next/link'
import React from 'react'
import { getMyTestItems } from '@/lib/actions/testActions';
import { DeleteItemButton } from '@/app/dashboard/components/delete-item-button';
import { SquarePen } from 'lucide-react';
import { formatInTimeZone } from "date-fns-tz"
import { Button } from "@/components/ui/button";



// interface TestItem {
//     id: string;
//     date: string;
//     item: string;
//     qty: number;
//     comments: string;
// }

export default async function TestPage() {

const testItems = await getMyTestItems();



console.log(testItems);

  return (
     <>
<div className="flex justify-between">
<h1 className="font-semibold text-3xl p-2">My Test Page</h1>

<button>
                    <Link
                        href='/dashboard/test/add'
                        className="custom-primary-btn"
                    >
                        Add New Test Item
                    </Link>
                </button>    

      </div>  

    <div className='mt-4'>This page will display some mock data in a table.  New items may be added to the list using the &quot;Add New&quot; button at the top of the page.  Items may also be edited or deleted using buttons located at the end of each item row.</div>

    <hr className='mt-5'/>

    <div className="mt-10">

        <table className="custom-table">

            <thead>
                <tr>
                    <th>Date</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Comments</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className="text-gray-700 font-medium text-lg text-center">
                {Array.isArray(testItems) ? (
                    testItems.map((item) => {
                        //  console.log("item.date:", item.date);
                    return (
                        

                        <tr key={item.id}>
                            <td>
                                {item.date
                                    ? formatInTimeZone(item.date, "UTC", "MM/dd/yyyy")
                                    : ""}
                            </td>
                            <td>{item.item}</td>
                            <td>{item.qty}</td>
                            <td>{item.comments}</td>
                            <td>
                                <div className="text-lg flex text-white items-center justify-center">
                            <Link href={`/dashboard/test/${item.id}/edit`}>
                                <Button variant="ghost" size="icon">
                                    <SquarePen id="edit-icon" />
                                </Button>
                            </Link>
                                <DeleteItemButton id={String(item.id ?? '')} />
                                </div>
                            </td>
                        </tr>
                    );
                    })
                 ) : (
                    <tr>
                        <td colSpan={5} className="text-red-500">Error loading items.</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>


    </>
  )
}

