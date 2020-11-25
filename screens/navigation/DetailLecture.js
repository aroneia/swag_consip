import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import LectureMode from '../LectureMode'

const ss = createStackNavigator();

export default () => (
    <ss.Navigator screenOptions={{ headerShown: false }}>
        <ss.Screen name="LectureMode"component={LectureMode}/>
    </ss.Navigator>
)