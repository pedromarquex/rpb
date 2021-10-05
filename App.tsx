import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import Onboarding from 'react-native-onboarding-swiper';

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
  const [completed, setCompleted] = useState(false);
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

  if (!completed) {
    return (
      <Onboarding
        onDone={() => {
          setCompleted(true);
        }}
        onSkip={() => {
          setCompleted(true);
        }}
        pages={[
          {
            backgroundColor: '#23292E',
            image: <Image source={require('./src/assets/zito1.png')} />,
            title: 'Seja bem-vindo',
            subtitle: 'Olá colegas! Eu me chamo Rpbzito!',
          },
          {
            backgroundColor: '#23292E',
            image: <Image source={require('./src/assets/zito2.png')} />,
            title: 'Seja bem-vindo',
            subtitle:
              'Irei lhe apresentar o mais novo conceito de educação em saúde digital, o RPB.',
          },
          {
            backgroundColor: '#23292E',
            image: <Image source={require('./src/assets/zito3.png')} />,
            title: 'Seja bem-vindo',
            subtitle:
              'O RPB( Reduce Pain in Birth ) surgiu  como uma nova ideia de educação digital na palma de sua mão! ',
          },
          {
            backgroundColor: '#23292E',
            image: <Image source={require('./src/assets/zito4.png')} />,
            title: 'Seja bem-vindo',
            subtitle:
              'Ele  tem o objetivo de orientar  os profissionais de saúde  sobre  os métodos não farmacológicos que  auxiliam na redução da dor no parto , vamos conhecê-las ?',
          },
        ]}
      />
    );
  }
  return (
    <>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="light" />
      <Routes />
    </>
  );
}
