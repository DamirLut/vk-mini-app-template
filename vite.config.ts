import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@vkontakte\/vkui$/,
        replacement: '@vkontakte/vkui/dist/cssm',
      },
      {
        find: '@/',
        replacement: '/src/',
      },
    ],
  },
});
