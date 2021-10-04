import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Labour from './pages/Info/Labour';
import Acupuncture from './pages/Info/Acupuncture';
import Aromatherapy from './pages/Info/Aromatherapy';
import Massage from './pages/Info/Massage';
import Thermotherapy from './pages/Info/Thermotherapy';
import Yoga from './pages/Info/Yoga';
import Prayer from './pages/Info/Prayer';
import SwissBall from './pages/Info/SwissBall';
import MusicTherapy from './pages/Info/MusicTherapy';
import Stopwatch from './pages/Stopwatch';
import Scale from './pages/Scale';
import About from './pages/About';

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
      <AppStack.Screen name="Stopwatch" component={Stopwatch} />
      <AppStack.Screen name="Scale" component={Scale} />
      <AppStack.Screen name="About" component={About} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Routes;
