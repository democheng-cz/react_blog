import React, { memo, useState } from "react"

import { Menu } from "antd"
import { useNavigate } from "react-router-dom"

import { DcMenuWrapper } from "./style"

interface DcMenuType {
	menuList: any[]
	activeMenu: {
		openKey: any[]
		selectKey: string
	}
	changeMenuItem: (e: any) => void
	changeSelectItem: (openKey: any[]) => void
}

const DcMenu: React.FC<DcMenuType> = memo(props => {
	const { menuList, changeMenuItem, changeSelectItem, activeMenu } = props
	const navigate = useNavigate()

	const changeActiveMenu = (e: any) => {
		changeMenuItem(e)
		navigate(e.keyPath[0])
	}
	const handleSelectMenu = (openKeys: any[]) => {
		changeSelectItem(openKeys)
	}

	return (
		<DcMenuWrapper>
			<Menu
				mode="inline"
				defaultSelectedKeys={[activeMenu.selectKey]}
				defaultOpenKeys={activeMenu.openKey}
				style={{ height: "100%", borderRight: 0 }}
				items={menuList}
				onClick={e => changeActiveMenu(e)}
				onOpenChange={e => handleSelectMenu(e)}
				openKeys={activeMenu.openKey}
				selectedKeys={[activeMenu.selectKey]}
			/>
		</DcMenuWrapper>
	)
})
export default DcMenu
