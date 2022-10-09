import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default () => {
	const server = {
		host: true,
		open: true,
		port: 3000,
	};

	const test = {
		environment: 'happy-dom',
		includes: ['**/spec/*.test.js'],
	};

	return defineConfig({
		plugins: [react()],
		server,
		test,
	});
};
