import {
	SAVE_USER_INFO,
	SAVE_MENU_LIST,
	SAVE_ACTIVE_MENU,
	LOGOUT,
	SAVE_TOKEN,
	SAVE_ROLE_lIST,
} from './constant';
import { reqGetMenuList, reqRoleList } from '@/service/login/index';

export const saveUserInfoAction = (payload: any) => {
	return {
		type: SAVE_USER_INFO,
		payload,
	};
};

export const saveTokenAction = (payload: any) => {
	return {
		type: SAVE_TOKEN,
		payload,
	};
};

// 发起请求(获取菜单)
export const getMenuList = (payload: string) => {
	return async (dispatch: any, state: any) => {
		const res = await reqGetMenuList({ role_id: payload });
		console.log('menuList', res);
		dispatch(saveMenuListAction(res.result.data));
	};
};

export const saveMenuListAction = (payload: any) => {
	return {
		type: SAVE_MENU_LIST,
		payload,
	};
};

export const createSaveActiveMenu = (payload: any) => {
	return {
		type: SAVE_ACTIVE_MENU,
		payload,
	};
};

export const logoutAction = () => {
	return {
		type: LOGOUT,
		payload: null,
	};
};

export const getRoleList = () => {
	return async (dispatch: any, state: any) => {
		const res: any = await reqRoleList();
		if (res.status === 200) {
			dispatch({ type: SAVE_ROLE_lIST, payload: res.result.data });
		}
	};
};
