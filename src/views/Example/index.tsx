import { FC } from 'react';
import { Group } from '@vkontakte/vkui';

import { ViewRoute } from '@/components';
import { Page } from '@/components';
import { routes } from '@/router';

type ViewProps = {
  nav: string;
};

export const ExampleView: FC<ViewProps> = (props) => {
  const view = routes.root.default;

  return (
    <ViewRoute nav={props.nav} defaultPanel={view.default.id}>
      <Page nav={view.default.id} title={'Default'}>
        <Group>Default page...</Group>
      </Page>
    </ViewRoute>
  );
};
