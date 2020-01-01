import React, {useEffect} from 'react';

import '~/config/ReactotronConfig';
import OneSignal from 'react-native-onesignal';
import Routes from '~/routes';

const App = () => {
  useEffect(() => {
    OneSignal.init('617fafd7-c41f-4fe7-ad01-5f67db6d2886');
    OneSignal.addEventListener('received', receivedPush);
    OneSignal.addEventListener('opened', openedPush);
    OneSignal.addEventListener('ids', idsPush);
  }, []);

  const receivedPush = push => {
    console.log(push);
  };
  const openedPush = push => {
    console.log(push);
  };
  const idsPush = push => {
    console.log(push);
  };
  return <Routes />;
};

export default App;
