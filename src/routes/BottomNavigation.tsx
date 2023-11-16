import React from 'react'
import { Text } from 'react-native';
import { useWindowDimensions } from 'react-native';
// icons imports
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// navigation imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ParamListBase, RouteProp } from '@react-navigation/native';
// screens imports
import { COLOR } from '../constants/contants';
import CodeTips from '../screens/CodeTips/CodeTips';
import Home from '../screens/Dashboard/Home';

const BottomTab = createBottomTabNavigator();
const BottomNavigation = () => {
  const { width: screenWidth } = useWindowDimensions();
  return (
    <BottomTab.Navigator
      screenOptions={({ route }: { route: RouteProp<ParamListBase, string>}) => ({
        tabBarIcon: (
          { focused, color, size }: 
          { focused: boolean, color: string, size: number }) => {
          if (route.name === "Home") {
            return focused ?
              <Ionicons
                name='home'
                size={size}
                color={color}
              /> :
              <Ionicons
                name='home-outline'
                size={size}
                color={color}
              />
          } else if (route.name === "CodeTips") {
            return focused ?
              <AntDesign
                name='codesquare'
                size={size}
                color={color}
              /> :
              <AntDesign
                name='codesquareo'
                size={size}
                color={color}
              />
          }
        },
        headerShown: false,
        tabBarStyle: {
          color: COLOR.B_300,
          width: screenWidth,
          alignSelf: 'center',
          borderRadius: 20,
          elevation: 3,
          marginBottom: 5,
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarShowLabel: false,
        tabBarLabel({focused}) {
          return focused ? <Text>{route.name}</Text> : null
        },
        tabBarItemStyle: {
          // borderWidth:1
        }
      })}
      sceneContainerStyle={{
        backgroundColor:COLOR.WHITE
      }}
    >
      <BottomTab.Screen
        name='Home'
        component={Home}
      />
      <BottomTab.Screen
        name='CodeTips'
        component={CodeTips}
      />
    </BottomTab.Navigator>
  )
}

export default BottomNavigation;