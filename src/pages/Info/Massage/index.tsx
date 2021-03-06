import React from 'react';
import { Image, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from '../_styles/info/styles';

import backIcon from '../../../assets/icons/back.png';
import png19 from '../../../assets/PNGS-19.png';
import png20 from '../../../assets/PNGS-20.png';
import png21 from '../../../assets/PNGS-21.png';
import png22 from '../../../assets/PNGS-22.png';
import png23 from '../../../assets/PNGS-23.png';
import zito from '../../../assets/PNGS-14.png';
import eva from '../../../assets/eva-scale.png';

const Massage: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <S.HeaderContainer>
        <S.BackButton onPress={() => navigation.navigate('Home')}>
          <Image source={backIcon} resizeMode="contain" />
        </S.BackButton>

        <S.TitleContainer>
          <S.Title>Massagem</S.Title>
          <S.TitleImage source={zito} resizeMode="center" />
        </S.TitleContainer>
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Content>
          <S.TextBlock>
            Terapêutica que pode ser aplicada para induzir o relaxamento e
            diminuir o estresse. Pode ser aplicada em diferentes regiões do
            corpo como nas costas, região sacral, ombro, pescoço, braços, pernas
            e pés (regiões que costumam estar em tensão no momento do PP). Na
            região sacral, por exemplo, a massagem é realizada com as mãos
            rítmicas, ascendentes e com movimentos com leve pressão, retorno e
            deslizamento pela região lateral do tronco (ÇEVIK; KARADUMAN, 2018;
            GAYESKI; BRÜGGEMANN, 2010; GALLO et al., 2013; GÖNENÇ; TERZIOĞLU,
            2020; BRASIL, 2018a; SMITH et al., 2018a).
          </S.TextBlock>
          <S.TextBlock>
            Quando aplicada durante a fase de dilatação no PP, a massagem pode
            gerar redução da dor e, por isso, costuma ser aplicada no início do
            momento de latência. Quando associada à acupressão tende a ser ainda
            mais eficaz para o alívio da dor materna (WHO, 2018; GÖNENÇ;
            TERZIOĞLU, 2020).
          </S.TextBlock>
          <S.TextBlock>
            Na segunda fase do PP, a parturiente pode não desejar ser tocada nas
            costas; neste caso, movimentos tranquilos na testa podem ser mais
            apropriados. A massagem deve ser aplicada sempre que necessária, até
            mesmo no abdome. Caso a gestante opte por técnicas de massagem que
            ela esteja habituada ou que tenham sido ensinadas aos seus
            acompanhantes, deve ser apoiada em sua escolha (BRASIL, 2017; 2018a;
            2019).
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>Procedimento:</S.TextBold>
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>1. </S.TextBold>Prepare a sala de parto com o objetivo
            de criar um bom ambiente, mantendo as luzes baixas e a música suave.
            Os lençóis da cama devem estar limpos e bem esticados;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>2. </S.TextBold>Higienize as mãos;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>3. </S.TextBold>Posicione a parturiente de uma forma na
            qual ela se sinta confortável. Posição de decúbito lateral é uma
            escolha, recorrendo ao apoio de almofadas. Sentar de pernas abertas
            em uma cadeira também é um arranjo útil; neste caso, a paciente deve
            inclinar-se para frente;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>4. </S.TextBold>Em um vidro escuro faça a diluição de 30
            gotas de óleo essencial (Casca de Canela, Canela-Cássia, Cravo,
            Capim-Limão, Gerânio, Orégano) em 10 ml de óleo vegetal;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>5. </S.TextBold>Antes de aplicar qualquer tipo de
            produto na pele (seja um óleo essencial ou qualquer outro), entenda
            como usar o produto e esteja ciente de como ele pode reagir com a
            pele ou o corpo;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>6. </S.TextBold>Aplique várias doses pequenas ao longo
            do período de PP, em vez de uma dose grande. Comece com 01 a 02
            gotas repetindo assim quando necessário a cada 01 ou 02 horas. Não
            coloque o óleo essencial diluído diretamente com a pele da
            parturiente, pois deve ser colocado, primeiramente na palma da mão
            do profissional, esfregando uma a outra, para espalhar e aquecer o
            óleo;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>7. </S.TextBold>Coloque as mãos no corpo da parturiente,
            colocando-as espalmadas na parte superior ou inferior das costas e
            fazendo movimentos laterais durante 15 segundos;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>8. </S.TextBold>Mantenha sempre o contato de uma das
            mãos no corpo da mulher, mesmo quando esta se desloca de uma parte
            do corpo para outra;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>9. </S.TextBold>Adote uma postura semi ereta, com as
            pernas separadas de forma a evitar dores nas costas, minimizar a
            fadiga dos braços e conservar as forças. A parturiente deve sentir
            apenas um fluxo rítmico e leve de movimentos;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>10. </S.TextBold>Realize um toque suave e ligeiro
            utilizando movimentos leves e longos no início. Depois, quando a
            área estiver relaxada, aumente a pressão fazendo movimentos
            circulares ao lado da coluna, desde o quadril até a região dos
            ombros;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>11. </S.TextBold>Para massagear áreas maiores, faça um
            movimento tipo leque, iniciando com movimentos curtos no início da
            manobra e mais longo no final aplicando sobre as costas e pernas.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>12. </S.TextBold>Realize a manobra de amassamento, que é
            um movimento feito com as mãos trabalhando de forma alternada,
            apertando e rolando os músculos, onde devem ser executados com
            firmeza, usando o peso do corpo e aplicando pressão extra com os
            polegares. Essa manobra comprime o músculo suavemente estimulando o
            fluxo sanguíneo e fornecendo oxigênio e nutrientes que podem aliviar
            a dor e também ajudar a reconstruir o tecido muscular danificado.
            Esse método deve ser usado nos músculos suficientemente grandes para
            serem pressionados de modo firme e estirados na direção transversal.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>13. </S.TextBold>Com as duas mãos colocadas no sentido
            ascendente em ambos os lados da coluna vertebral execute movimentos
            de vai e vem (de baixo para cima) do quadril até os ombros e, ao
            chegar na região do sacro, aplique uma pressão. Esta massagem nunca
            deve ser feita diretamente sobre a coluna vertebral;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>14. </S.TextBold>Deve-se massagear da região glútea no
            sentido ascendente até ao nível dos ombros e, posteriormente, dos
            ombros até a região glútea, com movimentos de passos com os dedos;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>15. </S.TextBold>Para definir a percepção da dor durante
            o trabalho de parto, utilize a escala visual analógica (EVA) que
            varia de 0 a 10, em que o 0 é ausência de dor e 10 significa dor
            intensa.{' '}
            <S.Link onPress={() => navigation.navigate('Scale')}>
              Clique aqui para utilizar a escala
            </S.Link>
          </S.TextBlock>
          <S.Image resizeMode="contain" source={eva} />
          <S.TextBlock>
            <S.TextBold>16. </S.TextBold>Realizar registro da intervenção e
            registro de acompanhamento dos sintomas e intensidade da dor.
          </S.TextBlock>
          <S.Image resizeMode="contain" source={png19} />
          <S.Legend>
            FIGURA 4.1 - Demonstração da técnica de massagem na promoção do
            relaxamento e alívio da dor.
          </S.Legend>
          <S.Image resizeMode="contain" source={png20} />
          <S.Legend>
            FIGURA 4.2 - Demonstração da técnica de massagem na promoção do
            relaxamento e alívio da dor.
          </S.Legend>
          <S.Image resizeMode="contain" source={png21} />
          <S.Legend>
            FIGURA 4.3 - Demonstração da técnica de massagem na promoção do
            relaxamento e alívio da dor.
          </S.Legend>
          <S.Image resizeMode="contain" source={png22} />
          <S.Legend>
            FIGURA 4.4 - Demonstração da técnica de massagem na promoção do
            relaxamento e alívio da dor.
          </S.Legend>
          <S.Image resizeMode="contain" source={png23} />
          <S.Legend>
            FIGURA 4.5 - Demonstração da técnica de massagem na promoção do
            relaxamento e alívio da dor.
          </S.Legend>
        </S.Content>
      </S.ContentContainer>
    </ScrollView>
  );
};

export default Massage;
