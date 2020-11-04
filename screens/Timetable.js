import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Timetable = () => {
    return(
        <View style = {styles.container}>
        <Text style = {styles.text}> 시간표 </Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container :{
            flex : 1,
            justifyContent : 'center'
        },
        text: {
            fontSize : 50,
            textAlign : 'center'
        }
    }
)

export default Timetable;