import react, { useState, Suspense } from 'react';
import routes from './router';
import { useRoutes } from 'react-router-dom';

import Layout from './views/Layout';

function App() {
	return (
		<div className='app'>
			<Suspense fallback='加载中....'>{useRoutes(routes)}</Suspense>
		</div>
	);
}

export default App;
