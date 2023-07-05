import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import counterReducer from './feature/count';
import loginReducer from './feature/login/reducer';

const store = configureStore({
	reducer: {
		counterReducer,
		loginReducer,
	},
});

//从store中推断出rootState类型
export type RootStateType = ReturnType<typeof store.getState>;

// 从store中推断出dispatch
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
