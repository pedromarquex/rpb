import React from 'react';
import { Image, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from '../_styles/info/styles';

import backIcon from '../../../assets/icons/back.png';
import png3 from '../../../assets/PNGS-3.png';
import png4 from '../../../assets/PNGS-4.png';
import png5 from '../../../assets/PNGS-5.png';
import zito from '../../../assets/PNGS-15.png';
import acunpucture from '../../../assets/PNGS-6.png';

const Acupuncture: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <S.HeaderContainer>
        <S.BackButton onPress={() => navigation.navigate('Home')}>
          <Image source={backIcon} resizeMode="contain" />
        </S.BackButton>

        <S.TitleContainer>
          <S.Title>Acupuntura e acupressão</S.Title>
          <S.TitleImage source={zito} resizeMode="center" />
        </S.TitleContainer>
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Content>
          <S.Image
            resizeMode="contain"
            source={acunpucture}
            style={{ marginBottom: 30 }}
          />
          <S.TextBlock>
            Terapias chinesas que estimulam as terminações nervosas do corpo
            para obter o equilíbrio da energia vital. Esse estímulo é aplicado
            em determinadas áreas do corpo, conhecidas como pontos de energia,
            por meio da aplicação de agulhas (acupuntura), mais ultilizadas
            durante a gestação, ou de pressão na pele da região (acupressão),
            mais ultilizadas no período pré parto. A realização da
            acupuntura/acupressão gera a diminuição da dor por meio da
            estabilidade da energia corporal e também pela liberação de
            endorfinas no Sistema Nervoso Central. Além disso, essa prática
            quando realizada em pontos estratégicos pode influenciar na descida
            do bebê para a região pélvica (ALLAMEH; TEHRANI; GHASEMI, 2015;
            BRASIL, 2001; HAMID; OBAYA; GAAFAR, 2013; MAFETONI; SHIMO, 2016). Há
            indícios de que a acupressão pode ser mais eficaz no período de
            dilatação de até 8cm e mediante apresentação feto-cefálica alta
            (MAFETONI; SHIMO, 2016). É importante ressaltar que essa técnica
            necessita de um profissional habilitado para realizá-lo (BRASIL,
            2017).
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>Procedimento</S.TextBold>: A técnica de acupressão e
            suas variações podem ser aplicadas em diferentes áreas do corpo
            promovendo efeito de analgesia.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>1. </S.TextBold>Higienizar as mãos
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>2. </S.TextBold>
            Avalie e escolha qual a região você irá fazer a técnica
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>3. </S.TextBold>
            Posicione a paciente em decubito dorsal para o ponto BL32, e em
            decubito lateral para o ponto SP6 ou sanyinjiao. (Deixar que a
            parturiente possa encontrar uma posição confortavel, desde que a
            mesma obedeça o posicionamento ideal).
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>4. </S.TextBold>
            Localize os ponto SP6, na largura de aproximadamente quatro dedos
            acima da ponta do maléolo interno, lado posterior à borda tibial. Já
            o ponto BL32 encontra-se no segundo orifício do osso sacral,
            aproximadamente um dedo indicador de distância acima da parte
            superior do vinco das nádegas.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>5. </S.TextBold>
            Aperte o ponto escolhido e fique pressionando‐o repetidamente, para
            tonificar em movimento circular no sentido horário, durante pelo
            menos 3 minutos.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>6. </S.TextBold>
            Para definir a percepção da dor durante o trabalho de parto, utilize
            a escala visual analógica (EVA) que varia de 0 a 10, em que o 0 é
            ausência de dor e 10 significa dor intensa.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>7. </S.TextBold>
            Realizar registro da intervenção e registro de acompanhamento dos
            sintomas e intensidade da dor.
          </S.TextBlock>
          <S.TextBlock>
            (AKBARZADEH et al., 2014; HAMID; OBAYA; GAAFAR, 2013; MAFETONI;
            SHIMO, 2016).
          </S.TextBlock>

          <S.Image resizeMode="contain" source={png5} />
          <S.Legend>
            FIGURA 1 - Representação esquemática do ponto Sp6 Sanyinjiao.
          </S.Legend>

          <S.Image resizeMode="contain" source={png4} />
          <S.Legend>
            FIGURA 2-Representação esquemática dos pontos BL31 Shanglia, BL32
            Ciliao e BL33 Zong Liao.
          </S.Legend>

          <S.TextBlock>
            Na técnica de auriculoterapia, o estímulo acontece por meio da
            fixação de microesferas de cristais em determinados pontos da
            orelha, de acordo com o mapa auricular chinês: I) shenmen, que
            predispõe o tronco cerebral e o córtex a receber, condicionar e
            codificar os reflexos auriculares; II) útero, que é indicado nas
            alterações ginecológicas e obstétricas, na indução do parto, redução
            do período expulsivo e redução da dor no pós-parto; III ) área de
            neurastenia, indicado para o tratamento da ansiedade; IV) endócrino,
            que regula as funções das glândulas de secreção endógenas sendo
            usado em distúrbios ginecológicos, entre outros. Esses pontos foram
            baseados na prática clínica e em estudos prévios ilustrados na
            figura abaixo (MAFETONI et al., 2019).
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>Procedimento:</S.TextBold>
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>1. </S.TextBold>Higienize as mãos.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>2. </S.TextBold>Posicione a paciente em decúbito lateral
            ou sentada;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>3. </S.TextBold>Observe o pavilhão auricular para
            conhecer onde será o ponto na qual será realizada o procedimento.
            Essa fase é chamada de inspeção e além de escolher tal local de
            aplicação ela é importante pois objetiva também encontrar alguma
            patologia na área auricular.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>4. </S.TextBold>Realize antissepsia previamente, com
            álcool etílico 70%, no pavilhão auricular.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>5. </S.TextBold>Faça o diagnóstico por meio da palpação
            com o auxílio de uma sonda ou a caneta de detecção através da
            pressão para identificação de pontos sensíveis auriculares.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>6. </S.TextBold>Utilize a caneta de palpação para
            pressionar os pontos auriculares e à observação da marca
            pressionada.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>7. </S.TextBold>Tenha como referência os pontos:
            <S.TextBold> I) Shen Men</S.TextBold>, que predispõe o tronco
            cerebral e o córtex a receber, condicionar e codificar os reflexos
            auriculares, tendo efeitos sedativos, analgésicos;
            <S.TextBold> II) Útero</S.TextBold>, que é indicado nas alterações
            ginecológicas e obstétricas, na indução do parto ou redução do
            período expulsivo e na redução da dor no pós-parto;
            <S.TextBold> III )</S.TextBold> área de
            <S.TextBold> Neurastenia</S.TextBold>, indicado para o tratamento da
            ansiedade; <S.TextBold> IV) Endócrino</S.TextBold>, que regula as
            funções das glândulas de secreção endógenas, sendo usado em
            distúrbios ginecológicos, entre outros.
          </S.TextBlock>
          <S.Image resizeMode="contain" source={png3} />
          <S.Legend>
            FIGURA 3-Localização dos pontos auriculares utilizados.
          </S.Legend>
          <S.TextBlock>
            <S.TextBold>8. </S.TextBold>Achado os pontos acima utilize esferas
            de cristal polido com 1,5mm ou sementes de mostarda, aderidas à pele
            com fitas hipoalérgicas
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>9. </S.TextBold>Faça a fixação dos cristais ou das
            sementes e realize uma leve pressão que deve ser mantida por um
            minuto ou por um intervalo de tempo semelhante ou até mesmo em que a
            pressão gere uma sensação dolorosa e ative o ponto de energia,
            causando liberação de endorfinas.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>10. </S.TextBold>Para definir a percepção da dor durante
            o trabalho de parto, utilize a escala visual analógica (EVA) que
            varia de 0 a 10, em que o 0 é ausência de dor e 10 significa dor
            intensa.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>11. </S.TextBold>Realizar registro da intervenção e
            registro de acompanhamento dos sintomas e intensidade da dor.
            (MAFETONI et al., 2019).
          </S.TextBlock>
        </S.Content>
      </S.ContentContainer>
    </ScrollView>
  );
};

export default Acupuncture;
