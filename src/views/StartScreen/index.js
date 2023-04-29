import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';

export default function StartScreen() {
  const navigation = useNavigation();

  return (
    <View>  
        {/* <Logo/> */}

        <Button
        title="Entrar"
        onPress={() => navigation.navigate('Entrar')}
      />

      <Button
        title="Criar uma conta"
        onPress={() => navigation.navigate('Criar')}
      />
    </View>
  );
}