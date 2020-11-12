import React from 'react';
import {  View, Text, StyleSheet, Image, Modal,TouchableHighlight } from 'react-native';
import TimeTableView from './components/TimetableCom/TimeTable/TimeTableView';
import  { genTimeBlock } from './components/TimetableCom/utils';
import ActionButton from './components/TimetableCom/button/ActionButton';
import InsertModal from './components/TimetableCom/InsertModal/InsertModal';

//import Modal from 'react-native-modal';

const events_data = [
    {
        title: "채플",
        startTime: genTimeBlock("MON", 9, 30),
        endTime: genTimeBlock("MON", 10, 50),
        location: "Classroom 403",
        extra_descriptions: ["Kim", "Lee"],
      },
      {
        title: "콘텐츠시스템프로젝트",
        startTime: genTimeBlock("MON", 11),
        endTime: genTimeBlock("MON", 11, 50),
        location: "Lab 404",
        extra_descriptions: ["Einstein"],
      },
      {
        title: "클라우드컴퓨팅",
        startTime: genTimeBlock("TUE", 9),
        endTime: genTimeBlock("TUE", 10, 50),
        location: "Language Center",
        extra_descriptions: ["Chen"],
      },
  ];
  
  

const Timetable = () => {

    return(
        
        <View style = {styles.container}>

                <Text style = {styles.title}>시간표</Text>


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
            <View style = {styles.InsertButton}>
            <InsertModal/>  
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
        title:{
            flex: 2,
            top : 80,
            fontSize:20,
            color: '#5235BB',
            alignSelf:'center',
            fontFamily : 'NanumSquareB',
        },
        headerStyle: {
            backgroundColor: '#F9F8FF',
        },
        timetable:{
            flex: 11,
            marginLeft :16,
            marginRight :16,
            marginBottom:16,
            backgroundColor : '#ffffff'
        },
        InsertButton:{
            position: "absolute",
            width : '100%',
            bottom : '0%',
        }
    }
)

export default Timetable;