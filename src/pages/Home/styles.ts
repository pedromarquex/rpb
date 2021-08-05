import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #23292e;
  padding: 40px 40px 0 40px;
`;

export const Welcome = styled.Text`
  font-family: 'Poppins_400Regular';
  margin-top: 30px;
  font-size: 20px;
  color: #fff;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-size: 20px;
  color: #fff;
`;

export const OptionsContainer = styled.View`
  margin-top: 52px;
`;

export const Option = styled(TouchableOpacity)`
  height: 85px;
  background: #5e778c;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-left: 50px;
  padding-right: 20px;
  flex-direction: row;
`;

export const OptionText = styled.Text`
  font-family: 'Archivo_600SemiBold';
  color: #fff;
  font-size: 20px;
`;

export const AvatarImage = styled.Image`
  width: 70px;
  height: 170px;
  margin-left: 40px;
`;
