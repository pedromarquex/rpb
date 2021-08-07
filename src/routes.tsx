import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Labour from './pages/info/Labour';
import Acupuncture from './pages/info/Acupuncture';
import Aromatherapy from './pages/info/Aromatherapy';
import Massage from './pages/info/Massage';
import Thermotherapy from './pages/info/Thermotherapy';
import Yoga from './pages/info/Yoga';
import Prayer from './pages/info/Prayer';
import SwissBall from './pages/info/SwissBall';
import MusicTherapy from './pages/info/MusicTherapy';

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

      <AppStack.Screen name="Labour" component={Labour} />
      <AppStack.Screen name="Acupuncture" component={Acupuncture} />
      <AppStack.Screen name="Aromatherapy" component={Aromatherapy} />
      <AppStack.Screen name="Massage" component={Massage} />
      <AppStack.Screen name="Thermotherapy" component={Thermotherapy} />
      <AppStack.Screen name="Yoga" component={Yoga} />
      <AppStack.Screen name="Prayer" component={Prayer} />
      <AppStack.Screen name="SwissBall" component={SwissBall} />
      <AppStack.Screen name="MusicTherapy" component={MusicTherapy} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Routes;
