import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { reqBlogCategoryList, reqBlogDetail, reqBlogList } from '@/service/blog';
import { dcStorage } from '@/utils';

interface InitialStateType {
	blogList: any[];
	blogTotal: number;
	pageSize: number;
	blogCategory: any[];
	blogDetail: any;
	currentBlogFormData: {
		content?: string;
		title?: string;
		status?: number;
		category_id?: string;
		cover?: string;
	};
}
const initialState: InitialStateType = {
	blogList: [],
	blogTotal: 0,
	pageSize: 10,
	blogCategory: [],
	blogDetail: {},
	currentBlogFormData: {},
};

// 异步action
export const fetchBlogList = createAsyncThunk(
	'blog/fetchBlogList',
	async (payload: any, { dispatch }) => {
		const res = await reqBlogList({ ...payload });
		// console.log(res)
		return res.result;
	}
);

// 获取blog分类
export const fetchBlogCategory = createAsyncThunk(
	'blog/fetchBlogCategory',
	async (payload, { dispatch }) => {
		const res: any = await reqBlogCategoryList();
		// console.log(res)
		return res.result;
	}
);

// 获取博客详情
export const fetchBlogDetail = createAsyncThunk(
	'blog/fetchBlogDetail',
	async (payload: string, { dispatch }) => {
		const res: any = await reqBlogDetail(payload);
		// console.log(res)
		if (res.status === 200) {
			return res.result.data;
		}
	}
);

const blogReducer = createSlice({
	name: 'blog',
	initialState: initialState,
	reducers: {
		getBlogList(state: any, action: PayloadAction<any[]>) {
			state.blogList = action.payload;
		},
		//获取当前的要修改的blog信息
		updateCurrentBlogFormData(state, action: PayloadAction<{}>) {
			state.currentBlogFormData = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchBlogList.fulfilled, (state, action: PayloadAction<any>) => {
				// state.blogList = action.payload
				state.blogList = action.payload.data;
				state.blogTotal = action.payload.total;
			})
			.addCase(fetchBlogCategory.fulfilled, (state, action) => {
				state.blogCategory = action.payload.data;
				dcStorage.setItem('blogCategory', state.blogCategory);
			})
			.addCase(fetchBlogDetail.fulfilled, (state, action: PayloadAction<any>) => {
				state.blogDetail = action.payload[0];
			});
	},
});

export const { getBlogList, updateCurrentBlogFormData } = blogReducer.actions;
export default blogReducer.reducer;
