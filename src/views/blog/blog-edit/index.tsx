import React, { memo, useEffect } from 'react';

import { message } from 'antd';
// import domToImage from 'dom-to-image';

import { BlogCategoryWrapper } from './style';
import { useAppDispatch, useAppSelector, useMemorizedSelector } from '@/store';
import { dcStorage } from '@/utils';
import PageSearch from '@/components/page-search';
import { blogCategoryConfig } from './search-config';
import { reqUploadBlog, reqUpdateBlog } from '@/service/blog';
import { updateCurrentBlogFormData } from '@/store/feature/blog/reducer';
import { useNavigate } from 'react-router-dom';
import usePageSearch from '@/hooks/usePageSearch';

interface MdDataType {
	content?: string;
	title?: string;
	status?: number;
	category_id?: string;
	cover?: string;
}

const BlogCategory = memo(() => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { blogCategory, currentBlogInfo } = useMemorizedSelector(state => {
		return {
			blogCategory: state.blog.blogCategory.length
				? state.blog.blogCategory
				: dcStorage.getItem('blogCategory'),
			currentBlogInfo: state.blog.currentBlogFormData,
		};
	});

	const submitCallback = async (value: any) => {
		if (!value.title) {
			message.error('请输如内容');
			return;
		}
		let res: any = null;
		const length = Object.keys(currentBlogInfo).length;
		try {
			if (length) {
				res = await reqUpdateBlog(value);
			} else {
				res = await reqUploadBlog(value);
			}
			if (res.status !== 200) throw new Error(res.message);
		} catch (error) {
			console.log(error);
		} finally {
			message.success('修改成功');
			navigate('/blog/manage');
		}
	};
	const { handleSubmit } = usePageSearch({ submitCallback });

	useEffect(() => {
		return () => {
			dispatch(updateCurrentBlogFormData({}));
		};
	}, []);

	return (
		<BlogCategoryWrapper>
			<PageSearch
				selectData={blogCategory.map((item: any) => {
					return { label: item.category_name, value: item.category_id };
				})}
				formConfig={blogCategoryConfig}
				defaultInfo={currentBlogInfo}
				submitChange={(formData: any) => {
					handleSubmit(formData);
				}}
			/>

			{/* <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} /> */}
		</BlogCategoryWrapper>
	);
});
export default BlogCategory;
