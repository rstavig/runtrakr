

import { Metadata } from 'next';
import { getUsers } from '@/lib/actions/userActions';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatId } from '@/lib/utils';
import { SquarePen } from 'lucide-react';
import { TrashButton } from '@/app/dashboard/components/trash-button';
// import { AdminSignupForm } from '@/app/admin/users/add/admin-signup-form';


export const metadata: Metadata = {
  title: 'Admin Users',
};




const AdminUserPage = async () => {
  
const users = await getUsers();

  return (
    <>
    
<div className="flex justify-between">
    <h1 className='h2-bold'>Users</h1>
    <button>
                    <Link
                        href='/admin/users/add'
                        className="custom-primary-btn"
                    >
                        Add New User
                    </Link>
                </button>   
                </div>
                <hr className='mt-5'/>
                        {/* <AdminSignupForm /> */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{formatId(user.id)}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
             
              <TableCell>
                <Link href={`/admin/users/${user.id}/edit`}>
                  <Button variant="ghost" size="icon">
                    <SquarePen />
                  </Button>
                </Link>
                
                {/* <DeleteDialog
                  title="Delete User"
                  description={`Are you sure you want to delete user ${user.name}? This action cannot be undone.`}
                  action={
                    <Trash2
                      id={user.id}
                      className="ml-2"
                    />
                  }
                /> */}
                <TrashButton id={user.id} />
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default AdminUserPage;