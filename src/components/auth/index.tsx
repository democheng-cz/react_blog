import React, { ReactDOM, memo } from 'react';

import { Navigate } from 'react-router-dom';
export const Auth = memo(({ children }: any) => {
	const token = localStorage.getItem('token');
	if (token) {
		return children;
	} else {
		return <Navigate to='/login' />;
	}
});
