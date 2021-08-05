import React from 'react';
import { Image, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from '../_styles/info/styles';

import backIcon from '../../assets/icons/back.png';
import png7 from '../../assets/PNGS-7.png';
import png9 from '../../assets/PNGS-9.png';
import zito from '../../assets/PNGS-15.png';

const Thermotherapy: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <S.HeaderContainer>
        <S.BackButton onPress={() => navigation.navigate('Home')}>
          <Image source={backIcon} resizeMode="contain" />
        </S.BackButton>

        <S.TitleContainer>
          <S.Title>Terapias térmicas{'\n'}ou termoterapia</S.Title>
          <S.TitleImage source={zito} resizeMode="center" />
        </S.TitleContainer>
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Content>
          <S.TextBlock>
            Os cuidados que envolvem as propriedades térmicas são positivos para
            o controle da dor devido sua capacidade de promover relaxamento dos
            músculos pelo aumento do fluxo sanguíneo que vai ocorrer a partir da
            dilatação dos vasos. O uso de compressas quentes e banhos quentes a
            37ºC são exemplos aplicáveis. Banhos quentes de imersão podem
            alterar os sinais vitais maternos, como o pulso e a temperatura
            corporal, o que pode, de alguma forma, gerar efeitos sob o feto.
            Portanto, essa prática deve ser aplicada de forma cautelosa para não
            afetar negativamente a evolução do parto. Acredita-se que tal
            prática é positiva no primeiro estágio do parto, mas também pode ser
            aplicada na região lombar e perineal durante o período expulsivo
            (GAYESKI; BRÜGGEMANN, 2010; MASCARENHAS et al., 2019).
          </S.TextBlock>
          <S.TextBlock>
            Os banhos devem ser oferecidos às parturientes sempre que possível,
            pois produzem sensação de relaxamento físico e psicológico. Não há
            um prazo determinado para a gestante permanecer no chuveiro, ela
            pode ficar o tempo que quiser e que se sentir confortável. Caso o
            centro obstétrico disponha de banheira, o banho de imersão na água
            também é eficiente e deve ser promovido durante a fase ativa do
            parto, para não retardar o processo de parturição. Recomenda-se que
            seja empregado a partir dos 4cm de dilatação cervical. A imersão
            durante o primeiro período diminui a necessidade de analgesia
            (GAYESKI; BRÜGGEMANN, 2010; BRASIL, 2016b; BRASIL, 2019; BRASIL,
            2018). A associação entre banho quente com a bola suíça pode reduzir
            significantemente a intensidade da dor (BARBIERI et al., 2013;
            FARAHMAND et al., 2020; WHO, 2018).
          </S.TextBlock>
          <S.TextBlock>
            Compressas quentes e úmidas produzem vasodilatação e são usados como
            sedativos, relaxantes musculares e analgésicos. As compressas
            quentes secas são muito úteis no tratamento de espasmos musculares e
            em processos dolorosos muito localizados, pois produzem sedação e
            ajudam a reabsorção de produtos anti-inflamatórios (MASCARENHAS et
            al., 2019).
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>Procedimento: </S.TextBold>
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>1. </S.TextBold>Prepare a sala de parto e o banheiro com
            o objetivo de criar um bom ambiente, mantendo as luzes baixas e uma
            música suave de acordo com o gosto da parturiente. As roupas de
            banho devem favorecer o conforto da parturiente. Pode usar suas
            próprias roupas ou ficar despida, a depender da preferência da
            mulher.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>2. </S.TextBold>Certifique que a parturiente não tenha
            histórico de hipotensão, pois esse método causa vasodilatação dos
            vasos sanguíneos e consequentemente poderá acelerar o processo
            hipotenso.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>3. </S.TextBold>Realize a higienização das mãos.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>4. </S.TextBold>Realize o toque vaginal (enfermeiro ou
            médico obstetra) para observar a dilatação cervical, a mesma deve
            estar entre 4 a 5 cm.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>5. </S.TextBold>Primeiramente aplica-se o banho de
            imersão, necessário que a temperatura da água esteja em torno de 37
            a 38° C, sendo importante que a paciente permaneça, no mínimo, 20
            minutos na banheira.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>6. </S.TextBold>Adicionar óleos essenciais na banheira
            pode ser uma alternativa a mais para o relaxamento da parturiente. O
            produto deve ser adicionado no momento que a mesma já esteja dentro
            da banheira, colocando em média 15 a 20 gotas.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>7. </S.TextBold>A presença do pai no momento é
            importante, pois pode trazer mais segurança a mãe e facilita o
            processo de apoio, ficando assim facultada ao caso a participação ou
            não do ato.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>8. </S.TextBold>Após o banho de imersão, posicione a
            parturiente em uma cadeira ou na bola suíça.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>9. </S.TextBold>Ligue o chuveiro e regule a temperatura
            em torno de 37 a 39 ºC, com ajuda de um termômetro, sempre
            respeitando a sensibilidade da paciente em relação a temperatura da
            água e a intensidade do jato de água, recomenda-se que o jato tenha
            que ficar de leve a moderada intensidade por um período de no mínimo
            20minutos.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>10. </S.TextBold>Com a parturiente enxuta, direcione e
            auxilie a parturiente até a sala de parto.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>11. </S.TextBold>Realize novamente o toque vaginal
            (enfermeiro ou médico obstetra ) para observar a dilatação cervical
            que deve estar acima de 4 a 5 cm. Caso não esteja e se for da
            vontade da paciente, repita todo o processo anterior.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>12. </S.TextBold>Se a dilatação estiver acima de 5 cm
            aplique compressas quentes, por um intervalo curto de tempo, em
            média de 2 a 5 minutos, considerando que a aplicação deve ser rápida
            porque ativa a sensibilidade e em seguida gera o efeito analgésico
            na gestante.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>13. </S.TextBold>Coloque uma toalha do tipo microfibra
            ou bolsa térmica nas regiões onde a parturiente esteja sentindo mais
            dor, sempre obedecendo o tempo acima já descrito.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>14. </S.TextBold>Para definir a percepção da dor durante
            o trabalho de parto, utilize a escala visual analógica (EVA) que
            varia de 0 a 10, em que o 0 é ausência de dor e 10 significa dor
            intensa.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>15. </S.TextBold>Realizar registro da intervenção e
            registro de acompanhamento dos sintomas e intensidade da dor
          </S.TextBlock>
          <S.TextBlock>
            (BARBIERI et al., 2013; FARAHMAND et al., 2020; WHO, 2018). (2010;
            BRASIL, 2016b; BRASIL, 2019; BRASIL, 2018)
          </S.TextBlock>
          <S.Image resizeMode="contain" source={png7} />
          <S.Legend>
            FIGURA 5- Representação esquemática do banho de banheira como
            alternativa de termoterapia
          </S.Legend>
          <S.Image resizeMode="contain" source={png9} />
          <S.Legend>
            FIGURA 6- Representação esquemática do banho de chuveiro como
            alternativa de termoterapia
          </S.Legend>
        </S.Content>
      </S.ContentContainer>
    </ScrollView>
  );
};

export default Thermotherapy;
