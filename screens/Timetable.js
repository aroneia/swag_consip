import React from 'react';
import {View, Text, StyleSheet, Modal,TouchableHighlight } from 'react-native';
import TimeTableView from './components/TimetableCom/Timetable'

const Timetable = () => {
    return(
        <View style = {styles.container}>
        
        <View style = {{flex:1}}>
            <Text style = {styles.title} >시간표</Text>
          </View>

          <View style = {styles.timetable}>
          <TimeTableView
              numberOfDays = {7}/>

          </View>

        </View>
    );
}

const styles = StyleSheet.create(
    {
        container :{
            flex : 1,
            justifyContent : 'center',
            backgroundColor:'white'
        },
        text: {
            fontSize : 50,
            textAlign : 'center'
        },
        title:{
            position: 'absolute',
            top: 60,
            fontSize:20,
            color: '#5235BB',
            alignSelf:'center',
        },
        timetable:{
            flex: 7,
            marginLeft :16,
            marginRight :16,
            marginBottom:16,
            backgroundColor : '#E3DBFF'
        },
    }
)

export default Timetable;