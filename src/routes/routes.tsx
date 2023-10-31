import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Dashboard/Home";
import NewsDetails from "../screens/NewsDetails/NewsDetails";


const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={NewsDetails} />
    </Stack.Navigator>
  );
}

export default Routes