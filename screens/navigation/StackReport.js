import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import LectureMode from '../LectureMode'
import Report from '../Report'
import LectureList from '../LectureList'

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Report"component={Report}/>
        <Stack.Screen name="LectureMode"component={LectureList}/>
        <Stack.Screen name="Lecturedetail"component={LectureMode}/>
    </Stack.Navigator>
)