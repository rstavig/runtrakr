import { prisma } from '@/db/prisma';
import Link from "next/link";
import { getMyDots } from '@/lib/actions/dotActions'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


// async function getMyDots() {
//     const data = await prisma.dots.findMany()
//     return data
//   }

  


export default async function DotsPage() {
    
const myData = await getMyDots()




  return (


   
<>




<div className="flex justify-between">
<h1 className="font-semibold text-3xl p-2">My Dot Runs</h1>

<button>
                    <Link
                        href='/dashboard/dots/add'
                        className="custom-primary-btn"
                    >
                        Add New Dot Run
                    </Link>
                </button>    

      </div>                     

<hr className='mt-5'/>

            <div className="mt-15">
                <table className="custom-table">
                    <thead className="border-y-2 border-gray-400 gap-5">
                        <tr className='gap-5'>
                            <th>Date</th>
                            <th>ET</th>
                            <th>Loops</th>
                            <th>Best</th>
                            <th>Shoes</th>
                            <th>Comments</th>                        
                        </tr>
                    
                    </thead>
                
                <tbody className="text-gray-700 font-medium text-lg text-center">
                    

          
            {myData && myData.map((item: { id: Key | null | undefined; daterun: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; et: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; loops: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; best: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; shoes: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; Comments: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
   
  


            <tr key={item.id}>       
            
            <td>{item.daterun}</td>
            <td>{item.et}</td>
            <td>{item.loops}</td>
            <td>{item.best}</td>
            <td>{item.shoes}</td>
            <td>{item.comments}</td>
            </tr>
            ))}
       
                    </tbody>
                </table> 
                </div>
     
                   
        </>              
  )}
