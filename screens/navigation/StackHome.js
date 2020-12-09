import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Home'
import PostBox from '../PostBox' 
import InsertMemo from '../components/home/InsertMemo'
import AilenFriend from '../AilenFriend'

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home"component={Home}/>
        <Stack.Screen name="PostBox"component={PostBox}/>
        <Stack.Screen name="AilenFriend"component={AilenFriend}/>
        <Stack.Screen name="InsertMemo"component={InsertMemo}/>
    </Stack.Navigator>
)