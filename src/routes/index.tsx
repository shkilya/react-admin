import React from 'react';
import Login from '../pages/Login';
import Event from '../pages/Event';
import {RouteList} from './route-list.enum';
import {RouteObject} from 'react-router';
import NotFound from '../pages/NotFound';


export const privateRouteList: RouteObject[] = [
  {
    path: RouteList.EVENT_ROUTE,
    element: <Event/>,
  },
  {path: '*', element: <NotFound/>},
];

export const publicRouteList: RouteObject[] = [
  {
    path: RouteList.LOGIN_ROUTE,
    element: <Login/>,
  },
  {path: '*', element: <NotFound/>},
];
