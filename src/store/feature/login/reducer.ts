import { SAVE_USER_INFO } from './constant';

const initState = {
	userInfo: {
		name: 'zz',
		age: 18,
	},
};

interface ActionType {
	type: string;
	payload?: any;
}
const loginReducer = (state = initState, action: ActionType) => {
	const { type, payload } = action;

	switch (type) {
		case SAVE_USER_INFO:
			return {
				...state,
				userInfo: payload,
			};
			break;
		default:
			return {
				...state,
			};
	}
};

export default loginReducer;
