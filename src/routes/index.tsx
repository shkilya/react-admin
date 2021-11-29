import React from 'react';
import Login from '../pages/Login';
import Event from '../pages/Event';
import {Navigate} from 'react-router';
import NotFound from '../pages/NotFound';
import BlogList from '../pages/Blog/BlogList';

export const routes = (isAuth: boolean) => [
  {
    path: '/',
    element: isAuth ? <BlogList/> : <Navigate to="/login"/>,
    children: [
      {path: '/event', element: <Event/>},
      {path: '/blog', element: <BlogList/>},
      {path: '/', element: <Navigate to="/blog"/>},
    ],
  },
  {
    path: '/',
    element: !isAuth ? <Login/> : <Navigate to="/event"/>,
    children: [
      {path: 'login', element: <Login/>},
      {path: '/', element: <Navigate to="/login"/>},
    ],
  },
  {path: '*', element: <NotFound/>},
];
