
import { getMyHills } from '@/lib/actions/hillActions';
import Link from "next/link";





interface HillItem {
    id: string;
    date: string;
    numHills: number;
    et: string;
    best: string;
    shoes: string;
    comments: string;
}

export default async function HillsPage() {
    
    const myData = await getMyHills();
    const typedMyData: HillItem[] | undefined = Array.isArray(myData)
        ? myData.map(item => ({
            ...item,
            id: String(item.id),
            et: String(item.et),
            best: item.best !== null ? String(item.best) : '',
            shoes: item.shoes ?? '',
            comments: item.comments ?? ''
        }))
        : undefined;

  return (
    <>       
        <div className="flex justify-between">
        <h1 className="font-semibold text-3xl mt-10 p-2">My Hills</h1>

                <button>
                    <Link
                        href='/dashboard/hills/add'
                        className="custom-primary-btn"
                    >
                        Add New Hill Run
                    </Link>
                </button>                  
            </div>
            <div className="mt-15">
                <table className="custom-table">
            <tbody className="text-gray-700 font-medium text-lg text-center">
                {typedMyData && typedMyData.map((item: HillItem) => (
                    <tr key={item.id}>
                        <td>{item.date}</td>
                        <td>{item.numHills}</td>
                        <td>{item.et}</td>
                        <td>{item.best}</td>
                        <td>{item.shoes}</td>
                        <td>{item.comments}</td>
                        <td>{item.et}</td>
                    </tr>
                ))}
            </tbody>
                </table>
            </div>
    </>
  )
}

