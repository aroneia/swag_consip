import React, {useState} from 'react';
import { Image} from 'react-native';
import {AppLoading} from "expo";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';

import Timetable from './screens/Timetable'
import MyPage from './screens/MyPage'
import StackReport from './screens/navigation/StackReport'
import StackHome from './screens/navigation/StackHome'
import './assets/global.js'
import { Icon } from '@material-ui/core';


const Tab = createBottomTabNavigator();

//색깔

export default function App() {

  const icon = []

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
        <Tab.Navigator
        screenOptions ={({route})=> ({
          tabBarIcon: ({ focused }) => {
        let iconName;
        let size;

        if (route.name === "홈"){
          size = {width:24,height:22}
          iconName = focused
          ?require('./assets/icons/navi_home_focus.png')
          :require('./assets/icons/navi_home.png');
        }else if (route.name === "시간표"){
          size = {width:22,height:22}
            iconName = focused
            ?require('./assets/icons/navi_timetable_focus.png')
            :require('./assets/icons/navi_timetable.png');
        }else if (route.name === "리포트"){
          size = {width:22,height:22}
          iconName = focused
          ?require('./assets/icons/navi_report_focus.png')
          :require('./assets/icons/navi_report.png');
      }else if (route.name === "계정"){
        size = {width:22,height:22}
        iconName = focused
        ?require('./assets/icons/navi_mypage_focus.png')
        :require('./assets/icons/navi_mypage.png');
      }
      return <Image source={iconName} style={size}/>;
      }
    })}
    tabBarOptions={{
      activeTintColor: '#552DEC',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 10,
        fontFamily:"NanumSquareEB"
      },
      tabStyle: {
        alignContent: "center"
      }
      
    }}
    >
          <Tab.Screen name = "홈" component = {StackHome}></Tab.Screen>
          <Tab.Screen name = "시간표" component = {Timetable}></Tab.Screen>
          <Tab.Screen name = "리포트" component = {StackReport}></Tab.Screen>
          <Tab.Screen name = "계정" component = {MyPage}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};