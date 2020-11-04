import React, {useState} from 'react';
import {AppLoading} from "expo";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import Timetable from './screens/Timetable'
import Report from './screens/Report'
import MyPage from './screens/MyPage'

const Tab = createBottomTabNavigator();

export default function App() {
  //fonts
  const [fontsLoaded] = useFonts({
    'NanumSquareB': require('./assets/fonts/NanumSquareB.ttf'),
    'NanumSquareEB': require('./assets/fonts/NanumSquareEB.ttf'),
    'NanumSquareL': require('./assets/fonts/NanumSquareL.ttf'),
    'NanumSquareR': require('./assets/fonts/NanumSquareR.ttf'),
  });
  
  if (!fontsLoaded) {
    return <AppLoading onError={console.error}/>;
  } else {
    //Font loading successful 
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name = "Home" component = {Home}></Tab.Screen>
          <Tab.Screen name = "Timetable" component = {Timetable}></Tab.Screen>
          <Tab.Screen name = "Report" component = {Report}></Tab.Screen>
          <Tab.Screen name = "MyPage" component = {MyPage}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};