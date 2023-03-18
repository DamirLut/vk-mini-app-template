import { useAuth } from '@/store/auth';
import { useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { useLocation } from '@happysanta/router';
import { Root } from '@vkontakte/vkui';
import ExampleView from '@/views/Example';
import { Views } from '@/router';

function App() {
  const location = useLocation();
  const setAccessToken = useAuth(select => select.setAccessToken);

  useEffect(() => {

    bridge.send('VKWebAppGetAuthToken').then((response) => {
      setAccessToken(response.access_token);
    }).catch(console.error);

  }, []);

  const activeView = location.getViewId();

  return (
    <Root activeView={activeView}>
      <ExampleView id={Views.Example} />
    </Root>
  );
}

export default App;
