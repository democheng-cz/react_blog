import React, { memo, useEffect, useState } from 'react';

import { Button } from 'antd';

import { BlogManageWrapper } from './style';

import PageSearch from '@/components/page-search';
import { searchConfig } from './search-config';
import usePageSearch from '@/hooks/usePageSearch';

import PageTable from '@/components/page-table';
import { tableConfig } from './table-config';

import { useAppDispatch, useAppSelector, useMemorizedSelector } from '@/store';
import { fetchBlogCategory, fetchBlogList } from '@/store/feature/blog/reducer';
import { useNavigate } from 'react-router-dom';

interface FormDataType {
	title: string;
	status: number | null;
	category_id: string;
}

const BlogManage = memo(() => {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();
	const { blogList, total, blogCategory } = useMemorizedSelector((state: any) => {
		return {
			blogList: state.blog.blogList,
			total: state.blog.blogTotal,
			blogCategory: state.blog.blogCategory,
		};
	});

	const addCallback = () => {
		navigate('/blog/edit');
	};

	const { PageTableRef, handleSearch, handleReset, handleAdd } = usePageSearch({
		addCallback,
	});

	useEffect(() => {
		dispatch(fetchBlogList({}));
	}, []);

	useEffect(() => {
		if (!blogCategory.length) {
			dispatch(fetchBlogCategory());
		} else {
			blogCategory.map((item: any) => {
				return { label: item.category_name, value: item.category_id };
			});
		}
	}, []);

	const paginationProps = {
		pageSize: 10,
		pageSizeOptions: [5, 10, 15],
		responsive: true, //当size未指定时, 根据屏幕自适应
		showQuickJumper: true, // 开启快速跳转页码
		size: 'small',
		total,
		onchange: (page: number, pageSize: number) => {},
		onShowSizeChange: (current: number, size: number) => {},
	};

	return (
		<BlogManageWrapper>
			<div className='search'>
				<PageSearch
					formConfig={searchConfig}
					selectData={blogCategory.map((item: any) => {
						return { label: item.category_name, value: item.category_id };
					})}
					searchChange={(formData: any) => handleSearch(formData)}
					resetChange={() => handleReset()}
					addChange={() => handleAdd()}
				/>
			</div>
			{/* blog列表数据 */}
			<div className='table' style={{ width: '100%' }}>
				<PageTable
					tableConfig={tableConfig}
					data={blogList}
					rowKey={(record: any) => record.blog_id}
					pagination={paginationProps}
					ref={PageTableRef}
					pageName='blog'
				/>
			</div>
		</BlogManageWrapper>
	);
});
export default BlogManage;
