import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Home'
import PostBox from '../PostBox' 

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator >
        <Stack.Screen name="Home"component={Home}/>
        <Stack.Screen name="PostBox"component={PostBox}/>
    </Stack.Navigator>
)