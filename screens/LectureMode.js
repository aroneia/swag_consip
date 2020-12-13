import React, {Component, useState} from 'react';
import {View, Text, Image,TextInput, Button, ScrollView, StyleSheet,TouchableOpacity} from 'react-native';
import data from './../json/lecture';
import ProgressCircle from 'react-native-progress-circle'



function read_lect(classn){

    var ret = [];   //해당날짜가 한덩어리
    var fin = [];   //날짜별 덩어리가 모여있는 최종 반환 배열
    
    var len = Object.keys(data.lectureList).length;
    var i;
    var an=0;
    for(i=0;i<len;i++){
        if(classn == data.lectureList[i].name){
            an = i;
        }
    }
    var keylen = Object.keys(data.lectureList[an].keywords).length;
    for(var i=0;i<keylen;i++){
            ret= [];
            ret.push(data.lectureList[an].keywords[i].date.substring(4,6));
            ret.push(data.lectureList[an].keywords[i].date.substring(6,8));
            ret.push(data.lectureList[an].keywords[i].key1);
            ret.push(data.lectureList[an].keywords[i].key2);
            ret.push(data.lectureList[an].keywords[i].key3);
            //console.log(ret);
            fin.push(ret);
    }
    return fin;
}

function read_keyword(classn){

    var keywordlist=[];

    var len = Object.keys(data.lectureList).length;
    var i;
    var ans=0;
    for(i=0;i<len;i++){
        if(classn == data.lectureList[i].name){
            ans = i;
        }
    }

    var keylen = Object.keys(data.lectureList[ans].character).length;
    for(var i=0;i<keylen;i++){
        console.log(data.lectureList[ans].character[i]);
        keywordlist.push(data.lectureList[ans].character[i]);
    }
    return keywordlist;
}



const LIGHT_PURPLE = 'rgba(82, 53, 187, 0.09)';

