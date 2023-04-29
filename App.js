import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/routes/routes';

const App = () => {
  return (
    <NavigationContainer>
      <Rotas />
    </NavigationContainer>
  );
};

export default App;
