import React, {Component, useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Card} from 'react-native-shadow-cards';
import data from './../json/lecture';

function read_lect(){
    var ret = [];

    console.log(typeof(data));

    for(var a in data.lectureList[0].character){
        console.log("------d---------");
        console.log(data.lectureList[0].character[a]);
        ret.push(data.lectureList[0].character[a]);
    }
    // for(var a in data.lectureList) {
    //     for(var b in  data.lectureList[a].character)
    //     {
    //     console.log("---------------");
    //     console.log(data.lectureList[a].character[b]);
    //     // ret.push (
    //     //     {
    //     //         title: a.name,
    //     //         startTime: genTimeBlock(a.days[0],a.Time[0],a.Time[1]),
    //     //         endTime: genTimeBlock(a.days[0],a.Time[2],a.Time[3])
    //     //     }
    //     // );
    //     }
    // }
    return ret;

}

const list = read_lect();
console.log(list);
//console.log(list);


const SWAG_PURPLE = '#5235BB';
const LIGHT_PURPLE = 'rgba(82, 53, 187, 0.09)';

const LectureMode = ({navigation}) => {
  
    //const inputdata={ name: ["우와","이게","실화야"]};
    
    return(
        <View style = {styles.container}>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity
                    style = {{flex:1, justifyContent : 'center'}}
                    title="to Report Calendar"
                    onPress={() => navigation.navigate('Report')}
                >
                    <Text style ={styles.textDark}>캘린더모드</Text>
                </TouchableOpacity>
                
                <View style ={styles.buttonClicked}>
                    <Text style ={styles.text}>강의모드</Text>
                </View>
    
            </View>
            <Text style={{padding: 4, margin: 4}}>10월 20일</Text>
            
            <Card style={{padding: 10, margin: 10}}>
                <Text style={styles.keyword}>Key1</Text><Text style={styles.detail}>{list[0]}</Text>
                <Text style={styles.keyword}>Key2</Text><Text>{list[1]}</Text>
                <Text style={styles.keyword}>Key3</Text><Text>{list[2]}</Text>
                {/* <Text>{inputdata.name[0]}</Text>
                <Text>{inputdata.name[1]}</Text>
                <Text>{inputdata.name[2]}</Text>  */}
            </Card>
            <View style = {{flex : 6}}></View> 
           
        </View>
        
    );
}


const styles = StyleSheet.create(
    {
        container :{
            flex : 1,
            justifyContent : 'center',
            backgroundColor : 'white',
            paddingTop : 80
        },
        text: {
            fontSize : 18,
            textAlign : 'center',
            fontFamily : 'NanumSquareB',
            color : 'white'  
        },
        textDark: {
            fontSize : 18,
            textAlign : 'center',
            fontFamily : 'NanumSquareB',
            color : SWAG_PURPLE   
        },
        buttonClicked :{
            flex :1,
            backgroundColor : SWAG_PURPLE,
            justifyContent : 'center',
            borderRadius : 30
        },
        buttonContainer : {
            flex:0.4, flexDirection: 'row', 
            backgroundColor : LIGHT_PURPLE,
            justifyContent : 'center',
            borderRadius : 30,
            marginBottom :20,
            marginHorizontal :20,
            
        },
        keyword:{
            width:50,
            borderRadius:40,
            textAlign:'center',
            backgroundColor : '#EFF0F6',
            color:'#2C01A6'
        },
        detail:{
            color:'black'
        }
    }
)
export default LectureMode;