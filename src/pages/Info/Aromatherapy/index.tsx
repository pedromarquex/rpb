import React from 'react';
import { Image, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from '../_styles/info/styles';

import backIcon from '../../../assets/icons/back.png';
import zito from '../../../assets/PNGS-15.png';
import aromatherapy from '../../../assets/PNGS-10.png';

const Aromatherapy: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <S.HeaderContainer>
        <S.BackButton onPress={() => navigation.navigate('Home')}>
          <Image source={backIcon} resizeMode="contain" />
        </S.BackButton>

        <S.TitleContainer>
          <S.Title>Aromaterapia</S.Title>
          <S.TitleImage source={zito} resizeMode="center" />
        </S.TitleContainer>
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Content>
          <S.Image
            resizeMode="contain"
            source={aromatherapy}
            style={{ marginBottom: 30 }}
          />
          <S.TextBlock>
            Consiste no emprego de óleos essenciais, aromas e fragrâncias que
            estimulam sensações de bem-estar e alívio de dores. A utilização
            pode ocorrer por inalação com incenso, aromatizadores e difusores de
            ambiente, além da aplicação em superfícies, compressas ou durante
            massagens (BRASIL, 2019).
          </S.TextBlock>
          <S.TextBlock>
            A principal e mais benéfica forma de utilizar os óleos essenciais é
            por inalação. No entanto, estes podem ser usados de outras formas,
            adequando-se ao problema a tratar ou ao estilo de vida de cada
            parturiente.
          </S.TextBlock>
          <S.TextBlock>
            O efeito analgésico é gerado à medida que o cheiro do aroma ativa as
            células nervosas olfatórias por meio da liberação de
            neurotransmissores. Incensos de sálvia podem encurtar a duração do
            primeiro e segundo estágios do PP e, após 30 minutos de aplicação,
            pode aliviar a intensidade da dor (BRASIL, 2019; POLLARD, 2008;
            SMITH; COLLINS; CROWTHER, 2011; KAVIANI et al., 2014).
          </S.TextBlock>
          <S.TextBlock>
            A lavanda auxilia no alívio da dor, pois ajuda a parturiente a se
            acalmar e focar no PP. Além disso, o óleo vegetal pode ser aplicado
            no corpo por meio de massagem (BRASIL, 2019).
          </S.TextBlock>
          <S.TextBlock>
            Os óleos essenciais mais utilizados em aromaterapia para o alívio da
            dor durante o PP são Sálvia Esclaréia (Salvia sclarea) e Camomila
            Romana (Anthemis nobilis) enquanto os de Lavanda (L. angustifolia),
            Rosa (R. damascena) e Olíbano (Boswellia sp.) são mais efetivos para
            o alívio do medo e ansiedade. O óleo de Hortelã-pimenta (M.
            piperita) mostra-se se eficaz para o alívio da náusea e vômitos,
            muitas vezes causado por efeitos colaterais de outros medicamentos.
            Além disso, óleos essenciais de Eucalipto (Eucalyptus globulus),
            Limão (Citrus limon) e Mandarina (Citrus retiulata) podem aumentar a
            sensação de bem-estar e os sentimentos positivos em relação ao
            processo do parto (PRICE, 2019).
          </S.TextBlock>
          <S.TextBlock>
            Os óleos de Jasmim (Jasminum) e Lavanda (lavandula Augustifólia)
            oferecem vantagens ligeiramente diferentes, embora algumas de suas
            propriedades coincidam. Apesar de serem analgésicos, o de Jasmim é
            um pouco mais eficaz para intensificar as contrações, abreviando,
            assim, o PP (PRICE, 2019).
          </S.TextBlock>
          <S.TextBlock>
            A evaporização – outra forma de se utilizar a aromaterapia –
            consiste em aplicar algumas gotas em bolas de algodão, compressas ou
            num pano limpo de forma a permitir que o óleo vá evaporando e
            liberando o seu aroma. Esta é uma ótima forma de regular a
            intensidade do aroma, pois quando mais perto se estiver do algodão,
            compressa ou pano, mais intenso será o cheiro (SMITH; COLLINS;
            CROWTHER, 2011).
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>Procedimento:</S.TextBold>
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>1. </S.TextBold>Higienize as mãos;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>2. </S.TextBold>Oriente a parturiente a segurar o frasco
            de óleo essencial próximo ao nariz, ou pingue de 01 a 03 gotas nas
            palmas das suas mãos e oriente que passe uma mão na outra
            aproximando-as 15 cm do nariz em forma de concha. A inalação deverá
            iniciar devagar e depois ir aumentando o número de inalações e a
            intensidade como indicado abaixo:
          </S.TextBlock>
          <S.TextBlock>
            {'\u2713'} Inalações <S.TextBold>curtas</S.TextBold>: 3 a 7
            respirações seguidas, várias vezes durante o pré parto;{'\n'}
            {'\u2713'} Inalações <S.TextBold>médias</S.TextBold>: 10 a 15
            respirações seguidas, várias vezes durante a fase de dilatação;
            {'\n'}
            {'\u2713'} Inalações <S.TextBold>longas</S.TextBold>: 10 a 15
            minutos de respirações seguidas, 2 a 3 vezes na fase de transição à
            fase de expulsão. (SMITH et al, 2011).
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>3. </S.TextBold>Outra forma de utilizar aromaterapia é
            por meio do Aromatizador. Neste caso, adicione 02 ou 03 gotas do
            óleo escolhido no interior de um difusor de aromas com água em
            temperatura ambiente ou fria, até criar uma nuvem de fumaça
            aromatizada. A indicação do uso da água fria é devido ao fato de as
            moléculas dos óleos permanecerem no ar intactas durante horas. Já
            vaporização quente, sem o controle de temperatura, pode alterar a
            composição química dos óleos essenciais.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>4. </S.TextBold>Caso não tenha o difusor de aromas,
            coloque 05 a 20 gotas em uma xícara (com capacidade de
            aproximadamente 80 ml) com água fervente com temperatura máxima de
            50-60°C, até quando a água for evaporando e o aroma for liberado
            para o ar (SMITH; COLLINS; CROWTHER, 2011). Com o auxílio de um
            termômetro verifique a temperatura da água.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>5. </S.TextBold>Para definir a percepção da dor durante
            o PP, utilize a escala visual analógica (EVA) que varia de 0 a 10,
            em que o 0 é ausência de dor e 10 significa dor intensa
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>6. </S.TextBold>Realize registro da intervenção e de
            acompanhamento dos sintomas e intensidade da dor.
          </S.TextBlock>
        </S.Content>
      </S.ContentContainer>
    </ScrollView>
  );
};

export default Aromatherapy;
