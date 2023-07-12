import { dcStorage } from '@/utils';
import { SAVE_USER_INFO, SAVE_MENU_LIST, SAVE_ACTIVE_MENU, LOGOUT, SAVE_TOKEN } from './constant';

const initState = {
	userInfo: dcStorage.getItem('userInfo') || {},
	menuList: dcStorage.getItem('menuList') || [],
	activeMenu: {
		openKey: [],
		selectKey: '',
	},
	roleList: [],
};

interface ActionType {
	type: string;
	payload?: any;
}
const loginReducer = (state = initState, action: ActionType) => {
	const { type, payload } = action;

	switch (type) {
		case SAVE_USER_INFO:
			dcStorage.setItem('token', payload.token);
			dcStorage.setItem('userInfo', payload);
			return {
				...state,
				userInfo: payload,
			};
		case SAVE_TOKEN:
			dcStorage.setItem('token', payload);
			return {
				...state,
				token: payload,
			};
		case SAVE_MENU_LIST:
			dcStorage.setItem('menuList', payload);
			return {
				...state,
				menuList: payload,
			};
		case SAVE_ACTIVE_MENU:
			if (payload.openKey) {
				dcStorage.setItem('activeMenu', payload);
			}
			return {
				...state,
				activeMenu: payload,
			};
		case LOGOUT:
			dcStorage.removeItem('userInfo');
			dcStorage.removeItem('token');
			return {
				...state,
			};
		default:
			return {
				...state,
			};
	}
};

export default loginReducer;
