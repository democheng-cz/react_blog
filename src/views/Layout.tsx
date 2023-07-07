import react, { useState } from 'react';
import { Layout, Button, Menu } from 'antd';
import {
	AppstoreOutlined,
	ContainerOutlined,
	DesktopOutlined,
	MailOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import styled from 'styled-components';

const { Sider, Content } = Layout;

const Container = () => {
	type MenuItem = Required<MenuProps>['items'][number];
	function getItem(
		label: React.ReactNode,
		key: React.Key,
		icon?: React.ReactNode,
		children?: MenuItem[],
		type?: 'group'
	): MenuItem {
		return {
			key,
			icon,
			children,
			label,
			type,
		} as MenuItem;
	}
	const items: MenuItem[] = [
		getItem('Option 1', '1', <PieChartOutlined />),
		getItem('Option 2', '2', <DesktopOutlined />),
		getItem('Option 3', '3', <ContainerOutlined />),

		getItem('Navigation One', 'sub1', <MailOutlined />, [
			getItem('Option 5', '5'),
			getItem('Option 6', '6'),
			getItem('Option 7', '7'),
			getItem('Option 8', '8'),
		]),

		getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
			getItem('Option 9', '9'),
			getItem('Option 10', '10'),

			getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
		]),
	];

	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<LayoutWrapper>
			<Layout>
				{/* 左侧菜单栏 */}
				<Sider breakpoint='md'>
					<h1 className='logo'>DcBlog</h1>
					{/* <DcMenu
						changeMenuItem={(e: any) => {
							changeMenuItem(e);
						}}
						changeSelectItem={(openKeys: string[]) => {
							changeSelectItem(openKeys);
						}}
						menuList={menuList}
						activeMenu={activeMenu.select || dcCache.getCache('activeMenu')}
					/> */}
					<div>
						<Menu
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							mode='inline'
							theme='light'
							// collapsed={collapsed}
							items={items}
						/>
					</div>
				</Sider>
				{/* 右侧内容区 */}
				<Layout>
					{/* 头部 */}
					{/* <LayoutHeader /> */}
					<Layout
						style={{
							padding: '15px',
							backgroundColor: '#fff',
						}}
						className='layout-main'>
						{/* 内容区 */}
						<Content
							style={{
								padding: 24,
								margin: 0,
								minHeight: 280,
								background: '#fff',
							}}>
							{/* <Suspense fallback={<DcLoading />}>
								<Outlet />
							</Suspense> */}
						</Content>
					</Layout>
				</Layout>
				{/* </Col>
    </Row> */}
			</Layout>
		</LayoutWrapper>
	);
};

const LayoutWrapper = styled.div`
	display: flex;
	overflow: hidden;
	height: 100%;
	width: 100%;
	.logo {
		margin: auto;
		border-radius: 5px;
		text-align: center;
		background-color: #3ba0e9;
		color: #fff;
		line-height: 30px;
		height: 30px;
		width: 80%;
		font-size: 16px;
	}
	.layout-main {
	}
	.header {
		background-color: #7dbcea;
		img {
			height: 50px;
			width: 50px;
			border-radius: 50%;
			margin-left: 10px;
		}
		.userInfo {
			color: #1890ff;
			display: flex;
			align-items: center;
			margin-left: 10px;
		}
	}
	.Sider {
		min-width: 0;
	}
	.ant-layout-sider {
		min-width: 0 !important;
		width: auto !important;
	}
	.ant-layout-sider-children {
		background-color: #3ba0e9;
	}
	.ant-menu {
		background-color: #3ba0e9;
	}
	.ant-menu-title-content {
		color: black;
		font-weight: 700;
	}
`;

export default Container;
