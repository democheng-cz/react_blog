import styled from "styled-components"

export const DcFormWrapper = styled.div`
	.form-item {
		width: 30%;
	}
	.ant-form-item-row {
		/* @apply flex; */
		display: flex;
		flex-wrap: nowrap;
	}
	.ant-form-item-label {
		margin-right: 5px;
		@media screen and (max-width: 575px) {
			flex: none !important;
		}
	}
`
