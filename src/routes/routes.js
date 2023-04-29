import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../views/HomeScreen/StartScreen';
import LoginScreen from '../views/LoginScreen';
import HomeScreen from '../views/HomeScreen';

const Stack = createNativeStackNavigator();

const Rotas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Rotas;
