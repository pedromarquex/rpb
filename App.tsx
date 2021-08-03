import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';

import {
  Archivo_700Bold,
  Archivo_600SemiBold,
  useFonts,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="light" />
      <Routes />
    </>
  );
}
