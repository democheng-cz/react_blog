/// <reference types="vite/client"/>

declare module '@vitejs/plugin-react';

declare interface Window {
	__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

declare interface ImportMetaEnv {
	VITE_APP_BASE_URL: string;
}
