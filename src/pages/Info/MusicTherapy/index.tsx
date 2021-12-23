import React from 'react';
import { Image, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from '../_styles/info/styles';

import backIcon from '../../../assets/icons/back.png';
import png11 from '../../../assets/PNGS-11.png';
import zito from '../../../assets/PNGS-14.png';
import yoga from '../../../assets/PNGS-11.png';

const MusicTherapy: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <S.HeaderContainer>
        <S.BackButton onPress={() => navigation.navigate('Home')}>
          <Image source={backIcon} resizeMode="contain" />
        </S.BackButton>

        <S.TitleContainer>
          <S.Title>Musicoterapia e{'\n'}Audionalgesia</S.Title>
          <S.TitleImage source={zito} resizeMode="center" />
        </S.TitleContainer>
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Content>
          <S.TextBlock>
            A <S.TextBold>musicoterapia </S.TextBold>e{' '}
            <S.TextBold>audioanalgesia </S.TextBold> correspondem a utilização
            de músicas e sons para prática terapêutica a fim de produzir efeitos
            analgésicos. Apesar de serem necessárias mais evidências que
            comprovem a eficiência durante o TP (BRASIL, 2016b; SMITH et al.,
            2006), uma música pode ajudar a relaxar e entrar em contato com os
            sentimentos e sensações.
          </S.TextBlock>
          <S.TextBlock>
            As gestantes podem escolher as músicas segundo seu desejo, para que
            a terapia propicie bons resultados. Abaixo segue o link de sugestões
            de músicas que podem ser utilizadas no momento do pré-parto e parto
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>1. Reconhecimento – Isadora Canto</S.TextBold> {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=sLnuRB07Ckc')
              }
            >
              https://www.youtube.com/watch?v=sLnuRB07Ckc
            </S.Link>
            {'\n'}Conhecida nas rodas de gestantes e frequentadores do mundo
            humanizado, a Isadora Canto fala com a nossa alma. E este é
            praticamente o hino do nascimento com respeito.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>2. Espatódea – Nando Reis</S.TextBold> {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=5ixcoTs3t_g')
              }
            >
              https://www.youtube.com/watch?v=5ixcoTs3t_g
            </S.Link>
            {'\n'}A doçura na voz do Nando Reis sozinha já seria suficiente. Mas
            ele segue nos emocionando: "não sei se o mundo é bom, mas ele ficou
            melhor quando você chegou".
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>3. Anunciação – Alceu Valença</S.TextBold> {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=PrdBUorYboU')
              }
            >
              https://www.youtube.com/watch?v=PrdBUorYboU
            </S.Link>
            {'\n'}“Tu vens, tu vens, e eu já escuto os teus sinais”. Deixe Alceu
            Valença embalar o seu parto e sinta seu filho chegando com toda a
            entrega que essa música convida.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>4. Paciência – Lenine</S.TextBold> {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=bjtl2gbolSI')
              }
            >
              https://www.youtube.com/watch?v=bjtl2gbolSI
            </S.Link>
            {'\n'}Para lembrar que cada coisa chega na sua hora, nada está
            adiantado ou atrasado. Calma, respira e espera.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>5. Vilarejo – Marisa Monte</S.TextBold> {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=r7qrFD19c_Y')
              }
            >
              https://www.youtube.com/watch?v=r7qrFD19c_Y
            </S.Link>
            {'\n'}“Peitos fartos, filhos fortes, sonhos semeando o mundo real”,
            Marisa Monte canta sobre a casa cheia de amor que está à espera da
            chegada. Maravilhosa!
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>6. Vieste – Ivan Lins</S.TextBold> {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=d2zNBq1zA0I')
              }
            >
              https://www.youtube.com/watch?v=d2zNBq1zA0I
            </S.Link>
            {'\n'}Mais uma para lembrar que tudo acontece na hora que tem que
            ser e celebrar quem está por chegar.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>7. Tudo Diferente – Maria Gadu</S.TextBold> {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=xzzuztLhRXw')
              }
            >
              https://www.youtube.com/watch?v=xzzuztLhRXw
            </S.Link>
            {'\n'}“Todas as trilhas caminham pra gente se achar” é pra fazer
            qualquer parturiente se encher de força e amor pelo que está
            acontecendo!
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>8. As Coisas Tão Mais Lindas – Cássia Eller</S.TextBold>{' '}
            {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=6Y2JUmLp1WQ')
              }
            >
              https://www.youtube.com/watch?v=6Y2JUmLp1WQ
            </S.Link>
            {'\n'}A maravilhosa Cássia Eller deixa também qualquer parturiente
            cheia de força, cantando sobre o quão bem-vindo (e lindo!) é o
            “amorzinho” que está chegando.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>
              9. Pra Você Guardei O Amor – Nando Reis e Ana Cañas
            </S.TextBold>{' '}
            {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=sB8_zYjxSGg')
              }
            >
              https://www.youtube.com/watch?v=sB8_zYjxSGg
            </S.Link>
            {'\n'}Olha o grande Nando Reis aí de novo! Muito bem acompanhado de
            Ana Cañas, embala o trabalho de parto de um jeito incrível!
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>10. Nascer – Isadora Canto</S.TextBold> {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=0U9OTTyKLwY')
              }
            >
              https://www.youtube.com/watch?v=0U9OTTyKLwY
            </S.Link>
            {'\n'}Olha ela aí de novo! Nossa amada chama o bebê para o lado de
            cá e sua voz macia completa o clima de expectativa e promessa de
            algo bom.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>11. Debaixo D’água – Maria Bethânia</S.TextBold> {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=wsGfJf6bqxY')
              }
            >
              https://www.youtube.com/watch?v=wsGfJf6bqxY
            </S.Link>
            {'\n'}Trilha clássica dos partos, essa canção é forte, profunda,
            fundamental. Impossível não se emocionar com a letra que fala do
            ponto do vista do bebê e sua vivência com a água.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>12. Acalanto – Adriana Calcanhoto</S.TextBold> {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=MN1IarWKQDo')
              }
            >
              https://www.youtube.com/watch?v=MN1IarWKQDo
            </S.Link>
            {'\n'}Pra embalar e cantar pro bebê do lado de dentro (ou de fora!).
            Uma delícia!
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>13. Só Tinha Que Ser Com Você – Elis Regina</S.TextBold>{' '}
            {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=vBVhRyAQNhA')
              }
            >
              https://www.youtube.com/watch?v=vBVhRyAQNhA
            </S.Link>
            {'\n'}“Só eu sei quando amor eu guardei, sem saber que era só pra
            você” – verdadeiro e totalmente apropriado pra esse que você nem viu
            ainda, mas já ama demais!
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>
              14. O Que Você Quer Saber De Verdade – Marisa Monte
            </S.TextBold>{' '}
            {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=wk35pc4yWX0')
              }
            >
              https://www.youtube.com/watch?v=wk35pc4yWX0
            </S.Link>
            {'\n'}Essa é especial pro momento que a força parece ter acabado e
            você acha que não aguenta mais: liberte-se, entregue-se! “Faça a sua
            dor dançar, atenção para escutar esse movimento que traz paz”.
            Coragem, você consegue!
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>15. Beautiful Boy – John Lenon</S.TextBold> {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=wk35pc4yWX0')
              }
            >
              https://www.youtube.com/watch?v=wk35pc4yWX0
            </S.Link>
            {'\n'}Vai ter um menino? Escute esse clássico de John Lennon pra
            embalar seu amor!
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>16. She – Elvis Costello</S.TextBold> {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=VL9KxBE0_rY')
              }
            >
              https://www.youtube.com/watch?v=VL9KxBE0_rY
            </S.Link>
            {'\n'}Se for ter uma menina, essa maravilhosa também vai te
            emocionar muito.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>17. Better Together – Jack Johnson</S.TextBold> {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=nuLr8LP4OD8')
              }
            >
              https://www.youtube.com/watch?v=nuLr8LP4OD8
            </S.Link>
            {'\n'}Uma animadinha que diz o mais importante de tudo: estamos
            melhores quando estamos juntos! Pra dançar com o maridão e relaxar
            das contrações com um sorriso no rosto.
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>18. Eu sei que vou te amar – Tom Jobim</S.TextBold>{' '}
            {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=TARRNm0x1Iw')
              }
            >
              https://www.youtube.com/watch?v=TARRNm0x1Iw
            </S.Link>
            {'\n'}Na voz de Caetano Veloso, esse hino ao amor fica ainda mais
            lindo. “Eu sei que vou te amar por toda a minha vida” é apenas tudo
            que uma mãe pode cantar para um filho, não é não?
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>19. Dia Branco – Geraldo Azevedo</S.TextBold> {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=UTd_M89rFvk')
              }
            >
              https://www.youtube.com/watch?v=UTd_M89rFvk
            </S.Link>
            {'\n'}Vem, bebê! “Se você quiser e vier pro que der e vier comigo.”
            Uma promessa de amor pro seu filho!
          </S.TextBlock>
          <S.TextBlock>
            <S.TextBold>
              20. Mãe do eterno amor à Nossa Senhora do Bom Parto - Adriana
              Aryde
            </S.TextBold>{' '}
            {'\n'}
            <S.Link
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=YjgKYeSpKrY')
              }
            >
              https://www.youtube.com/watch?v=YjgKYeSpKrY
            </S.Link>
            {'\n'}Você poderá sentir uma paz e uma melhor calma enquanto você
            pode realizar a oração em honra a Nossa Senhora do Bom Parto. E essa
            música vai te lembrar disso .
          </S.TextBlock>
        </S.Content>
      </S.ContentContainer>
    </ScrollView>
  );
};

export default MusicTherapy;
