export const searchConfig = {
	name: "blog",
	type: "search",
	hasUpload: false,
	statusOptions: [
		{
			label: "已发布",
			value: 1,
		},
		{
			label: "未发布",
			value: 0,
		},
	],
	formItems: [
		{
			name: "title",
			label: "标题",
			width: "25%",
			type: "input",
		},
		{
			name: "status",
			label: "状态",
			width: "25%",
			type: "select",
		},
		{
			name: "category_id",
			label: "分类",
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
