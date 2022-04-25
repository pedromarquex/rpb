import React from 'react';
import { Image, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from '../_styles/info/styles';

import backIcon from '../../../assets/icons/back.png';
import zito from '../../../assets/PNGS-15.png';
import yoga from '../../../assets/PNGS-11.png';

const Yoga: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <S.HeaderContainer>
        <S.BackButton onPress={() => navigation.navigate('Home')}>
          <Image source={backIcon} resizeMode="contain" />
        </S.BackButton>

        <S.TitleContainer>
          <S.Title>Ioga</S.Title>
          <S.TitleImage source={zito} resizeMode="center" />
        </S.TitleContainer>
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Content>
          <S.Image
            resizeMode="contain"
            source={yoga}
            style={{ marginBottom: 30 }}
          />
          <S.TextBlock>
            Não existe comprovação científica que o Ioga é efetivo em nenhuma
            das fases do PP, porém se ela for realizado durante a gestação
            poderá ser eficaz no controle da ansiedade, respiração e
            relaxamento. Durante a gestação, os{' '}
            <S.TextBold>pranayamas</S.TextBold> (controle da energia vital por
            meio da respiração) cumprem um papel importante para o controle da
            pressão arterial, além de relaxar, distender e deixar mais flexível
            a musculatura da parede abdominal e a região torácica para que se
            tenha um melhor controle da dor durante a fase ativa do PP
            (DESMAWATI; KONGSUWAN; CHATCHAWET, 2019).
          </S.TextBlock>
          <S.TextBlock>
            O método descrito abaixo deve ser empregado principalmente na fase
            de dilatação do PP, pois irá causar o relaxamento dos músculos
            abdominais e diminuir o desconforto (BRASIL, 2018a; 2019; WHO,
            2018).
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>Procedimento: </S.TextBold>
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>1. </S.TextBold>Prepare a sala de parto com o objetivo
            de criar um bom ambiente, mantendo as luzes baixas e a música suave.
            O uso de tapetes de borracha ou tatames antiderrapantes pode ser uma
            alternativa;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>2. </S.TextBold>Realize o toque vaginal (enfermeiro ou
            médico obstetra) para observar a dilatação cervical. A técnica só
            deverá ser realizada se a dilatação cervical esteja até 5 cm;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>3. </S.TextBold>Posicione a gestante sentada no tapete,
            dobrando o joelho direito e colocando calcanhar direito sobre a coxa
            esquerda. Em seguida, incline cuidadosamente o joelho esquerdo, puxe
            o calcanhar esquerdo sobre a canela direita e coloque-o sobre a coxa
            direita. Lembre-se que a parturiente pode não optar por essa posição
            ou não se adaptar e dever ser colocada na posição mais confortável
            possível;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>4. </S.TextBold>Em um tom suave, o toque da música pode
            melhorar a concentração, assim como o ato de fechar os olhos, pois
            esse ato ajuda a gestante a se desconectar de estímulos externos
            visuais que possam diminuir sua concentração e relaxamento;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>5. </S.TextBold>Quando a paciente sentir uma contração,
            peça para que ela sinalize e classifique em: leve, moderada ou
            forte, utilize o{' '}
            <S.Link onPress={() => navigation.navigate('Stopwatch')}>
              temporizador de contrações
            </S.Link>{' '}
            para melhorar o processo.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>6. </S.TextBold>Peça que a parturiente realize o
            exercício de Sama Vritti Pranayama (Ioga-Respiração Equalizada).
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>7. </S.TextBold>Oriente que ela inicie a inspiração
            <S.TextBold> Sama Vritti Pranayama</S.TextBold>, peça para que ela
            conte mentalmente e inspire o ar pelo nariz contando de 1 à 5 – (1 2
            3 4 5). Quando a mesma expirar, oriente a soltar o ar pela boca e
            contar – (5 4 3 2 1), ou seja , de modo decrescente e oposta ao da
            inspiração.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>8. </S.TextBold>Para definir a percepção da dor durante
            o trabalho de parto, utilize a escala visual analógica (EVA) que
            varia de 0 a 10, em que o 0 é ausência de dor e 10 significa dor
            intensa.{' '}
            <S.Link onPress={() => navigation.navigate('Scale')}>
              Clique aqui para utilizar a escala
            </S.Link>
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>9. </S.TextBold>Realizar registro da intervenção e de
            acompanhamento dos sintomas e intensidade da dor.
          </S.TextBlock>
          <S.Image resizeMode="contain" source={yoga} />
          <S.Legend>FIGURA 7- Representação esquemática posição Yoga.</S.Legend>
          <S.TextBlock>
            (SMITH et al., 2018; DESMAWATI et al., 2020).
          </S.TextBlock>
        </S.Content>
      </S.ContentContainer>
    </ScrollView>
  );
};

export default Yoga;
