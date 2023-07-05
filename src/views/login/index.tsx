import React, { memo } from 'react';

import { LoginWrapper } from './style';
import LoginPanel from '@/components/login-panel';

const Login: React.FC<any> = memo(props => {
	return (
		<LoginWrapper>
			<LoginPanel></LoginPanel>
			{/* login */}
		</LoginWrapper>
	);
});

export default Login;
