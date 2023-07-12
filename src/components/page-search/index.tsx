import React, { memo, useState, useEffect, FC } from 'react';

import { Button } from 'antd';

import { PageSearchWrapper } from './style';
import DcForm from '../dc-form';

interface PageSearchType {
	searchChange?: (formData: any) => void;
	resetChange?: () => void;
	submitChange?: (formData: any, type?: string) => void;
	addChange?: () => void;
	formConfig: any;
	selectData?: any[];
	defaultInfo?: any;
}
const PageSearch: FC<PageSearchType> = props => {
	const {
		selectData,
		formConfig,
		resetChange,
		searchChange,
		defaultInfo,
		submitChange,
		addChange,
	} = props;

	const originData: any = {};

	formConfig.formItems.forEach((item: any) => {
		originData[item.name] = '';
	});
	const [formData, setFormData] = useState<any>({ ...originData });

	// 搜索按钮的回调
	const handleSearch = () => {
		searchChange!(formData);
	};

	// 重置按钮的回调
	const handleReset = () => {
		setFormData({});
		resetChange!();
	};

	// 用于提交按钮的回调
	const handleSubmit = () => {
		submitChange!(formData);
	};

	// 新增按钮的回调
	const handleAdd = () => {
		addChange!();
	};

	const renderBtn = () => {
		return (
			formConfig.btns &&
			formConfig.btns.map((item: any) => {
				return (
					<Button
						key={item.text}
						// type={item.type}
						type='default'
						size={item.size}
						style={{ marginRight: item.marginLeft }}
						danger={item.isDanger}
						onClick={() => {
							switch (item.text) {
								case '搜索':
									handleSearch();
									break;
								case '重置':
									handleReset();
									break;
								case '确定':
									handleSubmit();
									break;
								case '新增':
									handleAdd();
							}
						}}>
						{item.text}
					</Button>
				);
			})
		);
	};

	useEffect(() => {
		if (defaultInfo) {
			formConfig.formItems.forEach((item: any) => {
				originData[item.name] = defaultInfo[item.name];
			});
		}
		setFormData({ ...originData });
	}, [defaultInfo]);

	return (
		<PageSearchWrapper>
			<DcForm
				formConfig={formConfig}
				selectData={selectData}
				formData={formData}
				setFormData={setFormData!}
				Btn={renderBtn()}
			/>
		</PageSearchWrapper>
	);
};
export default PageSearch;
