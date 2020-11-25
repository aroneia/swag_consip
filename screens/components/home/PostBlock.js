import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
import * as dummydata from '../../../json/calendar_dummy.json'

const progress =  dummydata.takenLecture /dummydata.totalLecture ;

const PostBlock = () => {
    return(
        <View style = {styles.container}>
            <Text>Inside postblock {progress}</Text>
        </View>)
    
}


const styles = StyleSheet.create({
    container :{
        flex :1,
        borderWidth :1,
        borderColor : '#5235BB',
        borderRadius : 20,
        backgroundColor : '#FFF',
        margin :10
    }
})

export default PostBlock;