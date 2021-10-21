import React from 'react';

import { 
  Container,
  TitleWrapper,
  Title
} from './styles';

interface Props { 
  name: string;
  onPress: () => void;
}

const Card: React.FC<Props> = ({
  name, 
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <TitleWrapper>
        <Title>{name}</Title>
      </TitleWrapper>
    </Container>
  );
}

export default Card;