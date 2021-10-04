import React, { useState } from 'react';
import { Image, ScrollView, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from '../Info/_styles/info/styles';

import backIcon from '../../assets/icons/back.png';
import zito from '../../assets/PNGS-14.png';

import { CustomSlider } from './components/CustomSlider';
import eva from '../../assets/eva-scale.png';

const Scale: React.FC = () => {
  const [slideValues, setSlideValues] = useState([]);

  const singleSliderValueCallback = (values) => {
    setSlideValues(values);
  };

  const navigation = useNavigation();
  return (
    <ScrollView>
      <S.HeaderContainer>
        <S.BackButton onPress={() => navigation.navigate('Home')}>
          <Image source={backIcon} resizeMode="contain" />
        </S.BackButton>
        <S.TitleContainer>
          <S.Title>Escala da Dor</S.Title>
          <S.TitleImage source={zito} />
        </S.TitleContainer>
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Content>
          <S.Image resizeMode="contain" source={eva} />
          <Text style={styles.title}>Indique na escala o nível da dor</Text>
          <CustomSlider
            min={0}
            max={10}
            LRpadding={40}
            callback={singleSliderValueCallback}
            single
          />
        </S.Content>
      </S.ContentContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 100,
  },
  title: {
    padding: 20,
    fontSize: 18,
  },
});

export default Scale;
