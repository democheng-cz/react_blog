import React, { memo, ReactNode, useState, useEffect } from "react"

import type { PaginationProps } from "antd/es/pagination"
import { Table } from "antd"

import { DcTableWrapper } from "./style"

interface PageTablePropsType {
	rowKey?: string | ((record: any) => string)
	pagination: PaginationProps
	pageName?: string
	dataSource: any
	columns?: any[]
	renderTableColumn?: (title: string, text: any, record: any) => ReactNode
}

const DcTable = memo((props: PageTablePropsType) => {
	const { rowKey, pagination, dataSource, columns, renderTableColumn } = props

	return (
		<DcTableWrapper>
			<Table dataSource={dataSource} rowKey={rowKey} pagination={pagination}>
				{columns!.map((item: any) => {
					return (
						<Table.Column
							key={item.title}
							title={item.title}
							dataIndex={item.dataIndex}
							width={item.width}
							align={item.align}
							render={(text, record) => {
								return renderTableColumn!(item.title, text, record)
							}}
						/>
					)
				})}
			</Table>
		</DcTableWrapper>
	)
})
export default DcTable
