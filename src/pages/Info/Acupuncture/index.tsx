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
import eva from '../../../assets/eva-scale.png';

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
            As terapias chinesas acontecem por meio do estímulo nas terminações
            nervosas do corpo para obter o equilíbrio de energia vital e são
            implementadas através da aplicação de agulhas (acupuntura) ou por
            aplicação de uma pressão na pele da região (acupressão), sendo
            necessário um profissional habilitado para que essa prática seja
            realizada. Os pontos mais comuns da acupuntura são o BL32, BP6 e SP6
            ou sanyinjiao. (ALLAMEH; TEHRANI; GHASEMI, 2015; AKBARZADEH et al.,
            2014; BRASIL, 2017; HAMID; OBAYA; GAAFAR, 2013; MAFETONI; SHIMO,
            2016).
          </S.TextBlock>
          <S.TextBlock>
            O ponto SP6 está localizado na largura de aproximadamente quatro
            dedos acima da ponta do maléolo interno (osso da canela dentro do
            tornozelo) logo posterior à borda da tíbia (ALLAMEH; TEHRANI;
            GHASEMI, 2015; AKBARZADEH et al., 2014; BRASIL, 2017; HAMID; OBAYA;
            GAAFAR, 2013; MAFETONI; SHIMO, 2016).
          </S.TextBlock>
          <S.Image resizeMode="contain" source={png5} />
          <S.Legend>
            FIGURA 1 - Representação esquemática do ponto Sp6 Sanyinjiao.
          </S.Legend>
          <S.TextBlock>
            O ponto BL32 encontra-se no segundo orifício do osso sacral,
            aproximadamente um dedo indicador de distância acima da parte
            superior do vinco das nádegas enquanto o ponto BP6 está localizado
            no meridiano baço-pâncreas, a quatro dedos acima da ponta do maléolo
            interno, na parte posterior à frente da tíbia (região acima do
            tornozelo). O toque nessas áreas promove efeito de analgesia
            (AKBARZADEH et al., 2014; HAMID; OBAYA; GAAFAR, 2013; MAFETONI;
            SHIMO, 2016).
          </S.TextBlock>
          <S.Image resizeMode="contain" source={png4} />
          <S.Legend>
            FIGURA 2-Representação esquemática dos pontos BL31 Shanglia, BL32
            Ciliao e BL33 Zong Liao.
          </S.Legend>
          <S.TextBlock>
            <S.TextBold>Procedimento</S.TextBold>:
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
            ausência de dor e 10 significa dor intensa.{' '}
            <S.Link onPress={() => navigation.navigate('Scale')}>
              Clique aqui para utilizar a escala
            </S.Link>{' '}
          </S.TextBlock>
          <S.Image resizeMode="contain" source={eva} />
          <S.TextBlock>
            <S.TextBold>7. </S.TextBold>
            Realizar registro da intervenção e registro de acompanhamento dos
            sintomas e intensidade da dor.
          </S.TextBlock>

          <S.TextBlock>
            <S.TextBold>AURICULOTERAPIA</S.TextBold>: a acupressão pode ser
            empregada em diferentes áreas do corpo, como na região auricular,
            por exemplo. Na técnica de auriculoterapia, o estímulo acontece por
            meio da fixação de microesferas de cristais em determinados pontos
            da orelha. Os cristais são fixados por adesivos na orelha das
            gestantes, realizando-se uma leve pressão que irá ser mantida por
            cerca de um minuto até o momento em que esta pressão gere uma
            sensação dolorosa e ative o ponto de energia causando a liberação de
            endorfinas (MAFETONI et al., 2019).
          </S.TextBlock>
          <S.TextBlock>
            Na técnica de auriculoterapia, o estímulo acontece por meio da
            fixação de microesferas de cristais em determinados pontos da
            orelha, de acordo com o mapa auricular chinês:
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>I) </S.TextBold>
            shenmen, que predispõe o tronco cerebral e o córtex a receber,
            condicionar e codificar os reflexos auriculares;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>II) </S.TextBold>
            útero, que é indicado nas alterações ginecológicas e obstétricas, na
            indução do parto, redução do período expulsivo e redução da dor no
            pós-parto;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>III) </S.TextBold>
            área de neurastenia, indicado para o tratamento da ansiedade;
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>IV) </S.TextBold>
            endócrino, que regula as funções das glândulas de secreção endógenas
            sendo usado em distúrbios ginecológicos, entre outros. Esses pontos
            foram baseados na prática clínica e em estudos prévios ilustrados na
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
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold> I) Shen Men</S.TextBold>, que predispõe o tronco
            cerebral e o córtex a receber,{' '}
            <S.TextUnderlined>
              condicionar e codificar os reflexos auriculares
            </S.TextUnderlined>
            , tendo efeitos{' '}
            <S.TextUnderlined>sedativos, analgésicos</S.TextUnderlined>;
            <S.TextBold> II) Útero</S.TextBold>, que é indicado nas alterações
            <S.TextUnderlined>ginecológicas e obstétricas</S.TextUnderlined>, na
            indução do parto ou redução do período expulsivo e na redução da dor
            no pós-parto;
            <S.TextBold> III) </S.TextBold>área de
            <S.TextBold> Neurastenia</S.TextBold>, indicado para o tratamento da
            <S.TextUnderlined>ansiedade</S.TextUnderlined>;
            <S.TextBold> IV) Endócrino</S.TextBold>, que{' '}
            <S.TextUnderlined>
              regula as funções das glândulas de secreção endógenas
            </S.TextUnderlined>
            , sendo usado em distúrbios ginecológicos, entre outros.
          </S.TextBlock>
          <S.Image resizeMode="contain" source={png3} />
          <S.Legend>
            FIGURA 3-Localização dos pontos auriculares utilizados.
          </S.Legend>
          <S.TextBlock>
            <S.TextBold>8. </S.TextBold>Achado os pontos, fixe à pele as esferas
            de cristal polido com 1,5mm ou sementes de mostarda com fitas
            hipoalérgicas, e realize uma leve pressão que deve ser mantida por
            um minuto ou por um intervalo de tempo semelhante ou até mesmo em
            que a pressão gere uma sensação dolorosa e ative o ponto de energia,
            causando liberação de endorfinas.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>9. </S.TextBold>Para definir a percepção da dor durante
            o TP, utilize a escala visual analógica (EVA) que varia de 0 a 10,
            em que o 0 é ausência de dor e 10 significa dor intensa.{' '}
            <S.Link onPress={() => navigation.navigate('Scale')}>
              Clique aqui para utilizar a escala
            </S.Link>
          </S.TextBlock>
          <S.Image resizeMode="contain" source={eva} />
          <S.TextBlock>
            <S.TextBold>10. </S.TextBold>Realizar registro da intervenção e
            registro de acompanhamento dos sintomas e intensidade da dor.
          </S.TextBlock>
        </S.Content>
      </S.ContentContainer>
    </ScrollView>
  );
};

export default Acupuncture;
