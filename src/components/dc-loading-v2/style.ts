import styled from "styled-components"

export const DcLoadingV2Wrapper = styled.div`
	.bars {
		height: 30px;
		left: 50%;
		margin: -30px 0 0 -20px;
		position: absolute;
		top: 60%;
		width: 40px;
	}
	.bar {
		background: #e04960;
		bottom: 1px;
		height: 3px;
		position: absolute;
		width: 3px;
		animation: sound 0ms -800ms linear infinite alternate;
	}
	@keyframes sound {
		0% {
			opacity: 0.35;
			height: 3px;
		}
		100% {
			opacity: 1;
			height: 28px;
		}
	}
	.bar:nth-child(1) {
		left: 1px;
		animation-duration: 474ms;
	}
	.bar:nth-child(2) {
		left: 5px;
		animation-duration: 433ms;
	}
	.bar:nth-child(3) {
		left: 9px;
		animation-duration: 407ms;
	}
	.bar:nth-child(4) {
		left: 13px;
		animation-duration: 458ms;
	}
	.bar:nth-child(5) {
		left: 17px;
		animation-duration: 400ms;
	}
	.bar:nth-child(6) {
		left: 21px;
		animation-duration: 427ms;
	}
	.bar:nth-child(7) {
		left: 25px;
		animation-duration: 441ms;
	}
	.bar:nth-child(8) {
		left: 29px;
		animation-duration: 419ms;
	}
	.bar:nth-child(9) {
		left: 33px;
		animation-duration: 487ms;
	}
	.bar:nth-child(10) {
		left: 37px;
		animation-duration: 442ms;
	}
`
