import { Select, Input } from "antd"

export const searchConfig = {
	name: "user",
	type: "search",
	hasUpload: true,
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
	hasBtns: true,
	formItems: [
		{
			name: "name",
			label: "昵称",
			width: "25%",
			type: "input",
		},
		{
			name: "status",
			label: "状态",
			width: "25%",
			type: "select",
		},
	],
	btns: [
		{
			type: "primary",
			text: "搜索",
			isDanger: false,
			marginLeft: "20px",
			size: "small",
		},
		{
			type: "primary",
			text: "重置",
			isDanger: true,
			marginLeft: "20px",
			size: "small",
		},
		{
			type: "primary",
			text: "新增",
			isDanger: false,
			marginLeft: "20px",
			size: "small",
		},
	],
}
