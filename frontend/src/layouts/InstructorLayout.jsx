import React from 'react'
import InstructorSidebar from '../components/instructor/InstructorSidebar'
import { Outlet } from 'react-router-dom'

export const InstructorLayout = () => {
    return (
        <>
            <div className='flex'>
                <InstructorSidebar />
                <Outlet />
            </div>

        </>
    )
}
