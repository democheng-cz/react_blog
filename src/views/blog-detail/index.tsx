import React, { memo, useEffect } from "react"
import { useParams } from "react-router-dom"

import MDEditor from "@uiw/react-md-editor"

import { BlogDetailWrapper } from "./style"
import { useAppDispatch, useAppSelector } from "@/store"
import { fetchBlogDetail } from "@/store/feature/blog/reducer"
import { timeFormat } from "@/utils/timeFormat"

const BlogDetail = memo(() => {
	const dispatch = useAppDispatch()
	const params = useParams()
	const blogDetail = useAppSelector(state => {
		return state.blog.blogDetail
	})
	const { id } = params

	useEffect(() => {
		dispatch(fetchBlogDetail(id!))
	}, [id])
	return (
		<BlogDetailWrapper>
			<div className="header">
				<div className="title">
					<h1>{blogDetail.title}</h1>
				</div>
				<div className="info">
					<div className="user">
						<span className="text">作者:</span>
						<span>{blogDetail.user_name}</span>
					</div>
					<div className="time">
						<span className="text">最近修改时间:</span>
						<span>{timeFormat(blogDetail.update_time)}</span>
					</div>
				</div>
			</div>
			<div className="md">
				<MDEditor.Markdown source={blogDetail.content} />
			</div>
		</BlogDetailWrapper>
	)
})
export default BlogDetail
