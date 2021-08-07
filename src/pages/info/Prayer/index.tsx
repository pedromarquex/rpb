import React from 'react';
import { Image, ScrollView, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from '../../_styles/info/styles';

import backIcon from '../../../assets/icons/back.png';
import zito from '../../../assets/PNGS-14.png';

const Prayer: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <S.HeaderContainer>
        <S.BackButton onPress={() => navigation.navigate('Home')}>
          <Image source={backIcon} resizeMode="contain" />
        </S.BackButton>

        <S.TitleContainer>
          <S.Title>Oração</S.Title>
          <S.TitleImage source={zito} resizeMode="center" />
        </S.TitleContainer>
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Content>
          <S.TextBlock>
            A <S.TextBold>oração</S.TextBold> envolve os aspectos emocionais,
            espirituais e culturais do ser humano e pode gerar efeitos positivos
            no parto, estimulando ânimo e disposição. Algumas gestantes costumam
            obter conforto e força por meio de textos sagrados e orações lidas
            por seus companheiros durante o trabalho de parto, como um suporte
            espiritual (WHO, 2018).
          </S.TextBlock>
          <S.TextBlock>
            Algumas orações podem ser rezadas neste momento como a de Nossa
            Senhora do Bom Parto, onde, ao longo dos anos, inúmeras famílias e
            principalmente gestantes invocam a proteção da virgem.:
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>Católica</S.TextBold>
            {'\n'}
            "Maria conhece todas as nossas necessidades, mágoas, tristezas,
            misérias e esperanças. Interessa-se por cada um de seus filhos, roga
            por cada um com tanto ardor como se não tivera outro".{'\n'}Ò Maria
            Santíssima, vós, por um privilégio especial de Deus, fostes isenta
            da mancha do pecado original, e devido a este privilégio não
            sofrestes os incômodos da maternidade, nem ao tempo da gravidez e
            nem ao parto; mas compreendeis perfeitamente as angústias e aflições
            das pobres mães que esperam um filho, especialmente nas incertezas
            do sucesso ou insucesso do parto.
            {'\n\n'}Olhai para mim, vossa serva, que na aproximação do parto,
            sofro angústias e incertezas. Dai-me a graça de ter um parto feliz.
            Fazei que meu bebê nasça com saúde, forte e perfeito. Eu vos prometo
            orientar meu filho sempre pelo caminho certo, o caminho que o vosso
            filho, Jesus, traçou para todos os homens, o caminho do bem. Virgem,
            Mãe do Menino Jesus, agora me sinto mais calma e mais tranquila
            porque já sinto a vossa maternal proteção. Nossa Senhora do Bom
            Parto, rogai por todas as gestantes. Amém.{' '}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=xHdJ7N4etoI')
              }
            >
              (https://www.youtube.com/watch?v=xHdJ7N4etoI)
            </S.Link>
          </S.TextBlock>
          <S.TextBlock>
            Tendo em vista a grande diversidade religiosa no Brasil, sugerimos
            abaixo orações religiosas <S.TextBold>evangélica</S.TextBold> e
            <S.TextBold> espirita</S.TextBold>, caso a gestante não se enquadre
            em nenhuma das religiões acima, solicitar que a mesma possa realizar
            uma oração pessoal, dessa forma utilize o método da musicoterapia
            para que se possa criar um ambiente propicio a tal ato, criando
            assim uma sinestesia com sagrado.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>Evangélica</S.TextBold>
            {'\n'}
            Senhor, abençoe todas as gestantes e também as mulheres que têm o
            sonho de um dia ser mãe. Aceitei esta gravidez com alegria e
            esperança. Sei que o seu poder está agindo em meu ventre, onde um
            novo ser se transforma a cada dia. Peço que envie todo o seu amor e
            proteção para essa criança, que em breve me chamará de mãe. Envolva
            a nós dois com todo o amor e ternura do Teu olhar. Que eu possa me
            sentir sempre abraçada e protegida de todas as aflições, pois sei
            que sempre estás ao meu lado. Peço que me dê serenidade e que
            proteja o meu futuro ao lado da criança que está para chegar ao
            mundo.{' '}
            <S.Link
              onPress={() =>
                Linking.openURL(
                  'https://www.gestacaobebe.com.br/oracao-da-gestante/'
                )
              }
            >
              (https://www.gestacaobebe.com.br/oracao-da-gestante/)
            </S.Link>
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>Espírita</S.TextBold>
            {'\n'}
            Espírito que vos encarnastes como nosso filho, sede bem-vindo entre
            nós. Agradecemos a Deus Todo-Poderoso, pela benção que nos concedeu.
            É um depósito que nos confiou, e do qual teremos de prestar contas
            um dia. Se ele pertence à nova geração de Bons Espíritos, que devem
            povoar a Terra, obrigado, Senhor, por mais esse favor! Se é uma alma
            imperfeita, nosso dever é o de ajudá-la no progresso, em direção ao
            bem, por nossos conselhos e nossos bons exemplos. Se cair no mal por
            nossa culpa, teremos de responder por isso perante vós, porque não
            teremos cumprido nossa missão para com ele. Senhor, amparai-nos no
            cumprimento da nossa tarefa, e dai-nos a força e a vontade de bem
            realizá-la. Se esta criança tiver de ser um motivo de provas para
            nós, seja feita a vossa vontade! Bons Espíritos, que viestes
            presidir ao seu nascimento e que deveis acompanhá-la durante a vida,
            jamais a abandoneis. Afastai os maus Espíritos que tentarem
            induzi-la ao mal e amenizai toda dor do momento do parto . Dai-lhe a
            força de resistir às suas sugestões, e a coragem de sofrer com
            paciência e resignação as provas que a esperam na Terra.{' '}
            <S.Link
              onPress={() =>
                Linking.openURL(
                  'https://evangelhoespirita.wordpress.com/coletanea-de-preces%20espiritas/3-preces-pelos-outros/vi-prece-para-um-nascimento/'
                )
              }
            >
              (https://evangelhoespirita.wordpress.com/coletanea-de-preces
              espiritas/3-preces-pelos-outros/vi-prece-para-um-nascimento/)
            </S.Link>
          </S.TextBlock>
          <S.TextBlock>
            Caso a parturiente não queria rezar nenhuma das citadas, pedir que a
            mesma possa rezar uma oração pessoal que faça com que ela sinta
            segurança e paz interior para passar pelo momento de trabalho de
            parto.
          </S.TextBlock>
        </S.Content>
      </S.ContentContainer>
    </ScrollView>
  );
};

export default Prayer;
