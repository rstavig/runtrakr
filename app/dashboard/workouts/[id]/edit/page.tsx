
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import  WorkoutForm  from '@/app/dashboard/components/workout-form'
  // import DotForm2 from '../../components/dot-form2';


const UpdateWorkoutPage = () => {

  return (
      <div className='w-full mx-auto'>
         <Card className="w-full">
                    <CardHeader>
                      <CardTitle>Update Workout</CardTitle>
                      <CardDescription></CardDescription>
                    </CardHeader>
          <CardContent className='space-y-4'>
          <WorkoutForm />
          </CardContent>
          </Card>
      </div>
    );
  };


export default UpdateWorkoutPage