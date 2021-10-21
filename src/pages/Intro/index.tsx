import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { RootParamList } from '../../routes/app.routes';
import { StackNavigationProp } from '@react-navigation/stack';
import guitar from '../../assets/images/guitar.png';

import { 
  Container,
  Title,
  Guitar
} from './styles';

type NavigationProps = StackNavigationProp<RootParamList, 'Intro'>

const Intro: React.FC = () => {
  const { navigate } = useNavigation<NavigationProps>(); 

  useEffect(() => { 
    setTimeout(() => navigate("Home"), 2000);
  }, []);

  return (
    <Container>
      <Guitar
        source={guitar}
      />
      <Title>ROCK IN' LIST</Title>
    </Container>
  );
}

export default Intro;