import { dcStorage } from '@/utils';
import { SAVE_USER_INFO, SAVE_MENU_LIST } from './constant';

const initState = {
	userInfo: dcStorage.getItem('userInfo') || {},
	menuList: dcStorage.getItem('menuList') || {},
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
			dcStorage.setItem('userInfo', payload.data.role_id);
			return {
				...state,
				userInfo: payload,
			};
		case SAVE_MENU_LIST:
			dcStorage.setItem('meuList', payload);
			return {
				...state,
				menuList: payload,
			};
		default:
			return {
				...state,
			};
	}
};

export default loginReducer;
