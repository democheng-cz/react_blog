import styled from "styled-components"

export const BlogDetailWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	.header {
		background-color: #fff;
		display: flex;
		flex-direction: column;
		margin-bottom: 30px;
		flex-basis: 80px;
		/* align-items: center; */
		/* justify-content: flex-start; */
		.info {
			display: flex;
			.user {
				margin-right: 20px;
			}
			.text {
				color: #000;
				margin-right: 6px;
				font-size: 12px;
			}
			span {
				color: #1598ff;
			}
		}
	}
	.md {
		flex: 1;
		background-color: #fafafa;
		padding-bottom: 20px;
		box-sizing: border-box;
		/* height: 100%; */
		.wmde-markdown {
			background-color: #fafafa;
		}
	}
`
