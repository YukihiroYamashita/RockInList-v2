import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  align-items: center;

  padding-top: 70px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.text_dark};

  background-color: ${({ theme }) => theme.colors.shape};

  text-align: center;

  padding: 0px 10px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};

  padding-vertical: 20px;
`;

export const Forms = styled.View`
  width: 100%;
  padding-horizontal: 20px;
`;

export const Button = styled(RectButton)`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.secondary};

  align-items: center;

  border-radius: 5px;

  margin-top: 50px;
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(16)}px;

  padding-vertical: 10px;
`;
