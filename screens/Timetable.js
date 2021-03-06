import React,  {useState} from 'react';
import {  View, Text, StyleSheet, Image, Modal } from 'react-native';
import TimeTableView from './components/TimetableCom/TimeTable/TimeTableView';
import  { genTimeBlock } from './components/TimetableCom/utils';
import InsertModal from './components/TimetableCom/InsertModal/InsertModal';
import data from './../json/lecture';

function tbl_map() {
    var ret = [];
    console.log(typeof(data));
    for(var a in data.lectureList) {
        for(var b in  data.lectureList[a].days)
        {
        ret.push (
            {
                title: data.lectureList[a].name,
                startTime: genTimeBlock(data.lectureList[a].days[b],data.lectureList[a].Time[b*4],data.lectureList[a].Time[b*4+1]),
                endTime: genTimeBlock(data.lectureList[a].days[b],data.lectureList[a].Time[b*4+2],data.lectureList[a].Time[b*4+3])
            }
        );
        }
    }
    return ret;
}

console.log(data);

const Timetable = () => {
    const [list,setlist] = useState(tbl_map());

    const refresh =(text) => {
        setlist(tbl_map());
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.swag}>
                <Text style= {styles.swagtext}>SWAG</Text>
            </View>

            <Text style = {styles.subtitle}>시간표</Text>


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
            <InsertModal parentCallback ={refresh} />  
            </View>


        </View>

    );
}

const styles = StyleSheet.create(
    {
        container :{
            flex : 1,
            justifyContent : 'center',
            backgroundColor:'#F7F7FC'
        },
        swag : { 
             marginTop : 55.5,
             flex: 0.3,
            justifyContent : "center",
            },
        swagtext:{
            fontFamily: "NanumSquareEB",
            fontStyle: "normal",
            fontSize: 17,
            textAlign: "center",
        },
        subtitle:{
            flex: 0.2,
            fontSize: 17,
            color: '#14142A',
            marginLeft :18,       
            marginBottom:16,     
            fontFamily : 'NanumSquareEB',
        },
        headerStyle: {
            backgroundColor: 'rgba(255,255,255,1.0)',
        },
        timetable:{
            flex: 6,
            marginLeft :16,
            marginRight :16,
            marginBottom:16,
            borderRadius:16,
            backgroundColor : '#ffffff',
            borderColor:"#D9DBE9",
            borderWidth:1,
        },
        InsertButton:{
            position: "absolute",
            width : '100%',
            bottom : '0%',
        }
    }
)

export default Timetable;

