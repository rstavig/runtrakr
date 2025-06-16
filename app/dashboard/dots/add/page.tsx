
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import  DotForm  from '@/app/dashboard/components/dot-form'
  // import DotForm2 from '../../components/dot-form2';


const AddDotRunPage = () => {

  return (
      <div className='w-full max-w-md mx-auto'>
         <Card className="w-full max-w-sm">
                    <CardHeader>
                      <CardTitle>Add Dot Run</CardTitle>
                      <CardDescription></CardDescription>
                    </CardHeader>
          <CardContent className='space-y-4'>
          <DotForm/>
          </CardContent>
          </Card>
      </div>
    );
  };


export default AddDotRunPage