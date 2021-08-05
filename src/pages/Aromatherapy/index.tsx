import React from 'react';
import { Image, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from '../_styles/info/styles';

import backIcon from '../../assets/icons/back.png';
import zito from '../../assets/PNGS-16.png';

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
          <S.TextBlock>
            Consiste no emprego de óleos essenciais, aromas e fragrâncias que
            estimulam sensações de bem-estar e alívio de dores. A terapia se
            baseia no uso de essências que advém das plantas e de fórmulas
            naturais. O efeito analgésico será gerado à medida que o cheiro do
            aroma ativar as células nervosas olfatórias por meio da liberação de
            neurotransmissores (BRASIL, 2019).
          </S.TextBlock>
          <S.TextBlock>
            Os métodos de aplicação mais comum na prática da aromaterapia são
            pulverização e difusão aérea, inalação, compressas, banhos e
            massagens. O modo mais adequado a ser empregado é definido de acordo
            com a prescrição do profissional especialista, levando em conta a
            substância a ser utilizada. Há também a possibilidade de tratamento
            através de bochechos e gargarejos e ingestão (via oral) (CORAZZA,
            2018; PRICE, 2019).
          </S.TextBlock>
          <S.TextBlock>
            O uso de elementos como lavanda associada à camomila, gengibre,
            capim-limão, por exemplo, também possuem certa efetividade. A
            lavanda auxilia no alívio da dor, pois ajuda a parturiente a se
            acalmar e focar no trabalho de parto (BRASIL, 2019; POLLARD, 2008;
            SMITH et al., 2011; KAVIANI et al., 2014).
          </S.TextBlock>
          <S.TextBlock>
            Os óleos essenciais mais utilizados em aromaterapia para o alívio da
            dor durante o trabalho de parto são Sálvia esclaréia (Salvia
            sclarea) e Camomila Romana (Anthemis nobilis) enquanto os de Lavanda
            (L. angustifolia), Rosa (R. damascena) e Olíbano (Boswellia sp.) são
            mais efetivos para o alívio do medo e ansiedade. O óleo de
            Hortelã-pimenta (M. piperita) mostrou-se eficaz para o alívio da
            náusea e vômitos, muitas vezes causado por efeitos colaterais de
            outros medicamentos. Além disso, óleos essenciais de Eucalipto
            (Eucalyptus globulus), Limão (Citrus limon) e Mandarina (Citrus
            retiulata) pode aumentar a sensação de bem-estar e os sentimentos
            positivos em relação ao processo do parto.
          </S.TextBlock>
          <S.TextBlock>
            Os óleos de Jasmim (Jasminum) e Lavanda (lavandula Augustifólia)
            oferecem vantagens ligeiramente diferentes, embora algumas de suas
            propriedades coincidam. Apesar de serem ambos analgésicos, o de
            Jasmim é um pouco mais eficaz para intensificar as contrações,
            abreviando, assim, o trabalho de parto (PRICE, 2019).
          </S.TextBlock>
          <S.TextBlock>
            O óleo vegetal pode ser usado com gotas de lavanda e ser aplicado no
            corpo por meio de massagem em adultos com 3 a 5 gotas (BRASIL, 2019;
            POLLARD, 2008; SMITH et al., 2011; KAVIANI et al., 2014).
          </S.TextBlock>
          <S.TextBlock>
            É importante saber que alguns óleos essenciais (Casca de Canela,
            Canela-Cássia, Cravo, Capim-Limão, Gerânio, Orégano) sempre devem
            ser diluídos em uma boa base, como um óleo de amêndoas de qualidade
            (puro e sem perfume) ou o óleo de rosa mosqueta antes da aplicação
            tópica devido às suas fortes propriedades químicas (SMITH, 2011). A
            solução é preparada em um frasco de vidro escuro diluindo 30 gotas
            de óleo essencial em 10 ml de óleo vegetal. Especialistas recomendam
            que seja utilizada um frasco de vidro escuro do tipo “conta gotas”,
            pois pode ser compartilhado evitando o desperdício de material, além
            de ser mais higiênico prevenindo até mesmo infecções cruzadas. O
            frasco do tipo Roll On é de uso somente individual.
          </S.TextBlock>
          <S.TextBlock>
            Deve-se usar pelos óleos essenciais 100% puros extraídos das plantas
            (cuidado com essências sintéticas que são meros perfumes e não
            possuem nenhum efeito terapêutico). Bons fornecedores de óleos
            essenciais geralmente apresentam na embalagem o nome botânico da
            planta da qual foi extraído o óleo. Eles devem ser armazenados em
            vidros escuros e bem vedados e que possuem um aroma bastante
            “concentrado”, lembrando muito o cheiro da própria planta (SMITH et
            al., 2011).
          </S.TextBlock>
          <S.TextBlock>
            Incensos de sálvia podem encurtar a duração do primeiro e segundo
            estágios do trabalho de parto e após 30 minutos de aplicação pode
            aliviar a intensidade da dor (BRASIL, 2019; POLLARD, 2008; SMITH et
            al., 2011; KAVIANI et al., 2014).
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>Procedimento:</S.TextBold> {'\n'}A principal e mais
            benéfica forma de utilizar os óleos essenciais é a inalação. No
            entanto, eles podem ser usados de outras formas, adequando-se ao
            problema a tratar ou ao estilo de vida de cada parturiente.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>1. </S.TextBold>Higienização das mãos.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>2. </S.TextBold>Oriente que a parturiente possa segurar
            o frasco de óleo essencial próximo ao nariz ou pingue de 1 a 3 gotas
            nas palmas das suas mãos e oriente que passe uma mão na outra e
            aproxime a 15 cm do nariz em forma de concha. A inalação deverá
            iniciar leve e depois ir aumentando o número de inalações e a
            intensidade como indicado abaixo:
          </S.TextBlock>
          <S.TextBlock>
            {'\t\t\t\t'}
            {'\u2713'} Inalações <S.TextBold>curtas</S.TextBold>: 3 a 7
            respirações seguidas, várias vezes durante o pré parto;{'\n'}
            {'\t\t\t\t'}
            {'\u2713'} Inalações <S.TextBold>médias</S.TextBold>: 10 a 15
            respirações seguidas, várias vezes durante a fase de dilatação;
            {'\n'}
            {'\t\t\t\t'}
            {'\u2713'} Inalações <S.TextBold>longas</S.TextBold>: 10 a 15
            minutos de respirações seguidas, 2 a 3 vezes na fase de transição à
            fase de expulsão. (SMITH et al, 2011).
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>3. </S.TextBold>Outra forma de se utilizar aromaterapia
            é por meio do Aromatizador. Neste caso, adicione 2 ou 3 gotas do
            óleo escolhido no interior de um difusor de aromas com água em
            temperatura ambiente ou fria, até criar uma nuvem de fumaça
            aromatizada. A indicação do uso da água fria é que as moléculas dos
            óleos permanecem no ar intactas durante horas, já a vaporização
            quente, sem o controle de temperatura, pode alterar a composição
            química dos óleos essenciais.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>4. </S.TextBold>Caso não tenha o difusor de aromas
            coloque 5 a 20 as gotas numa xícara com água fervente com
            temperatura máxima de 50-60°C.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>5. </S.TextBold>Com o auxílio de um termômetro verifique
            a temperatura da água.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>6. </S.TextBold>Adicione de 5 a 20 gotas na água em uma
            xícara até quando a água for evaporando e o aroma é liberado para o
            ar (SMITH et al., 2011).
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>7. </S.TextBold>Para definir a percepção da dor durante
            o trabalho de parto, utilize a escala visual analógica (EVA) que
            varia de 0 a 10, em que o 0 é ausência de dor e 10 significa dor
            intensa.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>8. </S.TextBold>Realizar registro da intervenção e
            registro de acompanhamento dos sintomas e intensidade da dor.
          </S.TextBlock>
          <S.TextBlock>
            A evaporização, outra forma de se utilizar a aromaterapia, consiste
            em aplicar algumas gotas em bolas de algodão, compressas ou num pano
            limpo de forma a permitir que o óleo vá evaporando e liberando o seu
            aroma. Esta é uma ótima forma de regular a intensidade do aroma,
            pois quando mais perto se estiver do pano, mais intenso será o
            cheiro (SMITH et al., 2011).
          </S.TextBlock>
        </S.Content>
      </S.ContentContainer>
    </ScrollView>
  );
};

export default Aromatherapy;
