import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import { createNewBand } from '../../redux/Home/actions';

import { RootParamList } from '../../routes/app.routes';
import { CREATE_NEW_BAND } from '../../redux/Home/types';

import { generate } from '../../service/generateBand';

import Input from './Input';

import { 
  Container,
  Header,
  Title,
  Label,
  Forms,
  Button,
  ButtonTitle
} from './styles';

type NavigationProps = StackNavigationProp<RootParamList, 'Register'>

const Register: React.FC = () => {
  const [ id, setId ] = useState('');
  const [ name, setName ] = useState('');
  const [ genrer, setGenrer ] = useState('');
  const [ plays, setPlays ] = useState('');
  const [ biography, setBiography ] = useState('');

  const { navigate } = useNavigation<NavigationProps>(); 

  const dispatch = useDispatch();

  function handleRegisterBand() { 
    const newBand = { 
      id,
      name,
      genrer,
      plays,
      biography
    };

    dispatch<createNewBand>({ 
      type: CREATE_NEW_BAND,
      payload: newBand
    });
    
    navigate("Home");
  }

  function fillFieldsWithInformation() { 
    const { biography, plays, genrer, name, id } = generate();

    setName(name);
    setId(id);
    setGenrer(genrer);
    setPlays(plays);
    setBiography(biography);
  }

  return (
    <Container>
      <Header>
        <Title>ROCK IN' LIST</Title>
        <Label>
          INSERT INFOS ABOUT {'\n'}
          YOUR BAND...
        </Label>
      </Header>
      <Forms>
        <Input
          name="NAME:"
          onChangeText={setName}
          value={name}
        />
        <Input
          name="GENRER:"
          onChangeText={setGenrer}
          value={genrer}
        />
        <Input
          name="PLAYS:"
          keyboardType='numeric'
          onChangeText={setPlays}
          value={plays}
        />
        <Input
          name="BIOGRAPHY:"
          onChangeText={setBiography}
          value={biography}
        />
         <Button onPress={fillFieldsWithInformation}>
          <ButtonTitle>GENERATE</ButtonTitle>
        </Button>
        <Button onPress={handleRegisterBand}>
          <ButtonTitle>SUBMIT</ButtonTitle>
        </Button>
      </Forms>
    </Container>
  );
}

export default Register;