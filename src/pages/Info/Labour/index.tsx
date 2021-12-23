import React from 'react';
import { Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from '../_styles/info/styles';

import backIcon from '../../../assets/icons/back.png';
import zito from '../../../assets/PNGS-14.png';
import pregnancy from '../../../assets/PNGS-2.png';

const Labour: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <S.HeaderContainer>
        <S.BackButton onPress={() => navigation.navigate('Home')}>
          <Image source={backIcon} resizeMode="contain" />
        </S.BackButton>
        <S.TitleContainer>
          <S.Title>O Trabalho de parto</S.Title>
          <S.TitleImage source={zito} />
        </S.TitleContainer>
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Content>
          <S.Image
            resizeMode="contain"
            source={pregnancy}
            style={{ marginBottom: 30 }}
          />
          <S.TextBlock>
            O Trabalho de Parto (TP) é um período caracterizado pela presença de
            contrações uterinas frequentes e regulares com alterações do colo do
            útero e posterior saída do feto. Esse processo pode ser dividido em
            quatro partes, conhecidas como fases clínicas do parto (Dilatação,
            Expulsão, Dequitação e Período de Greenberg) (BRASIL, 2017; WHO,
            2018; SOGESP, 2019).
          </S.TextBlock>
          <S.TextBlock>
            A fase de dilatação, ou também chamada de fase latente, compreende
            um período que se inicia com contrações uterinas regulares, grau de
            apagamento mais acentuado, com dilatação a partir de 5cm até se
            tornar completa. O período expulsivo, em geral, é identificado por
            meio da dilatação cervical total. Nessa fase a mulher vai apresentar
            necessidade de empurrar o feto, ajudando o nascimento, que é o marco
            do término dessa fase. A dequitação inicia-se após a saída do feto
            (recémnascido) e termina com a saída da placenta (BRASIL, 2017; WHO,
            2018; SOGESP, 2019).
          </S.TextBlock>
          <S.TextBlock>
            A última fase do processo de TP, período de Greenberg, inicia-se
            após a saída da placenta. Nessa etapa, o útero se contrai e forma
            coágulos internos para controle do sangramento. É nesse período em
            que há maior risco de hemorragia pósparto e, por isso, a mulher deve
            ser rigorosamente observada (BRASIL, 2017; WHO, 2018; SOGESP, 2019).
          </S.TextBlock>
          <S.TextBlock>
            Durante o TP deve haver o controle da frequência cardíaca fetal no
            intervalo de 15 a 30 minutos com uso de Pinard ou Doppler e toque
            vaginal a cada quatro horas (WHO, 2018). A assistência recomendada
            inclui o cuidado holístico com as parturientes, fornecimento de
            informações à mulher, estímulo à deambulação, ingestão de líquidos e
            alimentos por gestantes com poucas chances de utilização da
            anestesia geral. Medidas como alongamento, sentar em cadeira,
            posições relaxantes são práticas que podem ser exercidas mediante
            dilatação de 3-8 cm, por exemplo (AKBARZADEH et al., 2014).
          </S.TextBlock>
        </S.Content>
      </S.ContentContainer>
    </ScrollView>
  );
};

export default Labour;
