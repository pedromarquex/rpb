import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';
import * as S from './styles';

import chevron from '../../assets/icons/chevron-right.png';
import zito from '../../assets/PNGS-16.png';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.TitleContainer>
        <View>
          <S.Welcome>Seja bem-vindo.</S.Welcome>
          <S.Title>Escolha uma opção e{'\n'}tire suas dúvidas</S.Title>
        </View>
        <S.AvatarImage source={zito} />
      </S.TitleContainer>

      <S.OptionsContainer>
        <S.Option
          onPress={() => {
            navigation.navigate('Labour');
          }}
        >
          <S.OptionText>O trabalho de parto</S.OptionText>
          <Image source={chevron} />
        </S.Option>
        <S.Option
          onPress={() => {
            navigation.navigate('Acupuncture');
          }}
        >
          <S.OptionText>Acupuntura{'\n'}e Acupressão</S.OptionText>
          <Image source={chevron} />
        </S.Option>
        <S.Option
          onPress={() => {
            navigation.navigate('Aromatherapy');
          }}
        >
          <S.OptionText>Aromaterapia</S.OptionText>
          <Image source={chevron} />
        </S.Option>
        <S.Option
          onPress={() => {
            navigation.navigate('Massage');
          }}
        >
          <S.OptionText>Massagem</S.OptionText>
          <Image source={chevron} />
        </S.Option>
        <S.Option
          onPress={() => {
            navigation.navigate('Thermotherapy');
          }}
        >
          <S.OptionText>Terapias Térmicas{'\n'}ou Termoterapia</S.OptionText>
          <Image source={chevron} />
        </S.Option>
        <S.Option
          onPress={() => {
            navigation.navigate('Yoga');
          }}
        >
          <S.OptionText>Ioga</S.OptionText>
          <Image source={chevron} />
        </S.Option>
        <S.Option
          onPress={() => {
            navigation.navigate('Prayer');
          }}
        >
          <S.OptionText>Oração</S.OptionText>
          <Image source={chevron} />
        </S.Option>
        <S.Option
          onPress={() => {
            navigation.navigate('SwissBall');
          }}
        >
          <S.OptionText>Bola Suíça</S.OptionText>
          <Image source={chevron} />
        </S.Option>
        <View style={{ marginBottom: 80 }} />
      </S.OptionsContainer>
    </S.Container>
  );
};

export default Home;
