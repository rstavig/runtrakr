import Link from 'next/link';
import { auth } from '@/auth';
import { signOutUser } from '@/lib/actions/userActions';
import { Button } from '@/components/ui/button';


const UserButton = async () => {
    const session = await auth()

    if (!session) {
        return (
          <Button asChild>
            <Link href='/signin' className='w-full py-4 px-2 h-4 justify-start'>
               Sign In
            </Link>
          </Button>
        );
      }

    return (
        <form action={signOutUser} className='w-full'>
              <Button
                className='w-full py-4 px-2 h-4 justify-start'
                variant='ghost'
              >
                Sign Out
              </Button>
            </form>
    )
}

export default UserButton;