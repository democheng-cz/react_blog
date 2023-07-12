import React, { memo, useState, useImperativeHandle, useEffect } from "react"

import { message, Modal } from "antd"

import { PageModalWrapper } from "./style"

import {
	reqUpdateUserInfo,
	reqUserList,
	reqCreateUser,
} from "@/service/user/index"

import DcForm from "../dc-form"
import { useAppDispatch, useAppSelector } from "@/store"
import { fetchUserList } from "@/store/feature/user/reducer"
import { createSaveUserInfo } from "@/store/feature/login/actions"

interface PageModalPropsType {
	formConfig: any
	selectData: any[]
	defaultInfo?: any
}

const PageModal = (props: PageModalPropsType, ref: any) => {
	const { userInfo } = useAppSelector(state => {
		return {
			userInfo: state.login.userInfo,
		}
	})

	const dispatch = useAppDispatch()

	const { formConfig, selectData, defaultInfo } = props
	const originData: any = {}
	const [type, setType] = useState("update")

	const [showModal, setShowModal] = useState(false)
	const [formData, setFormData] = useState<any>({})

	const handleOk = async () => {
		let res: any
		console.log(formData)
		switch (type) {
			case "update":
				res = await reqUpdateUserInfo({ ...formData, _id: defaultInfo._id })
				break
			case "add":
				res = await reqCreateUser({ ...formData })
		}
		// console.log(res)
		if (res.status >= 200 && res.status < 300) {
			message.success(res.message)
			dispatch(fetchUserList({}))
			setShowModal(false)
		}
	}

	const handleCancel = () => {
		setShowModal(false)
	}

	// 将需要给父组件调用的方法和属性暴露给父组件
	useImperativeHandle(
		ref,
		() => {
			return {
				setShowModal,
				setFormData,
				setType,
			}
		},
		[]
	)

	useEffect(() => {
		if (defaultInfo) {
			formConfig.formItems.forEach((item: any) => {
				originData[item.name] = defaultInfo[item.name]
			})
		}
		setFormData({ ...originData })
	}, [defaultInfo])
	return (
		<PageModalWrapper>
			<Modal
				open={showModal}
				onOk={() => handleOk()}
				onCancel={handleCancel}
				centered={true}
				okText="确定"
				cancelText="取消"
			>
				<DcForm
					formConfig={formConfig}
					selectData={selectData}
					formData={formData}
					setFormData={setFormData}
				/>
			</Modal>
		</PageModalWrapper>
	)
}
export default memo(React.forwardRef(PageModal))
