import React, { memo, useState } from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
// import { connect, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import LoginPanelWrapper from './style';
import { reqLogin } from '@/service/login';
import { connect } from 'react-redux';
import { SAVE_USER_INFO } from '@/store/feature/login/constant';
import { saveUserInfoAction } from '@/store/feature/login/actions';
import { dcStorage } from '@/utils';
// import { useAppDispatch } from '@/store';
// import {
// 	createSavaToken,
// 	createSaveActiveMenu,
// 	createSaveUserInfo,
// 	getMenuList,
// 	getRoleList,
// } from '@/store/feature/login/actions';

const LoginPanel = memo((props: any) => {
	const [messageApi, contextHolder] = message.useMessage();
	// const navigate = useNavigate();
	// const dispatch = useAppDispatch();

	const onFinishFailed = (errorInfo: any) => {
		messageApi.open({
			type: 'error',
			content: errorInfo?.errorFields[0].errors,
		});
	};

	const onFinish = async (values: any) => {
		try {
			const res = await reqLogin(values);
			props.saveUserInfo({ name: 'zwc', age: 19, address: '达州市' });
			if (res.code === 200) {
				// dispatch(getMenuList(res.result.data.role_id));
				// dispatch(createSaveUserInfo(res.result.data));
				// dispatch(createSavaToken(res.result.token));
				// dispatch(
				// 	createSaveActiveMenu({
				// 		selectKey: '/blog/manage',
				// 		openKey: ['/blog'],
				// 	})
				// );
				message.success('登录成功');
				// navigate('/blog/manage');
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<LoginPanelWrapper>
			{contextHolder}
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
	return {
		userInfo: state.loginReducer.userInfo,
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		saveUserInfo: (payload: any) => {
			dispatch(saveUserInfoAction(payload));
		},
	};
};

// export default LoginPanel;
export default connect(mapStateTopProps, mapDispatchToProps)(LoginPanel);
