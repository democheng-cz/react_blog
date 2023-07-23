import { useState, ElementRef, useRef } from "react"
import pageModal from "@/components/page-modal"

function usePageModal() {
	const [defaultInfo, setDefaultInfo] = useState<any>()

	const pageModalRef: any = useRef<ElementRef<typeof pageModal>>(null)

	const handleUpdate = (val: any) => {
		setDefaultInfo({ ...val })
		pageModalRef.current!.setFormData({})
		pageModalRef.current!.setShowModal(true)
		pageModalRef.current!.setType("update")
	}

	// const handleEdit = (val: any) => {
	// 	setDefaultInfo({ ...val })
	// 	pageModalRef.current!.setFormData({})
	// 	pageModalRef.current!.setShowModal(true)
	// }

	return { pageModalRef, handleUpdate, defaultInfo }
}

export default usePageModal
