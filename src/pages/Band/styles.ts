import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Button = styled(BorderlessButton)`
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 40%;

  align-items: flex-end;

  padding: 20px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Divider = styled.View`
  width: 70%;
  height: 1px;

  background-color: ${({ theme }) => theme.colors.secondary};

  align-self: flex-end;
`;

export const Row = styled.View`
  align-items: flex-end;

  padding: 20px;
`;

export const Name = styled.Text`
  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.text_dark};

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  text-align-vertical: center;

  padding-horizontal: 20px;
  padding-vertical: 10px;
`;

export const Genre = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-top: 10px;
`;

export const Description = styled.View`
  padding: 20px;
  margin-horizontal: 20px;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Plays = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-vertical: 10px;
  margin-horizontal: 20px;
`;