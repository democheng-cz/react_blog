import type { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('@/views/Layout'));
const Login = lazy(() => import('@/views/login'));
const routes: RouteObject[] = [
	{
		path: '/',
		element: <Layout />,
	},
	{
		path: '/login',
		element: <Login />,
	},
];

export default routes;
