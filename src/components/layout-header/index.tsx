import React, { memo, useEffect, useState } from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Layout, Dropdown, Space, Modal } from 'antd';
import type { MenuProps } from 'antd';
import { useAppDispatch, useAppSelector } from '@/store';
import { dcStorage } from '@/utils/index';

import { logoutAction, saveUserInfoAction } from '@/store/feature/login/actions';

import { LayoutHeaderWrapper } from './style';

const LayoutHeader: React.FC = memo(() => {
	const { Header } = Layout;
	const dispatch = useAppDispatch();
	const userInfo = useAppSelector(state => {
		return state.login.userInfo;
	});

	const logout = () => {
		showModal();
	};

	const items: MenuProps['items'] = [
		{
			key: 1,
			label: '个人信息',
		},
		{
			key: 2,
			label: <div onClick={logout}>退出登录</div>,
		},
	];
	useEffect(() => {
		if (!userInfo?.account) {
			console.log('first');
			dispatch(saveUserInfoAction(dcStorage.getItem('userInfo')));
		}
	}, []);

	const [open, setOpen] = useState(false);

	const showModal = () => {
		setOpen(true);
	};

	const handleOk = () => {
		dispatch(logoutAction());
		setOpen(false);
	};

	const handleCancel = () => {
		setOpen(false);
	};
	return (
		<LayoutHeaderWrapper>
			{userInfo?.account && (
				<Header className='header flex items-center justify-end'>
					<div className='weather text-slate-200'></div>
					<img
						// className={}
						src={userInfo.avatar || require('@/assets/images/猫和老鼠.png')}
						alt=''
						style={{ height: '50px', objectFit: 'cover' }}
					/>
					<div className='userInfo'>
						<span style={{ color: '#fff' }}>欢迎回来，</span>
						<Dropdown menu={{ items }}>
							<a onClick={e => e.preventDefault()}>
								<Space>
									<span className='nickname'>{userInfo.nickname || 'test'}</span>
									<DownOutlined />
								</Space>
							</a>
						</Dropdown>
					</div>
				</Header>
			)}
			<Modal open={open} onOk={handleOk} onCancel={handleCancel} cancelText='取消' okText='确定'>
				<p>确定要退出登录吗?</p>
			</Modal>
		</LayoutHeaderWrapper>
	);
});
export default LayoutHeader;
