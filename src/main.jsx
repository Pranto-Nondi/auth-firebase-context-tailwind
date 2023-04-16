import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import AuthProviders, { AuthContext } from './providers/AuthProviders';
import PrivateRouter from './router/PrivateRouter';
import Orders from './components/Orders';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/orders',
        element: <PrivateRouter><Orders></Orders></PrivateRouter>
      },
      {
        path: '/profile',
        element: <PrivateRouter><Profile></Profile></PrivateRouter>
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
