import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import RootDrawer from './src/components/DrawerNavBar';

import './src/config/ReactotronConfig';

const App = () => {

  return (
      <NavigationContainer>
        <RootDrawer />
      </NavigationContainer>
  );
};

export default App;
