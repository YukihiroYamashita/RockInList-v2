import React from 'react';
import { Alert, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootParamList } from '../../routes/app.routes';

import { removeBand } from '../../redux/Home/actions';
import { REMOVE_BAND } from '../../redux/Home/types';
import bg from '../../assets/images/bg.png';

import { 
  Container,
  BackgroundImage,
  Row,
  Name,
  Genre,
  Description,
  Text,
  Plays,
  Divider,
  Icon,
  Button
} from './styles';

type RouteProps = RouteProp<RootParamList, 'Band'>
type NavigationProps = NavigationProp<RootParamList, 'Band'>

const Band: React.FC = () => {
  const { name, genrer, biography, plays, id } = useRoute<RouteProps>().params;
  const { navigate } = useNavigation<NavigationProps>();
  const dispatch = useDispatch();

  function handleDeleteBand() { 
    dispatch<removeBand>({
      type: REMOVE_BAND,
      payload: id
    });

    navigate("Home");
  };

  function handleDeleteCardPress() { 
    Alert.alert('Warning', 'Are you sure that you want delete it?', [
      { text: 'Não' },
      { text: 'Sim', onPress: () => handleDeleteBand()}
    ]);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: 'red' }}
      showsVerticalScrollIndicator={false}
    >
      <BackgroundImage source={bg}>
        <Button onPress={handleDeleteCardPress}>
          <Icon
            name="trash"
          />  
        </Button>
      </BackgroundImage>
      <Container>
        <Divider/>
        <Row>
          <Name>{name}</Name>
          <Genre>{genrer}</Genre>
        </Row>
        <Description>
          <Text>{biography}</Text>
        </Description>
        <Plays>PLAYS: {plays}</Plays>
      </Container>
    </ScrollView>
  );
}

export default Band;