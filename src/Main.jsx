
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MSGScreen from './MSGScreen';
import WeatherScreen from './WeatherScreen'
// const { Navigator, Screen } = createMaterialTopTabNavigator();
const Tab = createMaterialTopTabNavigator();







const TabNavigator = () => (
  <Tab.Navigator initialRouteName='Weather' >
    <Tab.Screen name='Message' component={MSGScreen}/>
    <Tab.Screen name='Weather' component={WeatherScreen}/>
  </Tab.Navigator>
);

export default function Main() {
  
  return (
    <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
  )
}