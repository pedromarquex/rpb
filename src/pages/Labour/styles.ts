import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const HeaderContainer = styled.View`
  padding-left: 20px;
  padding-top: 40px;
  height: 250px;
  background-color: #23292e;
`;

export const Title = styled.Text`
  margin-top: 24px;
  font-family: 'Archivo_700Bold';
  font-size: 20px;
  color: #fff;
`;

export const BackButton = styled(BorderlessButton)``;

export const ContentContainer = styled.View`
  max-width: 100%;
  background-color: #f0f0f7;
  flex: 1;
  align-items: center;
`;

export const Content = styled.View`
  margin-top: -40px;
  max-width: 90%;
  min-width: 90%;
  background-color: #fff;
  flex: 1;
  border-radius: 8px;

  padding: 30px;
`;

export const TextBlock = styled.Text`
  line-height: 28px;
  font-family: 'Poppins_400Regular';
  font-size: 16px;
  color: #6a6180;
  margin-bottom: 30px;
`;
