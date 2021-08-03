import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Info from './pages/Info';
import Labour from './pages/Labour';
import Acupuncture from './pages/Acupuncture';
import Aromatherapy from './pages/Aromatherapy';
import Massage from './pages/Massage';
import Thermotherapy from './pages/Thermotherapy';
import Yoga from './pages/Yoga';
import Prayer from './pages/Prayer';
import SwissBall from './pages/SwissBall';

const AppStack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <AppStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#F0F0F7',
        },
      }}
    >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Info" component={Info} />
      <AppStack.Screen name="Labour" component={Labour} />
      <AppStack.Screen name="Acupuncture" component={Acupuncture} />
      <AppStack.Screen name="Aromatherapy" component={Aromatherapy} />
      <AppStack.Screen name="Massage" component={Massage} />
      <AppStack.Screen name="Thermotherapy" component={Thermotherapy} />
      <AppStack.Screen name="Yoga" component={Yoga} />
      <AppStack.Screen name="Prayer" component={Prayer} />
      <AppStack.Screen name="SwissBall" component={SwissBall} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Routes;
