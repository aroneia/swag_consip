import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Report = () => {
    return(
        <View style = {styles.container}>
            <Calendar 
            renderHeader={(date) => {return(<Text>{`${date.getYear()}년 ${date.getMonth()}월`}</Text>)}}
            />
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

export default Report;