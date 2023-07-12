export const modalConfig = {
	name: "user",
	type: "update",
	statusOptions: [
		{
			label: "启用",
			value: 1,
		},
		{
			label: "禁用",
			value: 0,
		},
	],
	formItems: [
		{
			name: "account",
			label: "账号",
			width: "80%",
			type: "input",
		},
		{
			name: "password",
			label: "密码",
			width: "80%",
			type: "input",
		},
		{
			name: "nick_name",
			label: "昵称",
			width: "80%",
			type: "input",
		},
		{
			name: "email",
			label: "邮箱",
			width: "80%",
			type: "input",
		},
		{
			name: "desc",
			label: "介绍",
			width: "80%",
			type: "textArea",
		},
		{
			name: "state",
			label: "状态",
			width: "80%",
			type: "select",
		},
		{
			name: "role_id",
			label: "角色",
			width: "80%",
			type: "select",
		},
		{
			name: "role",
		},
		{
			name: "avatar",
			type: "upload",
			label: "头像",
			width: "80%",
		},
	],
}
