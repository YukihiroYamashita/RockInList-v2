import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Band from '../pages/Band';
import Register from '../pages/Register';
import Intro from '../pages/Intro';

import { Band as IBand } from '../redux/Home/types';

export type RootParamList = {
  Home: undefined;
  Band: IBand;
  Register: undefined;
  Intro: undefined;
}

const { Navigator, Screen } = createStackNavigator<RootParamList>();

const Router: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen 
        name="Intro"
        component={Intro}
      />
      <Screen 
        name="Home"
        component={Home}
      />
      <Screen 
        name="Band"
        component={Band}
      />
      <Screen 
        name="Register"
        component={Register}
      />
    </Navigator>
  );
}

export default Router;