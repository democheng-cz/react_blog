import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './feature/count';

const store = configureStore({
	reducer: {
		counterReducer,
	},
});

export default store;
