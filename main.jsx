import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Login from './Login.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Ehomepage from './Ehomepage.jsx';
import Cartlist from './Cartlist.jsx';
import EstoreProvider from './store/E-coomerce-store'; // Import your context provider

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Ehomepage />,
      },
      {
        path: '/list',
        element: <Cartlist />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EstoreProvider> {/* Wrap the RouterProvider with your context provider */}
      <RouterProvider router={router} />
    </EstoreProvider>
  </React.StrictMode>,
);
