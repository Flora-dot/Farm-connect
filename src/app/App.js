import Landing  from './pages/Landing';
import { Login } from './pages/Login';
import {AboutUs} from './pages/AboutUs'
import { NotFound } from './pages/NotFound';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactUsPage } from './pages/ContactUsPage';


const route = createBrowserRouter([
  {
    path: '',
    element: <ContactUsPage/>,
  },
  {
    path: '',
    element: <Landing />
  },
  
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/AboutUs',
    element: <AboutUs />
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
