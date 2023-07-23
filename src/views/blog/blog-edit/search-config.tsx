export const blogCategoryConfig = {
	name: "blog",
	type: "upload",
	hasUpload: true,
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
			width: "30%",
			type: "input",
		},
		{
			name: "blog_id",
		},
		{
			name: "status",
			label: "状态",
			width: "30%",
			type: "select",
		},
		{
			name: "category_id",
			label: "分类",
			width: "30%",
			type: "select",
		},
		{
			name: "cover",
			label: "上传封面",
			type: "upload",
			width: "20%",
		},
		{
			name: "content",
			label: "",
			type: "md",
			with: "100%",
		},
	],
	btns: [
		{
			type: "primary",
			text: "确定",
			isDanger: false,
			marginLeft: "20px",
			size: "small",
		},
	],
}
