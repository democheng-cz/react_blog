import React, { memo, useState, useCallback, useRef, ReactNode } from 'react';

import { Form, Input, Select, Button, Upload, Image, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import MDEditor from '@uiw/react-md-editor';

import request from '@/service/request';
import { DcFormWrapper } from './style';

interface FormType {
	formConfig: any;
	selectData?: any[];
	customRequest?: (file: any) => void;
	formData: any;
	setFormData: (val: any) => void;
	Btn?: any;
}

const DcForm: React.FC<FormType> = memo(props => {
	const {
		formConfig: { type, statusOptions, formItems, name },
		selectData,
		formData,
		Btn,
		setFormData,
	} = props;

	const [fileList, setFileList] = useState<UploadFile[]>([]);

	const renderFormItem = function renderFormItem(item: any) {
		switch (item.type) {
			case 'input':
				return (
					<Input
						value={formData[item.name]}
						onChange={e => handleChange(e, item.name, item.type)}
					/>
				);
			case 'select':
				return (
					<>
						<Select
							options={item.label === '状态' ? statusOptions : selectData}
							onChange={e => {
								handleChange(e, item.name, item.type);
							}}
							allowClear={true}
							labelInValue={true}
							value={{ value: formData[`${item.name}`] }}
							placeholder='请选择博客分类'></Select>
					</>
				);
			case 'upload':
				return (
					<>
						{formData[item.name] ? <Image width={150} src={formData[item.name]} /> : ''}
						<Upload
							fileList={fileList}
							customRequest={(files: any) => handleCustomRequest(files, item.name)}>
							<Button icon={<UploadOutlined />}>请选择上传文件</Button>
						</Upload>
					</>
				);
			case 'textArea':
				return (
					<Input.TextArea
						value={formData[item.name]}
						onChange={e => handleChange(e, item.name, item.type)}
					/>
				);
		}
	};

	// 上传图片
	const handleCustomRequest = async (file: any, type: string) => {
		const formData1 = new FormData();
		formData1.append(type, file.file as RcFile);
		const res: any = await request.post({
			url: `/${name}/image`,
			data: formData1,
		});
		if (res.status === 200) {
			setFileList([...fileList, file.file]);
			setFormData({ ...formData, [type]: res.result.filepath });
		}
	};

	// 修改formData数据
	const handleChange = (e: any, prop: string, type: string) => {
		switch (type) {
			case 'input':
				setFormData!({ ...formData, [prop]: e.target.value });
				break;
			case 'select':
				if (prop === 'role_id') {
					setFormData!({ ...formData, role: e.label, [prop]: e.value });
				} else {
					setFormData!({ ...formData, [prop]: e.value });
				}
				break;
			case 'md':
				setFormData({ ...formData, [prop]: e });
				break;
			case 'textArea':
				setFormData!({ ...formData, [prop]: e.target.value });
				break;
		}
	};

	return (
		<DcFormWrapper>
			<Form style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }} className='md:flex-col'>
				{formItems.map((item: any) => {
					return item.label ? (
						<Form.Item
							label={item.label}
							// style={{ width: item.width, marginRight: "5px" }}
							key={item.name}
							className='w-1/4 mr-4 md:w-4/5 '>
							{renderFormItem(item)}
						</Form.Item>
					) : (
						''
					);
				})}
				<Form.Item className='lg:ml-40 md:ml-0 '>
					{Btn?.map((item: ReactNode) => {
						return item;
					})}
				</Form.Item>
				{type === 'upload' ? (
					<MDEditor
						className='md gooooooooo'
						value={formData.content}
						onChange={text => handleChange(text, 'content', 'md')}
						// previewOptions={{
						// 	rehypePlugins: [[rehypeSanitize]],
						// }}
						style={{ marginTop: '10px' }}
					/>
				) : (
					''
				)}
			</Form>
		</DcFormWrapper>
	);
});
export default DcForm;
