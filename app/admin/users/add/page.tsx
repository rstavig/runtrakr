import React, { Suspense } from 'react'
import AdminSignupForm from './admin-signup-form'


const AdminAddUserPage = () => {
  return (
    <>
   <h2>Add New User</h2>
   <Suspense fallback={<div>Loading...</div>}>
     <AdminSignupForm />
   </Suspense>
   </>
  )
}

export default AdminAddUserPage