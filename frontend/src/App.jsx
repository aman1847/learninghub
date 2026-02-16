import Home from './pages/public/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminSidebar from './components/admin/AdminSidebar';
import { AdminLayout } from './layouts/AdminLayout';
import AdminInstructors from './pages/admin/AdminInstructors';
import AdminCoursess from './pages/admin/AdminCourses';
import AdminStudents from './pages/admin/AdminStudents';
import InstructorCourses from './pages/instructor/InstructorCourses';
import InstructorSidebar from './components/instructor/InstructorSidebar';
import StudentSidebar from './components/student/StudentSidebar';
import { InstructorLayout } from './layouts/InstructorLayout';
import InstructorDashboard from './pages/instructor/InstructorDashboard';

import InstructorProfile from './pages/instructor/InstructorProfile';
import { StudentLayout } from './layouts/StudentLayout';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentProfile from './pages/student/StudentProfile';
import StudentCourses from './pages/student/StudentCourses';
import AdminUser from './pages/admin/AdminUser';
import Courses from './pages/public/Courses';

import LandingPage from './pages/public/LandingPage';



const App = () => {

  return (

    <Routes>

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses/>} />
         <Route path="/buycourse/:id" element={<LandingPage/>} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/instructors" element={<AdminInstructors />} />
        <Route path="/admin/courses" element={<AdminCoursess />} />
        <Route path='/adminstudents' element={<AdminStudents />} />
        <Route path='/admin/user' element={<AdminUser />} />




      </Route>
      <Route element={<InstructorLayout />}>
        <Route path='/instructor' element={<InstructorDashboard/>}/>
        <Route path='/instructor/courses' element={<InstructorCourses/>}/>
        <Route path='/instructor/profile' element={<InstructorProfile/>}/>
        
       
       




      </Route>

       <Route element={<StudentLayout/>}>
        <Route path='/student' element={<StudentDashboard/>}/>
         <Route path='/student/profile' element={<StudentProfile/>}/>
           <Route path='/student/courses' element={<StudentCourses/>}/>
        {/* <Route path='/instructor/courses' element={<InstructorCourses/>}/>
        <Route path='/instructor/profile' element={<InstructorProfile/>}/> */}
        
       
       




      </Route>
     



    </Routes>

  );
};

export default App;
