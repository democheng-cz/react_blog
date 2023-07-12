import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import type { ReactNode } from "react"
import { Button, Space, Popconfirm, message, Switch } from "antd"
import type { ColumnsType } from "antd/es/table"
import { useAppDispatch, useAppSelector } from "@/store"
import {
	fetchBlogDetail,
	fetchBlogList,
	updateCurrentBlogFormData,
} from "@/store/feature/blog/reducer"
import { timeFormat } from "@/utils/timeFormat"
import { reqDeleteBlog } from "@/service/blog"
import { reqUpdateUserState } from "@/service/user"
import { fetchUserList } from "@/store/feature/user/reducer"

interface UserTableType {
	key: string
	user_id: string
	avatar: string
	state: number
	time: string
	create_time: string
	update_time: string
	nick_name: string
	role: string
	role_id: number
}

// interface TablePropsType {
// 	setShowModal: (val: boolean) => void
// 	setModalFormData: (val: any) => void
// 	setTableKey: (val: any) => void
// }

// export const TableColumns = (props?: any) => {
// 	const { setShowModal, setModalFormData, setTableKey } = props
// 	const dispatch = useAppDispatch()
// 	// 修改博客信息
// 	const updateUserInfo = (record: UserTableType) => {
// 		setShowModal(true)
// 		const { nick_name, role, avatar, state, user_id, role_id } = record
// 		setModalFormData({ nick_name, role, avatar, state, user_id, role_id })
// 	}

// 	// 确定删除删除
// 	const confirm = async (record: any) => {
// 		const res = await reqDeleteBlog(record.blog_id)
// 		if (res.status === 200) {
// 			message.success("删除成功")
// 		}
// 		dispatch(fetchBlogList(null))
// 	}

// 	// 修改状态
// 	const handleSwitchClick = async (checked: boolean, record: UserTableType) => {
// 		const res = await reqUpdateUserState({
// 			state: Number(checked),
// 			user_id: record.user_id,
// 		})
// 		if (res.status === 201) {
// 			message.success("修改成功")
// 			await dispatch(fetchUserList({}))
// 		}
// 	}
// }

export const tableConfig = {
	columns: [
		{
			title: "头像",
			dataIndex: "avatar",
			key: "user_id",
			width: "10%",
			align: "center",
		},
		{
			title: "用户名",
			dataIndex: "nick_name",
			key: "user_id",
			width: "20%",
			align: "center",
		},
		{
			title: "角色",
			dataIndex: "role",
			key: "user_id",
			width: "10%",
			align: "center",
		},
		{
			title: "状态",
			dataIndex: "state",
			key: "user_id",
			width: "10%",
			align: "center",
		},
		{
			title: "时间",
			dataIndex: "updateAt",
			key: "user_id",
			width: "20%",
			align: "center",
		},
		{
			title: "操作",
			key: "user_id",
			width: "20%",
			align: "center",
		},
	],
}
