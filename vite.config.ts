import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	return {
		base: '/',
		build: {
			sourcemap: true,
			outDir: mode === 'development' ? 'dist-dev' : 'dist',
		},
		plugins: [react()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
			extensions: ['.jsx', '.js', '.ts', '.tsx', '.mjs', '.cjs', '.json'],
		},
		server: {
			proxy: {
				'/api': {
					target: 'http://localhost:8888',
					changeOrigin: false,
					rewrite: path => {
						console.log('path');
						console.log(path);
						return path.replace(/^\/api/, '');
					},
				},
			},
		},
	};
});
