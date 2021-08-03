import React from 'react';
import { Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

// @ts-ignore
import backIcon from '../../assets/icons/back.png';

const Labour: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <S.HeaderContainer>
        <S.BackButton onPress={() => navigation.navigate('Home')}>
          <Image source={backIcon} resizeMode="contain" />
        </S.BackButton>

        <S.Title>O Trabalho de parto</S.Title>
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Content>
          <S.TextBlock>
            O trabalho de parto representa o período em que ocorrem as
            contrações uterinas de forma gradativa e que tendem a evoluir e
            impulsionar o feto em direção ao colo do útero, em seguida para o
            canal vaginal até o momento do nascimento. Esse processo transcorre
            em diferentes estágios: latente, ativo, expulsivo e dequitação. O
            estágio latente, primeiro período, caracteriza-se pela presença de
            contrações uterinas dolorosas e alterações do colo do útero, que
            incluem certo grau de apagamento e dilatação mais lenta, de até 5cm.
            Considera-se trabalho de parto estabelecido quando há contrações
            regulares, com dilatação cervical progressiva a partir dos 4cm.
            Nesse momento, a gestante já deve estar admitida para a assistência
            (BRASIL, 2017; WHO, 2018).
          </S.TextBlock>
          <S.TextBlock>
            No segundo período do parto, tem-se duas fases: a passiva em que
            ocorre a dilatação total do colo sem sensação de puxo involuntário,
            com cabeça do bebê relativamente alta na pelve; e a ativa, em que há
            a dilatação total do colo, contrações de expulsão ou esforço materno
            ativo e cabeça do bebê visível. O estágio ativo compreende o período
            que se inicia com contrações uterinas regulares, grau de apagamento
            mais acentuado, com dilatação a partir de 5cm até se tornar
            completa. O período expulsivo, em geral, é identificado por meio da
            dilatação cervical total, pelos puxos maternos e rotura espontânea
            das membranas amnióticas. O terceiro período envolve desde o
            nascimento do bebê até a expulsão da placenta e membranas, processo
            de descida denominado dequitação (BRASIL, 2001; BRASIL, 2017; WHO,
            2018).
          </S.TextBlock>
          <S.TextBlock>
            Durante todo o trabalho de parto, o cuidado deve ser estabelecido
            por uma equipe médica e de enfermagem obstétrica, com acesso a
            medidas de alívio da dor, incluindo os recursos não farmacológicos,
            analgesia regional e outras medidas analgésicas. A postura calma,
            confiante e acolhedora dos profissionais é fundamental para a
            interação com a parturiente, a fim de encorajá-la e tranquilizá-la.
            Estabelecer o respeito, transmitir segurança às gestantes,
            esclarecer dúvidas, além de propiciar um ambiente agradável são
            medidas fundamentais em todo o trabalho de parto (AKBARZADEH et al.,
            2014; BRASIL, 2001; WHO, 2018).
          </S.TextBlock>
          <S.TextBlock>
            O uso de intervenções adicionais não é recomendado em situações em
            que o trabalho de parto esteja em bom andamento e caso mãe e bebê
            pertençam ao grupo de baixo risco, estejam bem e sem
            intercorrências. Entretanto, no tocante ao progresso do parto, há
            medidas que podem ser executadas em condições apropriadas para
            facilitar a parturição, como: estimulação com ocitocina, ruptura
            artificial de membranas, alívio farmacológico da dor (peridural,
            opioides, óxido nitroso), manobra ativa no terceiro período e também
            cuidados não farmacológicos para alívio da dor (BRASIL, 2017).
          </S.TextBlock>
          <S.TextBlock>
            A assistência recomendada inclui o cuidado holístico com as
            parturientes, fornecimento de informações à mulher, ao pai e
            acompanhante, estímulo à deambulação, ingestão de líquidos e
            alimentos por gestantes com poucas chances de utilização da
            anestesia geral. Além disso, deve-se oferecer cuidados que
            representam suporte físico e de apoio, entre eles medidas como
            alongamento, sentar em cadeira e posições relaxantes que são
            práticas que podem ser exercidas mediante dilatação de 3-8cm
            (AKBARZADEH et al., 2014). Outras medidas são o controle da
            frequência cardíaca fetal no intervalo de 15 a 30 minutos com uso de
            Pinard ou Doppler e toque vaginal a cada quatro horas. No segundo
            estágio, é importante possibilitar a autonomia e capacidade de
            decisão da gestante permitindo, quando possível, que a gestante
            escolha a posição durante o parto. O controle da frequência cardíaca
            fetal deve ocorrer a cada cinco minutos. Na fase final, caso
            necessário, pode ser administrada ocitocina na parturiente, e em
            seguida é feita a tração controlada do cordão umbilical. Sugere-se
            retardar o clampeamento do cordão caso não haja contraindicação
            (WHO, 2018).
          </S.TextBlock>
          <S.TextBlock>
            As gestantes devem ter acompanhantes de sua escolha durante o
            trabalho de parto e parto, não invalidando o apoio dado por alguém
            que seja de fora da rede social da mulher. Embora a presença do
            acompanhante seja um direito da mulher, destaca-se que as
            instalações de boa parte dos serviços de saúde do SUS não fornecem
            privacidade para que o acompanhante possa permanecer com a gestante
            (BRASIL, 2017).
          </S.TextBlock>
        </S.Content>
      </S.ContentContainer>
    </ScrollView>
  );
};

export default Labour;
