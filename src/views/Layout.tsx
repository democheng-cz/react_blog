import react, { memo } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Sider, Content } = Layout;

const Container = () => {
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
		margin: 25px auto;
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
