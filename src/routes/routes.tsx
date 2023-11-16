import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsDetails from '../screens/NewsDetails/NewsDetails'
import BottomNavigation from './BottomNavigation';
import { loadFonts } from '../assets/fonts/fonts';


const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Home' component={BottomNavigation} />
      <Stack.Screen name='Details' component={NewsDetails} />
    </Stack.Navigator>
  );
}

export default Routes