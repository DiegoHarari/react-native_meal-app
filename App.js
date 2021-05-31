import React from 'react';
import MealsNavigator from './Navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens';

enableScreens();

const App = () => {
  return <MealsNavigator />;
};

export default App;
