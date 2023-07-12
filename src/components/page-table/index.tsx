import React, { memo, useState, useEffect, useImperativeHandle } from "react"

import { Image, Switch, Button, Space, Popconfirm, message } from "antd"
import { PageTableWrapper } from "./style"

import DcTable from "../dc-table"
import DcLoadingV2 from "../dc-loading-v2"
import { useAppDispatch } from "@/store"

import { fetchUserList } from "@/store/feature/user/reducer"
import {
	fetchBlogList,
	updateCurrentBlogFormData,
} from "@/store/feature/blog/reducer"

import { reqDeleteBlog } from "@/service/blog"
import { reqDeleteUser, reqUpdateUserState } from "@/service/user"

import { timeFormat } from "@/utils/timeFormat"
import { useNavigate } from "react-router-dom"

interface PageTablePropsType {
	data: any[]
	rowKey?: string | ((record: any) => string)
	pagination: any
	pageName: string
	tableConfig: any
	clickUpdateBtn?: (val: any) => void
	clickDeleteBtn?: () => void
	clickUpdateState?: (checked: boolean) => void
}

const PageTable = (props: PageTablePropsType, ref: any) => {
	const dispatch = useAppDispatch()
	const {
		data,
		rowKey,
		pagination,
		tableConfig: { columns },
		pageName,
		clickDeleteBtn,
		clickUpdateBtn,
		clickUpdateState,
	} = props

	const navigate = useNavigate()

	const [isLoading, setIsLoading] = useState(true)

	//获取表格数据
	const getDataList = (formData?: any) => {
		switch (pageName) {
			case "blog":
				dispatch(fetchBlogList(formData))
				break
			case "user":
				dispatch(fetchUserList(formData))
				break
		}
	}

	const confirm = async (record: any) => {
		let res: any = null
		switch (pageName) {
			case "blog":
				res = await reqDeleteBlog(record.blog_id)
				if (res.status === 200) {
					message.success("删除成功")
					dispatch(fetchBlogList({}))
				}
				break
			case "user":
				res = await reqDeleteUser(record._id)
				if (res.status === 200) {
					message.success("删除成功")
					dispatch(fetchUserList({}))
				}
				break
		}
	}

	// 修改状态
	const handleUpdateState = async (checked: boolean, record: any) => {
		switch (pageName) {
			case "blog":
				break
			case "user":
				const res = await reqUpdateUserState({
					state: Number(checked),
					user_id: record.user_id,
				})
				if (res.status === 200) {
					message.success("修改成功")
				}
				break
		}
		getDataList()
	}

	const handleUpdate = (record: any) => {
		switch (pageName) {
			case "blog":
				dispatch(updateCurrentBlogFormData(record))
				navigate("/blog/edit")
				break
			case "user":
				clickUpdateBtn!(record)
				break
		}
	}

	const renderTableColumn = (title: string, text: any, record: any) => {
		switch (title) {
			case "头像":
				return (
					<Image
						src={text}
						style={{ width: "50px", height: "50px", borderRadius: "5px" }}
					/>
				)
			case "封面":
				return (
					<Image
						src={text || require("@/assets/images/猫和老鼠.png")}
						style={{ width: "50px", height: "50px", borderRadius: "5px" }}
					></Image>
				)
			case "文章信息":
				return (
					<div style={{ fontSize: "13px", cursor: "pointer" }}>
						<div
							onClick={() => {
								navigate(`/blog/${record.blog_id}`)
							}}
						>
							标题: <span style={{ color: "#0077aa" }}>{record.title}</span>
						</div>
						<div>
							分类:
							<span style={{ color: "#0077aa" }}>
								{/* {category.map((item: any) => {
									return item.category_id === record.category_id
										? item.category_name
										: ""
								})} */}
								vue
							</span>
						</div>
						<div>
							作者: <span style={{ color: "#0077aa" }}>{record.user_name}</span>
						</div>
					</div>
				)
			case "发布状态":
				return (
					<Space>
						<div>{text === 0 ? "未发布" : "已发布"}</div>
					</Space>
				)
			case "用户名":
				return <div>{text}</div>
			case "角色":
				return <div>{text}</div>
			case "状态":
				return (
					<>
						<Switch
							checked={!!text}
							onChange={checked => handleUpdateState(checked, record)}
						/>
					</>
				)
			case "时间":
				return (
					<Space style={{ display: "flex", flexDirection: "column" }}>
						<div className="create_time">
							{timeFormat(record["create_time"]) as React.ReactNode}
						</div>
						<div>{timeFormat(record["update_time"])}</div>
					</Space>
				)
			case "操作":
				return (
					<Space size="middle">
						<Button
							size={"small"}
							type={"primary"}
							onClick={() => {
								handleUpdate(record)
							}}
						>
							修改
						</Button>

						<Popconfirm
							title="确认删除吗?"
							onConfirm={() => confirm(record)}
							okText="确定"
							cancelText="取消"
						>
							<Button size={"small"} danger type={"primary"}>
								删除
							</Button>
						</Popconfirm>
					</Space>
				)
		}
	}

	useImperativeHandle(ref, () => {
		return { getDataList }
	})

	useEffect(() => {
		let timer = setTimeout(() => {
			if (!data.length) {
				setIsLoading(false)
			}
		}, 5000)
		return () => {
			clearTimeout(timer)
		}
	}, [])

	return (
		<PageTableWrapper>
			{props.data.length || !isLoading ? (
				<DcTable
					dataSource={data}
					rowKey={rowKey}
					pagination={pagination}
					columns={columns}
					renderTableColumn={renderTableColumn}
				/>
			) : (
				<DcLoadingV2 />
			)}
		</PageTableWrapper>
	)
}
export default memo(React.forwardRef(PageTable))
