import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {SignIn, SplashScreen} from './pages';
import Routers from './routers';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      {/* <SignIn /> */}
      <Routers />
    </NavigationContainer>
  );
};

export default App;
