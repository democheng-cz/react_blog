import styled from 'styled-components';

const LoginPanelWrapper = styled.div`
	background-color: rgba(255, 255, 255, 0.5);
	padding: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	.ant-form-item {
		width: 100%;
		margin-bottom: 15px;
	}
	.btn {
		display: flex;
		justify-content: center;
		margin: 0;
		div {
			width: 100%;
		}
	}
	.btns {
		width: 100%;
		display: flex;
		justify-content: space-around;
		button {
			width: 80%;
			margin: 0 10px;
		}
	}
	.check-code {
		display: flex;
		justify-content: space-around;
		input {
			width: 65%;
		}
		img {
			width: 30%;
			height: 30px;
		}
	}
`;

export default LoginPanelWrapper;
