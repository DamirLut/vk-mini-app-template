import React, { Suspense } from 'react';
import {
  useActiveVkuiLocation,
  usePopout,
  useRouteNavigator,
} from '@vkontakte/vk-mini-apps-router';
import {
  Epic,
  ModalRoot,
  Root,
  ScreenSpinner,
  SplitCol,
  SplitLayout,
} from '@vkontakte/vkui';

import { ErrorBoundary } from '@/components';
import Navbar from '@/Navbar';
import { routes } from '@/router';
import { ExampleView } from '@/views';

export const App = () => {
  const routerPopout = usePopout();
  const routeNavigator = useRouteNavigator();

  const {
    root: activeRoot = routes.root.id,
    view: activeView = routes.root.default.id,
    modal: activeModal,
  } = useActiveVkuiLocation();

  const modal = (
    <ModalRoot
      activeModal={activeModal}
      onClose={() => routeNavigator.hideModal()}
    ></ModalRoot>
  );

  const views = [
    {
      id: 'default',
      element: ExampleView,
    },
  ];

  return (
    <SplitLayout popout={routerPopout} modal={modal}>
      <SplitCol width={'100%'} stretchedOnMobile autoSpaced>
        <Epic activeStory={activeRoot} tabbar={<Navbar />}>
          <Root activeView={activeView} nav={routes.root.id}>
            {views.map((view) => (
              <ErrorBoundary key={view.id} id={view.id}>
                <Suspense fallback={<ScreenSpinner />}>
                  <view.element nav={view.id} />
                </Suspense>
              </ErrorBoundary>
            ))}
          </Root>
        </Epic>
      </SplitCol>
    </SplitLayout>
  );
};
