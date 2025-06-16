import Link from "next/link";
import { prisma } from '@/db/prisma';
import { getMyWorkouts } from "@/lib/actions/workoutActions";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


// async function getMyWorkouts() {
//   const data = await prisma.workouts.findMany()
//   return data
// }


export default async function WorkoutsPage() {

const myData = await getMyWorkouts()

console.log(myData);

const workouts = myData


return (
    <>
    <div className="flex justify-between">
  <h1 className="font-semibold text-3xl p-2">My Workouts</h1>
                <button>
                      <Link
                          href='/dashboard/workouts/add'
                          className="custom-primary-btn"
                      >
                          Add New Workout
                      </Link>
                </button>              
  </div>

  <hr />

  <div className="mt-20">
                <table className="custom-table">
                    <thead className="border-y-2 border-gray-400">
                        <tr>
                            <th>Date</th>
                            <th>Situps</th>
                            <th>Pushups</th>
                            <th>Deadlifts</th>
                            <th>Ballrolls</th>
                            <th>Kneeups</th>                        
                            <th>Comments</th>                        
                        </tr>
                    </thead>

                    <tbody className="text-gray-700 font-medium text-lg text-center">

        {workouts && workouts.map((workout: { id: Key | null | undefined; workoutDate: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; situps: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; pushups: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; deadlifts: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; ballrolls: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; kneeups: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; comments: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (           
              <tr key={workout.id}>    
                
                <td>{workout.workoutDate}</td>
                <td>{workout.situps}</td>
                <td>{workout.pushups}</td>
                <td>{workout.deadlifts}</td>
                <td>{workout.ballrolls}</td>
                <td>{workout.kneeups}</td>
                <td>{workout.comments}</td>
                </tr>    
)    )}            
              </tbody>

          </table> 
        </div>           
  </>              
)}