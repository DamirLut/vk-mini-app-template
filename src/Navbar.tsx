import { Icon28UserOutline } from '@vkontakte/icons';
import {
  useActiveVkuiLocation,
  useRouteNavigator,
} from '@vkontakte/vk-mini-apps-router';
import { Tabbar, TabbarItem } from '@vkontakte/vkui';

import { routes } from '@/router';

const tabbars = [
  {
    view: routes.root.default,
    text: 'Default',
    icon: <Icon28UserOutline />,
  },
];

export default function Navbar() {
  const location = useActiveVkuiLocation();
  const navigator = useRouteNavigator();

  return (
    <Tabbar>
      {tabbars.map((item) => (
        <TabbarItem
          key={item.view.id}
          text={item.text}
          selected={location.view == item.view.id}
          onClick={() => navigator.push(item.view.default)}
        >
          {item.icon}
        </TabbarItem>
      ))}
    </Tabbar>
  );
}
