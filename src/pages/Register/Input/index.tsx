import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container,
  Title,
  TextInput
} from './styles';

interface Props extends TextInputProps {
  name: string;
}

const Input: React.FC<Props> = ({ name, ...rest }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <TextInput {...rest} />
    </Container>
  );
}

export default Input;