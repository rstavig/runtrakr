import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import HillForm from '@/app/dashboard/components/add-hill-form';


const AddHillsRunPage = () => {

    return (
        <div className='w-full max-w-md mx-auto'>
           <Card className="w-full max-w-sm">
                    <CardHeader>
                      <CardTitle>Add Hill Run</CardTitle>
                      <CardDescription></CardDescription>
                    </CardHeader>
          <CardContent className='space-y-4'>
          <HillForm />
          </CardContent>
          </Card>
        </div>
      );
    };
  
  
  export default AddHillsRunPage