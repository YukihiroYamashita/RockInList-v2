import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex: 1;

  padding-left: 37px 
  padding-top: 67px;
`;

export const ButtonIcon = styled(BorderlessButton)`
  position: absolute;

  top: 20px;
  right: 30px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(20)}px;
`;

export const TitleWrapper = styled.View`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};

  padding-top: 18px;
`;

export const List = styled.View`
  flex: 4;
  background-color: ${({ theme }) => theme.colors.shape};

  border-top-left-radius: 28px;
  border-top-right-radius: 28px;

  padding-top: 20px;
  padding-bottom: ${getBottomSpace()}px;

  justify-content: center;
`;

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  width: 100%;

  padding-horizontal: 50px;
`;

export const Placeholder = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.background_light};

  text-align: center;
`;
