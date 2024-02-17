import React from 'react';
import { createRoot } from 'react-dom';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './routes/Home/home';
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
], {
  future: {
    v7_normalizeFormMethod: true,
  },
});

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
