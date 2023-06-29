import React from 'react';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';

import { router } from '@/router';
import { useScheme } from '@/store';

import { App } from './App';

export const AppConfig = () => {
  const scheme = useScheme((select) => select.scheme);

  return (
    <RouterProvider router={router}>
      <ConfigProvider
        isWebView={true}
        transitionMotionEnabled={true}
        appearance={scheme}
      >
        <AdaptivityProvider>
          <AppRoot>
            <App />
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </RouterProvider>
  );
};
