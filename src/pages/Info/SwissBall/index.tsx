import React from 'react';
import { Image, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from '../_styles/info/styles';

import backIcon from '../../../assets/icons/back.png';
import png1 from '../../../assets/suiss1.png';
import png2 from '../../../assets/suiss2.png';
import png3 from '../../../assets/suiss3.png';
import png4 from '../../../assets/suiss4.png';
import zito from '../../../assets/PNGS-15.png';

const SwissBall: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <S.HeaderContainer>
        <S.BackButton onPress={() => navigation.navigate('Home')}>
          <Image source={backIcon} resizeMode="contain" />
        </S.BackButton>

        <S.TitleContainer>
          <S.Title>Bola Suíça</S.Title>
          <S.TitleImage source={zito} resizeMode="center" />
        </S.TitleContainer>
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Content>
          <S.TextBlock>
            Conhecida como bola obstétrica, pode ser usada diversas vezes ao
            longo do PP a depender da vontade da parturiente. Esse recurso
            permite a mobilidade pélvica, estimula a dilatação e a descida
            fetal, além de diminuir o desconforto doloroso e provocar
            relaxamento. A realização de exercícios com a bola na posição
            vertical (sentada) trabalha a musculatura do assoalho pélvico, em
            especial, os músculos levantadores do ânus e pubococcígeos e a
            fáscia da pelve (MOTA e SILVA et al., 2011).
          </S.TextBlock>
          <S.TextBlock>
            Permanecer na posição vertical traz benefícios como a diminuição do
            tempo de duração do primeiro estágio do PP, alívio da dor e tensão
            (SILVA et al., 2019b). Recomenda-se que a bola não esteja muito
            cheia, pois isso pode deixá-la mais resistente e menos flexível para
            se moldar ao períneo quando a mulher se sentar nela (BRASIL, 2019).
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>Procedimento:</S.TextBold>
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>1. </S.TextBold>No período de dilatação inicial não deve
            ser realizado movimentos de abaixar e levantar (quicando) na bola,
            pois este movimento pode gerar um edema no colo uterino.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>2. </S.TextBold>Em caso de dilatação total, solicite que
            a parturiente faça movimentos de subir e descer com cautela e usando
            uma proteção ou cobertura para que a região perineal não fique em
            contato direto com a bola. A bolsa rota não contraindica o uso da
            bola suíça (BRASIL, 2019).
          </S.TextBlock>
          <S.Image resizeMode="contain" source={png1} />
          <S.Legend>
            FIGURA 8. Exercício que pode ser realizado durante o trabalho de
            parto: Promove relaxamento e alongamento e permite o aumento dos
            diâmetros da pelve
          </S.Legend>
          <S.Image resizeMode="contain" source={png2} />
          <S.Legend>
            FIGURA 9. Gestante sentada sobre a bola, postura em 90° MMII
            (membros inferiores). Promove a posição vertical, facilitando o
            alinhamento feto-materno.
          </S.Legend>
          <S.Image resizeMode="contain" source={png3} />
          <S.Legend>
            FIGURA 10 : A gestante realiza exercícios de propulsão e/ou rotação
            (rebolar sobre a bola), Promove contrações eficazes e menos
            dolorosas, facilita a descida fetal e aumenta a abertura da pelve.
            Fonte: Silva; 2010
          </S.Legend>
          <S.TextBlock>
            Essa posição (Fig 10) ainda proporciona liberdade de mudança de
            posição à parturiente, o que contribui para a participação ativa da
            mulher no processo do nascimento. O balanço da região pélvica produz
            gradualmente o relaxamento da musculatura e ampliação da pelve
            facilitando a descida do bebê pelo canal vaginal (SILVA et al.,
            2011).
          </S.TextBlock>
          <S.Image resizeMode="contain" source={png4} />
          <S.Legend>
            FIGURA 11 : Posição propicia durante as contrações : em pé com o
            tronco apoiado sobre a bola . Este exercício permite a parturiente
            conforto durante as contrações, onde a cada uma ela poderá apertar a
            bola além de ,também ,promover a postura vertical. Fonte: Silva;
            2010
          </S.Legend>
        </S.Content>
      </S.ContentContainer>
    </ScrollView>
  );
};

export default SwissBall;
