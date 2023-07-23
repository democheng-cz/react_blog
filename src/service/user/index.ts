import request from "../request"

interface queryType {
	name: string
	status: number
}

interface UserInfoType {
	nick_name?: string
	password?: string
	role?: string
	avatar?: string
	state?: number
	user_id: string
}

interface ResType {
	status: number
	message: string
	result: any
}

// 上传头像
export const reqUploadAvatar = (avatar: any) =>
	request.get({ url: "/user/file/avatar", data: { avatar } })

// 获取用户列表
export const reqUserList = (query: queryType) => {
	return request.get({ url: "/user", params: query })
}

// 修改用户信息
export const reqUpdateUserInfo = (
	userInfo: UserInfoType,
	type?: "avatar" | "cover"
) => {
	return request.patch<ResType>({
		url: "/user/update",
		data: { ...userInfo },
		params: { type },
	})
}

// 修改用户状态
export const reqUpdateUserState = (info: {
	state: number
	user_id: string
}) => {
	return request.patch<ResType>({
		url: "/user/update/state",
		data: { ...info },
	})
}

// 删除该用户
export const reqDeleteUser = (_id: string) => {
	return request.post({ url: `/user/delete`, data: { _id } })
}

// 创建用户
export const reqCreateUser = (formData: any) => {
	return request.post({ url: "/register", data: formData })
}
