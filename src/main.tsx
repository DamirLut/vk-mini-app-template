import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@vkontakte/vkui/dist/vkui.css';
import './index.css';
import bridge from '@vkontakte/vk-bridge';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import { RouterContext } from '@happysanta/router';
import { router } from '@/router';

bridge.send('VKWebAppInit');


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <RouterContext.Provider value={router}>
          <App />
        </RouterContext.Provider>
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>,
);

if (import.meta.env.DEV) {
  import('./eruda').then(() => console.log('[eruda] loaded'));
}
