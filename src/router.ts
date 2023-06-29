import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const routes = RoutesConfig.create([
  createRoot('root', [createView('default', [createPanel('default', `/`)])]),
]);

export const router = createHashRouter(routes.getRoutes());
