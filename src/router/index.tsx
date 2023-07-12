import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('@/views/Layout'));
const Login = lazy(() => import('@/views/login'));
const BlogManage = lazy(() => import('@/views/blog/blog-manage'));
const BlogEdit = lazy(() => import('@/views/blog/blog-edit'));
const BlogDetail = lazy(() => import('@/views/blog-detail'));
const UserManage = lazy(() => import('@/views/user/user-manage'));
const UserRole = lazy(() => import('@/views/user/user-role'));
const routes: RouteObject[] = [
	{
		path: '/',
		element: <Navigate to='/blog/manage' />,
	},
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'blog/manage',
				element: <BlogManage />,
			},
			{
				path: 'blog/edit',
				element: <BlogEdit />,
			},
			{
				path: 'blog/:id',
				element: <BlogDetail />,
			},
			{
				path: 'user/manage',
				element: <UserManage />,
			},
			{
				path: 'user/role',
				element: <UserRole />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
];

export default routes;
