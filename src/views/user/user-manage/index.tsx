import React, { memo, useState, useEffect } from 'react';

import { UserManageWrapper } from './style';

import PageSearch from '@/components/page-search';
import { searchConfig } from './search-config';
import usePageSearch from '@/hooks/usePageSearch';

import PageTable from '@/components/page-table';
import { tableConfig } from './table-config';
import usePageTable from '@/hooks/usePageTable';

import PageModal from '@/components/page-modal';
import { modalConfig } from './modal-config';
import usePageModal from '@/hooks/usePageModal';

import { useAppDispatch, useAppSelector } from '@/store';
import { fetchUserList } from '@/store/feature/user/reducer';

import { getRoleList } from '@/store/feature/login/actions';

import { reqUpdateUserInfo } from '@/service/user';

const paginationProps = {
	pageSize: 10,
	pageSizeOptions: [5, 10, 15],
	responsive: true, //当size未指定时, 根据屏幕自适应
	showQuickJumper: true, // 开启快速跳转页码
	// size: "small",
	onchange: (page: number, pageSize: number) => {},
	onShowSizeChange: (current: number, size: number) => {},
};

const UserManage = memo(() => {
	const dispatch = useAppDispatch();
	const { userList, roleList } = useAppSelector(state => {
		return {
			userList: state.user.userList,
			roleList: state.login.roleList,
		};
	});

	const addCallback = () => {
		pageModalRef.current.setShowModal(true);
		pageModalRef.current.setFormData({});
		pageModalRef.current.setType('add');
	};

	const { PageTableRef, handleSearch, handleReset, handleAdd } = usePageSearch({
		addCallback,
	});

	const { pageModalRef, handleUpdate, defaultInfo } = usePageModal();

	useEffect(() => {
		dispatch(fetchUserList({}));
		dispatch(getRoleList());
	}, []);

	return (
		<UserManageWrapper>
			{/* 搜索表单 */}
			<PageSearch
				formConfig={searchConfig}
				searchChange={(formData: any) => handleSearch(formData)}
				resetChange={() => {
					handleReset();
				}}
				addChange={() => handleAdd()}
			/>

			{/* 表格 */}
			<PageTable
				data={userList}
				rowKey={(record: any) => record.user_id}
				pagination={paginationProps}
				ref={PageTableRef}
				pageName='user'
				tableConfig={tableConfig}
				clickUpdateBtn={(val: any) => handleUpdate(val)}
			/>

			{/* modal框 */}
			<PageModal
				formConfig={modalConfig}
				selectData={roleList.map((item: any) => {
					return { label: item.role, value: item.role_id };
				})}
				ref={pageModalRef}
				defaultInfo={defaultInfo}></PageModal>
		</UserManageWrapper>
	);
});

export default UserManage;
