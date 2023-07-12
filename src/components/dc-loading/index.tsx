import React, { memo } from "react"
import { DcLoadingWrapper } from "./style"

const DcLoading = memo(() => {
	return (
		<DcLoadingWrapper>
			<div className="loading">
				<div className="loading-square"></div>
				<div className="loading-square"></div>
				<div className="loading-square"></div>
				<div className="loading-square"></div>
			</div>
		</DcLoadingWrapper>
	)
})
export default DcLoading
