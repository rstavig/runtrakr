
import Link from "next/link";
import { getMyDots } from '@/lib/actions/dotActions'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { DeleteDotRunButton } from '@/app/dashboard/components/delete-dot-run';


interface DotItem {
    id: Key | null | undefined;
    daterun: Date | string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | null | undefined> | null | undefined;
    et: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | null | undefined> | null | undefined;
}

  


export default async function DotsPage() {
    
const myData = await getMyDots()

const typedMyData: DotItem[] | undefined = Array.isArray(myData) ? myData.map(item => ({
            ...item,
            id: String(item.id),
            et: String(item.et),
            daterun: item.daterun instanceof Date ? item.daterun.toISOString().split('T')[0] : String(item.daterun ?? ''),
            best: item.best !== null ? String(item.best) : '',
            shoes: item.shoes ?? '',
            comments: item.comments ?? ''
        }))
        : undefined;


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
                            <th>Actions</th>                        
                        </tr>
                    
                    </thead>
                
                <tbody className="text-gray-700 font-medium text-lg text-center">
                    

{typedMyData && typedMyData.map((item, idx) => (
    <tr key={item.id ?? idx}>       
        <td>{item.daterun instanceof Date ? item.daterun.toISOString().split('T')[0] : String(item.daterun ?? '')}</td>
        <td>{item.et}</td>
        <td>{(Array.isArray(myData) && myData[idx]?.loops) ?? ''}</td>
        <td>{(Array.isArray(myData) && myData[idx]?.best) ?? ''}</td>
        <td>{(Array.isArray(myData) && myData[idx]?.shoes) ?? ''}</td>
        <td>{(Array.isArray(myData) && myData[idx]?.comments) ?? ''}</td>
        <td><DeleteDotRunButton id={String(item.id ?? '')} /></td>
    </tr>
))}
          <tr>
              <td colSpan={6} className="text-right font-semibold">
                  Total Runs: {typedMyData?.length ?? 0}
              </td>
          </tr>
                    </tbody>
                </table> 
                </div>
     
                   
        </>              
  )}
