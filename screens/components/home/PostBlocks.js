import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
import * as dummydata from '../../../json/calendar_dummy.json'

const progress =  dummydata.takenLecture /dummydata.totalLecture ;

const PostBlock = ({animals}) => {
    //const nextMonth = animals[animals.length-1].month +1;
    return(
        <View>
        <View style ={styles.container}>
            {animals.map(animal => (
                <View key = {animal.id} style = {styles.postBlock}>
                    <Text >{animal.name}</Text>
                    <Text >{animal.month}월의 친구</Text>
                </View>
            ))}
            <View style = {styles.postBlock}>
                    <Text >???</Text>
                    <Text >11월의 친구</Text>
            </View>
        </View>
        </View>
        )
    
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection : "row",
        backgroundColor : 'red',
    },
    postBlock :{
        flex :1,
        aspectRatio: 110/153,
        borderWidth :1,
        borderColor : '#5235BB',
        borderRadius : 16,
        backgroundColor : '#FFF',
        margin :3
    }
})

export default PostBlock;