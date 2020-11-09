import React from 'react';
import {View, Text, StyleSheet, Modal,TouchableHighlight } from 'react-native';
import TimeTableView from './components/TimetableCom/TimeTable/TimeTableView'
import  { genTimeBlock } from './components/TimetableCom/utils'
import ActionButton from './components/TimetableCom/button/ActionButton'

const events_data = [
    {
        title: "채플",
        startTime: genTimeBlock("MON", 9, 30),
        endTime: genTimeBlock("MON", 10, 50),
        location: "Classroom 403",
        extra_descriptions: ["Kim", "Lee"],
      },
      {
        title: "Physics",
        startTime: genTimeBlock("MON", 11),
        endTime: genTimeBlock("MON", 11, 50),
        location: "Lab 404",
        extra_descriptions: ["Einstein"],
      },
      {
        title: "Mandarin",
        startTime: genTimeBlock("TUE", 9),
        endTime: genTimeBlock("TUE", 10, 50),
        location: "Language Center",
        extra_descriptions: ["Chen"],
      },
  ];

const Timetable = () => {
    return(

        <View style = {styles.container}>
        
            <View style = {{height :128}}>
                <Text style = {styles.title}>시간표</Text>
            </View>

            <View style = {styles.timetable}>

                <TimeTableView
                    pivotTime={8}
                    pivotEndTime={20}
                    events={events_data}
                    pivotDate={genTimeBlock('mon')}
                    numberOfDays = {7}
                    locale = {'ko'}
                    formatDateHeader = {'dd'}
                    headerStyle={styles.headerStyle}
                    formatDateHeader="dd"
                    locale="ko"
                    />

            </View>
            <ActionButton buttonColor="#5235BB">
            </ActionButton>


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
        title:{
            position: 'absolute',
            fontSize:20,
            color: '#5235BB',
            alignSelf:'center',
            fontFamily : 'NanumSquareB',
        },
        headerStyle: {
            backgroundColor: '#F9F8FF',
          },
        timetable:{
            flex: 1,
            marginLeft :16,
            marginRight :16,
            marginBottom:16,
            backgroundColor : '#ffffff'
        },
    }
)

export default Timetable;