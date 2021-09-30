import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import * as S from '../Info/_styles/info/styles';

import backIcon from '../../assets/icons/back.png';
import zito from '../../assets/PNGS-14.png';

interface Contraction {
  start: string;
  end: string;
  duration: string;
  startDate?: Date;
  endDate?: Date;
}

const Stopwatch: React.FC = () => {
  const [contractions, setContractions] = useState<[Contraction]>([
    {
      start: '----------',
      end: '----------',
      duration: '----------',
    },
  ]);

  const [registering, setRegistering] = useState(false);

  const [duraction, setDuraction] = useState(0);

  const handleContraction = () => {
    if (!registering) {
      setRegistering(!registering);
      const now = new Date();
      const start = `${now.getHours()}:${
        now.getMinutes() > 9 ? now.getMinutes() : `0${String(now.getMinutes())}`
      }:${
        now.getSeconds() > 9 ? now.getSeconds() : `0${String(now.getSeconds())}`
      }`;

      setContractions([
        ...contractions,
        {
          start,
          end: '-------',
          duration: '-------',
          startDate: now,
        },
      ]);
    } else {
      setRegistering(!registering);
      const nowEnd = new Date();
      const end = `${nowEnd.getHours()}:${
        nowEnd.getMinutes() > 9
          ? nowEnd.getMinutes()
          : `0${String(nowEnd.getMinutes())}`
      }:${
        nowEnd.getSeconds() > 9
          ? nowEnd.getSeconds()
          : `0${String(nowEnd.getSeconds())}`
      }`;
      const auxContractions = contractions;

      const { startDate } = auxContractions[auxContractions.length - 1];

      let delta = Math.floor(
        Math.abs(nowEnd?.getTime() - startDate?.getTime()) / 1000
      );

      // calculate (and subtract) whole minutes
      const minutes = Math.floor(delta / 60) % 60;
      delta -= minutes * 60;

      // what's left is seconds
      const seconds = delta % 60; // in theory the modulus is not required

      auxContractions[auxContractions.length - 1].end = end;
      auxContractions[
        auxContractions.length - 1
      ].duration = `${minutes}:${seconds}`;
      auxContractions[auxContractions.length - 1].endDate = nowEnd;
    }
  };

  const navigation = useNavigation();
  return (
    <ScrollView>
      <S.HeaderContainer>
        <S.BackButton onPress={() => navigation.navigate('Home')}>
          <Image source={backIcon} resizeMode="contain" />
        </S.BackButton>
        <S.TitleContainer>
          <S.Title>Temporizador de Contrações</S.Title>
          <S.TitleImage source={zito} />
        </S.TitleContainer>
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Content>
          <View style={{ alignItems: 'center' }}>
            {registering ? (
              <TouchableOpacity
                onPress={handleContraction}
                style={{
                  backgroundColor: 'red',
                  height: 40,
                  width: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                <Text style={{ color: '#fff' }}>
                  {registering ? 'Parar' : 'Iniciar'}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={handleContraction}
                style={{
                  backgroundColor: '#5e778c',
                  height: 40,
                  width: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                <Text style={{ color: '#fff' }}>
                  {registering ? 'Parar' : 'Iniciar'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text>Hora início</Text>
            <Text>Hora fim</Text>
            <Text>Duração</Text>
          </View>
          {contractions.map((contraction) => (
            <View
              key={contraction.start}
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text>{contraction.start}</Text>
              <Text>{contraction.end}</Text>
              <Text>{contraction.duration}</Text>
            </View>
          ))}
        </S.Content>
      </S.ContentContainer>
    </ScrollView>
  );
};

export default Stopwatch;
