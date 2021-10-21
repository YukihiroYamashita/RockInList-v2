import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  
  padding: 26px 24px;
  margin-vertical: 15px;

  shadow-color: #000;
  shadow-offset: {
    width: 0,
    height: 2,
  };
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  
  elevation: 5;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const TitleWrapper = styled.View`
  width: 100%;

  align-items: center;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  text-align: center;
`;
