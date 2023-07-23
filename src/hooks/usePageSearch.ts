import { ElementRef, useRef, useState } from "react"

import PageTable from "@/components/page-table"
import pageModal from "@/components/page-modal"

interface PageSearchCallbacks {
	addCallback?: () => void
	submitCallback?: (val: any) => void
}

function usePageSearch({ addCallback, submitCallback }: PageSearchCallbacks) {
	const PageTableRef: any = useRef<ElementRef<typeof PageTable>>()
	const PageModalRef: any = useRef<ElementRef<typeof pageModal>>()

	const handleSearch = (formData: any) => {
		PageTableRef.current!.getDataList(formData)
	}

	const handleReset = () => {
		PageTableRef.current!.getDataList({})
	}

	const handleSubmit = (formData: any) => {
		submitCallback!(formData)
	}

	const handleAdd = () => {
		addCallback!()
		// addCallback ? addCallback!() : PageModalRef.current.setShowModal(true)
	}

	return {
		PageTableRef,
		PageModalRef,
		handleSearch,
		handleReset,
		handleSubmit,
		handleAdd,
	}
}

export default usePageSearch
