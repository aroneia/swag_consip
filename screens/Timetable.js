import React from 'react';
import {  View, Text, StyleSheet, Image, Modal,TouchableHighlight } from 'react-native';
import TimeTableView from './components/TimetableCom/TimeTable/TimeTableView';
import  { genTimeBlock } from './components/TimetableCom/utils';
import InsertModal from './components/TimetableCom/InsertModal/InsertModal';
import data from './../json/lecture';



const list = data.lectureList.map(function(item) {
    return {
        title: item.name,
        startTime: genTimeBlock(item.days[0],item.Time[0],item.Time[1]),
        endTime: genTimeBlock(item.days[0],item.Time[2],item.Time[3])
    };
});



const Timetable = () => {


    return(
        
        <View style = {styles.container}>

                <Text style = {styles.title}>시간표</Text>


            <View style = {styles.timetable}>

                <TimeTableView
                    pivotTime={8}
                    pivotEndTime={20}
                    events={list}
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
