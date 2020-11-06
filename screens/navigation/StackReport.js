import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import LectureMode from '../LectureMode'
import Report from '../Report'

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator>
        <Stack.Screen name="Report"component={Report}/>
        <Stack.Screen name="LectureMode"component={LectureMode}/>
    </Stack.Navigator>
)