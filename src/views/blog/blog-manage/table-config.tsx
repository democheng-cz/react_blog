import { useNavigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Button, Space, Popconfirm, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useAppDispatch, useAppSelector } from '@/store';
import {
	fetchBlogDetail,
	fetchBlogList,
	updateCurrentBlogFormData,
} from '@/store/feature/blog/reducer';
import { timeFormat } from '@/utils';
import { reqDeleteBlog } from '@/service/blog';

interface BlogTableType {
	key: string;
	blog_id: string;
	cover: string;
	blogInfo: string;
	status: number;
	time: string;
	create_time: string;
	update_time: string;
	title: string;
	user_name: string;
	desc: string;
	category_name: string;
	category_id: number;
	content: string;
}

export const tableConfig = {
	columns: [
		{
			title: '封面',
			dataIndex: 'cover',
			key: 'blog_id',
			width: '10%',
			align: 'center',
		},
		{
			title: '文章信息',
			key: 'blog_id',
			width: '40%',
		},
		{
			title: '发布状态',
			dataIndex: 'status',
			key: 'blog_id',
			width: '10%',
			align: 'center',
		},
		{
			title: '时间',
			dataIndex: 'updateAt',
			key: 'blog_id',
			width: '20%',
			align: 'center',
		},
		{
			title: '操作',
			key: 'blog_id',
			width: '20%',
			align: 'center',
		},
	],
};
