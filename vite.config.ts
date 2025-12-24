import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repository = process.env.GITHUB_REPOSITORY;
const inferredBase = repository ? `/${repository.split('/').pop()}/` : '/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: inferredBase,
});