const LectureMode = ({route, navigation}) => {
  
    const classn = route.params.id;
    const perc = route.params.perc;
    //console.log(classn);
    const list = read_lect(classn);
    const charlist = read_keyword(classn);

    //fin[0]: 첫째날 fin[1]둘째날 덩어리.
    const show_keyword = () => {
        var row  = list.map((el, i)=> {
            if(i==0){
                return <View>
                <View style ={{ flexDirection : "row",paddingTop: 15,}}>
                        <View style = {styles.dot}></View>
                <Text style={styles.datetext}>{list[i][0]}월 {list[i][1]}일</Text>
                </View>
                <View style={styles.card}>
                    <View style ={{ flexDirection : "row", alignItems:"center"}}>
                    <Image
                    style = {{height:25, width:50 }}
                    source={require('../assets/images/key1.png')}
                    resizeMode="contain"
                    /> 
                    <Text style={{marginLeft:5}}> {list[i][2]}</Text>
                    </View>
                    <View style ={{ flexDirection : "row", alignItems:"center", marginTop:5,marginBottom:5}}>
                    <Image
                    style = {{height:25, width:50 }}
                    source={require('../assets/images/key2.png')}
                    resizeMode="contain"
                    /> 
                    <Text style={{marginLeft:5}}> {list[i][3]}</Text>
                    </View>
                    <View style ={{ flexDirection : "row", alignItems:"center"}}>
                    <Image
                    style = {{height:25, width:50 }}
                    source={require('../assets/images/key3.png')}
                    resizeMode="contain"
                    /> 
                    <Text style={{marginLeft:5}}> {list[i][4]}</Text>
                    </View>
                </View>
            </View>
            }
            else {
                return <View style ={{ marginTop : -115 }}>
                        <View style ={{  marginLeft:6.25 ,height: 140,width:2 ,backgroundColor:"#2C01A6"}}></View>

                <View style ={{ flexDirection : "row",}}>
                        <View style = {styles.dot}></View>
                <Text style={styles.datetext}>{list[i][0]}월 {list[i][1]}일</Text>
                </View>
                <View style={styles.card}>
                    <View style ={{ flexDirection : "row", alignItems:"center"}}>
                    <Image
                    style = {{height:25, width:50 }}
                    source={require('../assets/images/key1.png')}
                    resizeMode="contain"
                    /> 
                    <Text style={{marginLeft:5}}> {list[i][2]}</Text>
                    </View>
                    <View style ={{ flexDirection : "row", alignItems:"center", marginTop:5,marginBottom:5}}>
                    <Image
                    style = {{height:25, width:50 }}
                    source={require('../assets/images/key2.png')}
                    resizeMode="contain"
                    /> 
                    <Text style={{marginLeft:5}}> {list[i][3]}</Text>
                    </View>
                    <View style ={{ flexDirection : "row", alignItems:"center"}}>
                    <Image
                    style = {{height:25, width:50 }}
                    source={require('../assets/images/key3.png')}
                    resizeMode="contain"
                    /> 
                    <Text style={{marginLeft:5}}> {list[i][4]}</Text>
                    </View>
                </View>
            </View>
            }
        });
        return(
            <View>{row}</View>
        );
     }
    
    return(
        <View style = {styles.container}>
            
            <View style = {styles.header}>
                <View style ={{ flexDirection : "row", alignItems : 'center'}}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('LectureMode')}
                    >
                    <Image 
                    style = {styles.backIcon}
                    source = {require('../assets/icons/Backarrow.png')}/>
                </TouchableOpacity>
                    <Text style = {styles.text_title}>메모</Text>
                </View>

                <View style={{flexDirection:'row',alignItems:"flex-end",justifyContent:"space-between"}}>
                    <View >
                        <View style={{flexDirection:'row',marginBottom:5}}>
                        <View style = {styles.keywordview}>
                            <Text style = {styles.keyword}>{charlist[0]}</Text>
                        </View>
                        <View style = {styles.keywordview}>
                             <Text style = {styles.keyword}>{charlist[1]}</Text>
                        </View>
                        <View style = {styles.keywordview}>
                            <Text style = {styles.keyword}>{charlist[2]}</Text>
                        </View>
                        </View>
                    <Text style={{fontSize:21, fontFamily:'NanumSquareB'}}>{classn}</Text>
                    </View>
                    <ProgressCircle
                        containerStyle = {{width:80,height:80}}
                        outerCircleStyle = {{}}		
                        percent={perc}
                        radius={50}
                        borderWidth={8}
                        color="#552DEC"
                        shadowColor="#D9DBE9"
                        bgColor="#fff"
                        marginLeft=""
                    >
                    <Text style={{ fontSize: 18 }}>{perc+'%'}</Text>
                    </ProgressCircle>
                </View>
            </View>

            <ScrollView style = {styles.contents}>
            <Text style={{fontSize:20, fontFamily:'NanumSquareB'}}>저장된 메모</Text>
            {show_keyword()}
            </ScrollView> 
           
        </View>
        
    );
}


const styles = StyleSheet.create(
    {
        container :{
            flex : 1,
            backgroundColor:'#F7F7FC',
        },
        header :{
            flex : 0.3,
            paddingTop : 60,
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 0,
            backgroundColor:'#F7F7FC',
            shadowColor: '#000',
            shadowOffset: { width:0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 2,
            elevation: 1,
        },
        backIcon :{
            aspectRatio : 1,
            width : 45,
            height :45, 
        },
        keywordview : {
            backgroundColor: '#552DEC',
            borderRadius:40,
            paddingLeft:11,
            paddingRight:11,
            height:22,
            marginRight:5,
            alignItems:"center",
            justifyContent : 'center',
        },
        keyword : {
            color: "#FFFFFF",
            fontFamily:'NanumSquareEB',
            fontSize : 11,

        },
        text_title : {
            fontSize : 17,
            fontFamily : 'NanumSquareEB',
            color : '#14142A',
            marginLeft : 5,
            textAlign : 'left'
          },
        contents :{
            flex : 3.5,
            paddingTop: 20,
            paddingLeft:16,
        },
        datetext: {
            fontFamily:'NanumSquareEB',
            color: '#2C01A6',
            marginLeft: 8,
        },
        dot: {
            height : 15,
            width: 15,
            backgroundColor : '#ffffff',   
            borderWidth : 2,
            borderColor : "#2C01A6",
            borderRadius: 12,
        },
        card :{
            backgroundColor : '#ffffff',
            borderRadius : 11,
            marginLeft:23,
            marginRight: 16,
            borderColor: "#D9DBE9",
            borderWidth: 1,
            padding: 8,
            paddingLeft: 13,
            marginTop:8,
            marginBottom:2,
        
        },

        detail:{
            color:'black'
        }
    }
)
export default LectureMode;