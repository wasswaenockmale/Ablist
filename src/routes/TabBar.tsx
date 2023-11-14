import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeDisplay from '../screens/Dashboard/HomeDisplay';
import CodeTips from '../screens/CodeTips/CodeTips';
import MyTabBar from './MyTabBar';
import FindTalent from '../screens/FindTalent/FindTalent';

const Tabs = createMaterialTopTabNavigator();

const TabBar = () => {
  return (
    <Tabs.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        tabBarGap: 10,
        swipeEnabled: false,
        tabBarStyle: {
        }
      }}
    >
      <Tabs.Screen
        name='News'
        component={HomeDisplay}
      />
      <Tabs.Screen
        name='Code Tips'
        component={CodeTips}
      />
      <Tabs.Screen
        name='Talent'
        component={FindTalent}
      />
    </Tabs.Navigator>
  )
}

export default TabBar