import type { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('@/views/Layout'));
const Login = lazy(() => import('@/views/login'));
const BlogManage = lazy(() => import('@/views/blog/blog-manage'));
const routes: RouteObject[] = [
	{
		path: '/',
		element: <Layout />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: 'blog/manage',
		element: <BlogManage />,
	},
	// {
	// 	path: 'blog/:id',
	// 	element: <BlogDetail />,
	// },
	// {
	// 	path: 'blog/edit',
	// 	element: <BlogEdit />,
	// },
	// {
	// 	path: 'user/manage',
	// 	element: <UserManage />,
	// },
	// {
	// 	path: 'user/role',
	// 	element: <UserRole />,
	// },
];

export default routes;
