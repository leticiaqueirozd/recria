import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../views/StartScreen';
import LoginScreen from '../views/LoginScreen';
import HomeScreen from '../views/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator ();

function Rotas() {
  return (
    <Drawer.Navigator>
      <Stack.Screen name="Start" component={StartScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default Rotas;
