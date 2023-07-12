import request from '../request';

interface ResType {
	status: number;
	message: string;
	result: any;
}
interface InitQueryType {
	title?: string;
	category_id?: string;
	status?: number;
	pageSize?: number;
	pageNum?: number;
}
// 获取所有的博客(根据不同条件查询)
export const reqBlogList = (query: InitQueryType) => {
	// console.log("first")
	return request.get<ResType>({
		url: '/blog',
		params: { ...query },
	});
};

// 获取所有的分类
export const reqBlogCategoryList = () => {
	return request.get({
		url: '/blog/category',
	});
};

// 上传blog
export const reqUploadBlog = (blogInfo: any) => {
	return request.post({
		url: '/blog',
		data: blogInfo,
	});
};

// 更新blog
export const reqUpdateBlog = (blogInfo: any) => {
	return request.patch({
		url: '/blog/update',
		data: blogInfo,
	});
};

// 通过blog_id获取博客详情
export const reqBlogDetail = (blog_id: string) => {
	return request.get({ url: `/blog/${blog_id}` });
};

// 根据blog_id删除博客
export const reqDeleteBlog = (blog_id: string) => {
	return request.delete({ url: `/blog/${blog_id}` });
};
