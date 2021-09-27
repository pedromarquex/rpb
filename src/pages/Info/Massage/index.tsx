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
            Trata-se de uma terapêutica que pode ser aplicada em diferentes
            áreas do corpo para induzir o relaxamento e diminuir o estresse, uma
            vez que este contribui para a desarmonia do corpo, desequilíbrio dos
            hormônios e das sensações, além de alterações que produzem
            contrações excessivamente dolorosas (BRASIL, 2018). A massagem
            associada à acupressão tende a ser ainda mais eficaz para o alívio
            da dor materna (GÖNENÇ; TERZIOĞLU, 2020).
          </S.TextBlock>
          <S.TextBlock>
            Trata-se de uma terapêutica que pode ser aplicada em diferentes
            áreas do corpo para induzir o relaxamento e diminuir o estresse, uma
            vez que este contribui para a desarmonia do corpo, desequilíbrio dos
            hormônios e das sensações, além de alterações que produzem
            contrações excessivamente dolorosas (BRASIL, 2018). A massagem
            associada à acupressão tende a ser ainda mais eficaz para o alívio
            da dor materna (GÖNENÇ; TERZIOĞLU, 2020).
          </S.TextBlock>
          <S.TextBlock>
            No segundo estágio do trabalho de parto, a paciente pode não desejar
            ser tocada nas costas; neste caso, movimentos tranquilos na testa
            podem ser mais apropriados (BRASIL, 2018; BRASIL, 2019). A massagem
            deve ser aplicada sempre que necessária, até mesmo no abdome. Caso a
            gestante opte por técnicas de massagem que ela esteja habituada ou
            que tenham sido ensinadas aos seus acompanhantes, ela deve ser
            apoiada em sua escolha (BRASIL, 2017 ,BRASIL, 2018; BRASIL, 2019).
          </S.TextBlock>
          <S.TextBlock>
            A literatura não menciona a utilização de produtos para massagens no
            trabalho de parto; caso haja associação de produtos como óleos
            essenciais, estes se enquadram na aromaterapia. O uso de produtos
            como hidratantes, cremes e outros similares que são comumente
            utilizados em massagens não são abordados na literatura para o uso
            durante o trabalho de parto.
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
            <S.TextBold>2. </S.TextBold>Realize a higienização das mãos.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>3. </S.TextBold>Posicione a parturiente de uma forma na
            qual se sinta confortável, decúbito lateral é uma escolha,
            recorrendo ao apoio de almofadas. Sentar de pernas abertas em uma
            cadeira também é um arranjo útil; neste caso, a paciente deve
            inclinar-se para a frente.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>4. </S.TextBold>Em um vidro escuro faça a diluição de 30
            gotas de óleo essencial (Casca de Canela, Canela-Cássia, Cravo,
            Capim-Limão, Gerânio, Orégano) em 10 ml de óleo vegetal.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>5. </S.TextBold>Antes de aplicar qualquer tipo de
            produto na pele (seja um óleo essencial ou qualquer outra coisa),
            entenda como usar o produto e esteja ciente de como ele pode reagir
            com a pele ou o corpo.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>6. </S.TextBold>Aplique várias doses pequenas ao longo
            do período do Trabalho de Parto-TP, em vez de uma dose grande,
            comece com 1-2 gotas repetindo assim quando necessário a cada 1-2
            horas. Não coloque o óleo essencial diluído diretamente na pele da
            parturiente, primeiramente deve ser colocado na palma da mão do
            profissional, esfregando uma à outra, para espalhar e aquecer o
            óleo.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>7. </S.TextBold>Apresente as mãos ao corpo da
            parturiente, colocando-as espalmadas na parte superior ou inferior
            das costas e mantendoas lá durante 15 segundos;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>8. </S.TextBold>Manter sempre o contato de uma das mãos
            no corpo da mulher, mesmo quando esta se desloca de uma parte do
            corpo para outra;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>9. </S.TextBold>Adotar uma postura correta ao massagear
            de forma a evitar dores nas costas, minimizar a fadiga dos braços e
            conservar as forças, enquanto a parturiente sente apenas um fluxo
            rítmico e leve de movimentos.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>10. </S.TextBold>Realize um toque suave e ligeiro,
            utilize movimentos leves e longos no início; depois, quando a área
            estiver relaxada, aumente a pressão.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>11. </S.TextBold>Para massajar áreas maiores, faça um
            leque para fora no fim de um movimento longo sobre as costas e as
            pernas.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>12. </S.TextBold>Realize a manobra de amassamento com o
            objetivo de comprimir o músculo suavemente estimulando o fluxo
            sanguíneo e fornecendo-lhe oxigénio e nutrientes que podem aliviar a
            dor e também ajudar a reconstruir o tecido muscular danificado. Esse
            método deve ser usado nos músculos suficientemente grandes para
            serem pressionados de modo firme e estirados na direção transversal,
            como os músculos paravertebrais (próximos à coluna), as fibras
            superiores do trapézio e os músculos glúteos.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>13. </S.TextBold>Com as duas mãos colocadas no sentido
            ascendente em ambos os lados da coluna vertebral na região do sacro
            aplique uma pressão. Esta massagem nunca deve ser feita diretamente
            sobre a coluna vertebral.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>14. </S.TextBold>Com as mãos você deve massagear da
            região glútea no sentido ascendente até ao nível da cintura. Em
            seguida, os dedos de ambas as mãos viram para dentro e os cotovelos
            viram para o exterior.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>15. </S.TextBold>Para definir a percepção da dor durante
            o trabalho de parto, utilize a escala visual analógica (EVA) que
            varia de 0 a 10, em que o 0 é ausência de dor e 10 significa dor
            intensa.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>16. </S.TextBold>Realizar registro da intervenção e
            registro de acompanhamento dos sintomas e intensidade da dor.
          </S.TextBlock>
          <S.Image resizeMode="contain" source={png19} />
          <S.Image resizeMode="contain" source={png20} />
          <S.Image resizeMode="contain" source={png21} />
          <S.Image resizeMode="contain" source={png22} />
          <S.Image resizeMode="contain" source={png23} />
          <S.Legend>
            FIGURA4 . Demonstração da técnica de massagem na promoção do
            relaxamento e alívio da dor.
          </S.Legend>
        </S.Content>
      </S.ContentContainer>
    </ScrollView>
  );
};

export default Massage;