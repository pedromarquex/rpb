import React from 'react';
import { Image, ScrollView, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from '../Info/_styles/info/styles';

import backIcon from '../../assets/icons/back.png';
import zito from '../../assets/PNGS-14.png';
import ufpi from '../../assets/ufpi.png';
import hospital from '../../assets/hospital.png';
import mestrado from '../../assets/mestrado.png';
import sesapi from '../../assets/sesapi.png';

const About: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <S.HeaderContainer>
        <S.BackButton onPress={() => navigation.navigate('Home')}>
          <Image source={backIcon} resizeMode="contain" />
        </S.BackButton>
        <S.TitleContainer>
          <S.Title>Sobre o aplicativo</S.Title>
          <S.TitleImage source={zito} />
        </S.TitleContainer>
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Content>
          <S.TextBlock>Feito em parceria com:</S.TextBlock>
          <S.Image resizeMode="contain" source={ufpi} />
          <S.Image resizeMode="contain" source={mestrado} />
          <S.Image resizeMode="contain" source={hospital} />
          <S.Image resizeMode="contain" source={sesapi} />
        </S.Content>
      </S.ContentContainer>
    </ScrollView>
  );
};

export default About;
