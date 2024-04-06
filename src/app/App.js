import Landing from './pages/Landing';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const route = createBrowserRouter([
  {
    path: '',
    element: <Landing />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
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
