import Link from "next/link";
import { getMyWorkouts } from "@/lib/actions/workoutActions";
import { Key } from "react";
import { DeleteWorkoutButton } from "@/app/dashboard/components/delete-workout-button";
import { SquarePen } from 'lucide-react';
import { Button } from "@/components/ui/button";



export default async function WorkoutsPage() {

const myData = await getMyWorkouts()



const typedMyData: { id: Key | null, workoutDate: string, situps: number, pushups: number, deadlifts: number, ballrolls: number, kneeups: number, comments: string }[] | undefined = Array.isArray(myData) ? myData.map(item => ({
            ...item,
            id: String(item.id),
            workoutDate: item.workoutDate instanceof Date ? item.workoutDate.toISOString().split('T')[0] : String(item.workoutDate ?? ''),
            situps: item.situps ?? 0,
            pushups: item.pushups ?? 0,
            deadlifts: item.deadlifts ?? 0,
            ballrolls: item.ballrolls ?? 0,
            kneeups: item.kneeups ?? 0,
            comments: item.comments ?? ''
        }))
        : undefined;

const workouts = typedMyData


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
                            <th>Actions</th>                        
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 font-medium text-lg text-center">
                {workouts && workouts.map((workout, id) => (           
              <tr key={workout.id && id}>    
                <td>
                {typeof workout.workoutDate === 'string' ? workout.workoutDate : new Date(workout.workoutDate).toLocaleDateString()}
                </td>              
                <td>{workout.situps}</td>
                <td>{workout.pushups}</td>
                <td>{workout.deadlifts}</td>
                <td>{workout.ballrolls}</td>
                <td>{workout.kneeups}</td>
                <td>{workout.comments}</td>
                <td>                
                  <Link href={`/dashboard/workouts/${workout.id}/edit`}>
                    <Button variant="ghost" size="icon">
                      <SquarePen id="edit-icon" />
                    </Button>
                  </Link>
                  <DeleteWorkoutButton id={String(workout.id ?? '')} /></td>
              </tr>
            ))}
          </tbody>
          </table> 
        </div>           
  </>              
)}