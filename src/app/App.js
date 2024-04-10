import Landing  from './pages/Landing';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import {AboutUs} from './pages/AboutUs'
import { NotFound } from './pages/NotFound';
import {ContactUsPage} from './pages/ContactUsPage';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FarmerProfile } from './pages/FarmerProfile';



const route = createBrowserRouter([
  {
    path: '',
    element: <Landing />,
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Aboutus',
    element: <AboutUs />
  },
  {
    path: '/SignUp',
    element: <SignUp />
  },
  {
    path: '/ContactUs',
    element: <ContactUsPage />
  },
  {
    path: '/Farmerprofile',
    element: <FarmerProfile />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

function App() {

 
  return (
    <>
    <ToastContainer />
    <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
