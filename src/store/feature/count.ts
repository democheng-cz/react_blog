import { createSlice } from '@reduxjs/toolkit';

const initState = {
	num: 1,
};

const counterSlice = createSlice({
	name: 'name',
	initialState: initState,
	reducers: {
		add(state: any, actions: { type: string; payload: number }) {
			state.num = actions.payload;
		},
	},
	extraReducers: builder => {
		// builder.addCase()
	},
});

export default counterSlice.reducer;
