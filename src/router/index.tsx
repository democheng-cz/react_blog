import type { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('@/views/Layout'));
const routes: RouteObject[] = [
	{
		path: '/',
		element: <Layout />,
	},
];

export default routes;
