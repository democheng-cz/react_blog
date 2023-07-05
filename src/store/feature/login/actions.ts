import { SAVE_USER_INFO } from './constant';

export const saveUserInfoAction = (payload: any) => {
	return {
		type: SAVE_USER_INFO,
		payload,
	};
};
