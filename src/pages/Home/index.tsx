import React, { useCallback, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamList } from '../../routes/app.routes';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../../redux';

import { 
  Container,
  Header,
  TitleWrapper,
  Title,
  Label,
  List,
  ScrollView,
  ButtonIcon,
  Icon,
  Placeholder
} from './styles';

import Card from './Card';

interface Band {  
  id: string;
  name: string;
  biography: string;
  genrer: string;
  plays: string;
}

type NavigationProps = StackNavigationProp<RootParamList, 'Home'>

const Home: React.FC = () => {
  const [ bands, setBands ] = useState([] as Band[]);
  const { navigate } = useNavigation<NavigationProps>(); 

  const listOfBandsFromRedux = useSelector((state: ApplicationState) => state.Home.listOfBands);

  useFocusEffect(useCallback(() => {
    setBands(listOfBandsFromRedux);
  }, [listOfBandsFromRedux]));

  function handleAddBandPress() {
    navigate("Register");
  };

  function handleCardPress(item: Band) { 
    navigate("Band", item);
  };

  return (
    <Container>
      <Header>
        <ButtonIcon onPress={handleAddBandPress}>
          <Icon
            name="plus"
          />
        </ButtonIcon>

        <TitleWrapper>
          <Title>ROCK IN' LIST</Title>
        </TitleWrapper>
        
        <Label>
          CHOOSE THE BAND {'\n'}
          TO SEE MORE...
        </Label>
      </Header>
      <List>
        {bands.length === 0 ? 
          <Placeholder>
            CLICK ON + TO {'\n'}
            ADD A NEW BAND
          </Placeholder>
          :
          <ScrollView>
            {bands.map((item: Band) => (
              <Card
                key={item.id}
                name={item.name}
                onPress={() => handleCardPress(item)}
              />
            ))}
          </ScrollView>
        }
      </List>
    </Container>
  );
}

export default Home;