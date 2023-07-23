import React, { memo } from "react"
import { DcLoadingV2Wrapper } from "./style"

const DcLoadingV2 = memo(() => {
	return (
		<DcLoadingV2Wrapper>
			<div className="bars">
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</div>
		</DcLoadingV2Wrapper>
	)
})
export default DcLoadingV2
