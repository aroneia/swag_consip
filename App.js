import React, {useState} from 'react';
import {AppLoading} from "expo";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import Timetable from './screens/Timetable'
import Report from './screens/Report'
import MyPage from './screens/MyPage'
import StackReport from './screens/navigation/StackReport'

const Tab = createBottomTabNavigator();

//색깔은 글로벌 변수로 지정했습니다
global.SWAG_PURPLE = '#5235BB';
global.LIGHT_PURPLE = 'rgba(82, 53, 187, 0.09)';

export default function App() {
  //font다
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
          <Tab.Screen name = "Report" component = {StackReport}></Tab.Screen>
          <Tab.Screen name = "MyPage" component = {MyPage}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};