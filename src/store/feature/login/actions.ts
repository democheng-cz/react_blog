import { SAVE_USER_INFO, SAVE_MENU_LIST } from './constant';
import { reqGetMenuList } from '@/service/login/index';

export const saveUserInfoAction = (payload: any) => {
	return {
		type: SAVE_USER_INFO,
		payload,
	};
};

// 发起请求(获取菜单)
export const getMenuList = (payload: string) => {
	return async (dispatch: any, state: any) => {
		const res = await reqGetMenuList({ role_id: payload });
		dispatch(saveMenuListAction(res.result.data));
	};
};

export const saveMenuListAction = (payload: any) => {
	return {
		type: SAVE_MENU_LIST,
		payload,
	};
};
