import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { reqUserList } from "@/service/user"

export const fetchUserList = createAsyncThunk(
	"user/fetchUserList",
	async (payload: any, { dispatch }) => {
		const res: any = await reqUserList(payload)
		return res.result.data
	}
)

const initState = {
	userList: [],
}

const userSlice = createSlice({
	name: "user",
	initialState: initState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchUserList.fulfilled, (state, action) => {
			state.userList = action.payload
		})
	},
})

export default userSlice.reducer
