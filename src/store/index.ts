import { configureStore, createSelector } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import loginReducer from './feature/login/reducer';
import blogReducer from './feature/blog/reducer';
import userReducer from './feature/user/reducer';

const store = configureStore({
	reducer: {
		login: loginReducer,
		blog: blogReducer,
		user: userReducer,
	},
});

//从store中推断出rootState类型
export type RootStateType = ReturnType<typeof store.getState>;

// 从store中推断出dispatch
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch;

const blogSelector = (state: RootStateType) => state.blog;
const loginSelector = (state: RootStateType) => state.login;
const userSelector = (state: RootStateType) => state.user;
// 带有缓存性的selector
export const useMemorizedSelector = (callback: (state: RootStateType) => any) => {
	let selector = createSelector(
		[blogSelector, loginSelector, userSelector],
		(blog, login, user) => {
			return callback(store.getState());
		}
	);
	return useAppSelector(state => selector(state));
};

export default store;
