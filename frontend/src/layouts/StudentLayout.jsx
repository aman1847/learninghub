import React from 'react'
import { Outlet } from 'react-router-dom'
import StudentSidebar from '../components/student/StudentSidebar'

export const StudentLayout = () => {
    return (
        <>
            <div className='flex'>
                <StudentSidebar />
                <Outlet />
            </div>

        </>
    )
}
