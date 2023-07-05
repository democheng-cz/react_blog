import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<Provider store={store}>
		<BrowserRouter>
			<App />
			<div>react+ts</div>
		</BrowserRouter>
	</Provider>
	// </React.StrictMode>
);
