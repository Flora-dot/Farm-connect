import Landing  from './pages/Landing';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import {AboutUs} from './pages/AboutUs'
import { NotFound } from './pages/NotFound';
import {ContactUsPage} from './pages/ContactUsPage';
import {ProductDetails} from './pages/ProductDetails';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FarmerProfile } from './pages/FarmerProfile';
import { LatestOffersPage } from './pages/LatestOffersPage';
import { DealsOfTheDay } from './pages/DealsPage/DealsOfDay';
import { PopularItems } from './pages/PopularItemsPage';

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
    path: '/LatestOffers',
    element: <LatestOffersPage />
  },
  {
    path: '/DealsPage',
    element: <DealsOfTheDay />
  },
  {
    path: '/PopularItemsPage',
    element: <PopularItems />
  },
  {
    path: '/Farmerprofile',
    element: <FarmerProfile />
  },
  {
    path: '/ProductDetail',
    element:  <ProductDetails />
  },
  {
    path: '*',
    element: <NotFound />
  },
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
