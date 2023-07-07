import React, { memo, useState } from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';

import { useNavigate } from 'react-router-dom';
import LoginPanelWrapper from './style';
import { reqLogin } from '@/service/login';
import { connect } from 'react-redux';
import { getMenuList, saveUserInfoAction } from '@/store/feature/login/actions';
// import { useAppDispatch } from '@/store';
// import {
// 	createSavaToken,
// 	createSaveActiveMenu,
// 	createSaveUserInfo,
// 	getMenuList,
// 	getRoleList,
// } from '@/store/feature/login/actions';

const LoginPanel = memo((props: any) => {
	const navigate = useNavigate();
	const onFinishFailed = (errorInfo: any) => {};
	const onFinish = async (values: any) => {
		try {
			const res = await reqLogin(values);
			console.log(res);
			if (res.status === 200) {
				props.saveUserInfo(res.result);
				props.getMenuList(res.result.data.role_id);
				navigate('/blog/manage');
			}
		} catch (error) {}
	};
	return (
		<LoginPanelWrapper>
			<Form
				name='basic'
				style={{ maxWidth: 600 }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
				className='form-wrapper'>
				<Form.Item
					label='账号'
					name='account'
					rules={[{ required: true, message: 'Please input your username!' }]}>
					<Input />
				</Form.Item>

				<Form.Item
					label='密码'
					name='password'
					rules={[{ required: true, message: 'Please input your password!' }]}>
					<Input.Password />
				</Form.Item>
				<Form.Item className='btn'>
					<div className='btns'>
						<Button type='primary' htmlType='submit'>
							登录
						</Button>
					</div>
				</Form.Item>
			</Form>
		</LoginPanelWrapper>
	);
});

const mapStateTopProps = (state: any) => {
	return {};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		saveUserInfo: (payload: any) => {
			console.log('first');
			dispatch(saveUserInfoAction(payload));
		},
		getMenuList: (payload: any) => {
			dispatch(getMenuList(payload));
		},
	};
};

// export default LoginPanel;
export default connect(mapStateTopProps, mapDispatchToProps)(LoginPanel);
