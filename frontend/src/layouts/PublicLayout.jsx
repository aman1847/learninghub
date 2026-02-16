import { Outlet } from 'react-router-dom';
import Header from '../components/Headerr';
import Footer from '../components/Footer';

const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<PublicLayout />}>
    //       <Route path="/" element={<Home />} />
    //     </Route>

    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default PublicLayout;
