import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
  
export const Container = styled.View`
  width: 100%;

  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const TextInput = styled.TextInput`
  width: 100%;
  max-height: 300px;
  
  background-color: ${({ theme }) => theme.colors.background_light};
  color: ${({ theme }) => theme.colors.shape};

  border-radius: 5px;

  margin-top: 5px;
  padding: 10px 10px;
`;