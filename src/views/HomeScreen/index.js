import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';
// import { FormControl } from '@mui/material';

export default function HomeScreen() {
  
    const navigation = useNavigation();

  return (
    <View>
      <View>
        <Text>
          Bem-vindo, Ricardo!
        </Text>
      </View>

      <View>
        {/* <FormControl>
          
        </FormControl> */}
      </View>
    </View>
  );
}