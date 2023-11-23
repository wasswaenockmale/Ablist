import Routes from "../routes";
import CustomDrawerContent from "./CustomDrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Contact from "../../screens/Drawer/Contact/Contact";
import Privacy from "../../screens/Drawer/Privacy/Privacy";
import { COLOR } from "../../constants/contants";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor:COLOR.ORANGE_300
      }}
    >
      <Drawer.Screen
        name='HomeTabs'
        component={Routes}
        options={{
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name='Contact'
        component={Contact}
        options={{
          title: 'Contact',
        }}
      />
      <Drawer.Screen
        name='Privacy'
        component={Privacy}
        options={{
          title:'Privacy Policy'
        }}
      />
    </Drawer.Navigator>
  )
}

export default AppStack