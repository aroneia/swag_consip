import React, {Component, useState} from 'react';
import {View, Text, Image,TextInput, Button, StyleSheet,TouchableOpacity} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import data from './../json/lecture';
import ProgressCircle from 'react-native-progress-circle'

function read_lect(){
    var ret = [];

    //console.log(typeof(data));
    console.log('------');
    //console.log(Object.keys(data.lectureList[0].keywords).length);
    var len = Object.keys(data.lectureList[0].keywords).length;
    for(var i=0;i<len;i++){
        console.log(i);
        // console.log(data.lectureList[0].keywords[i].date);
        // console.log(data.lectureList[0].keywords[i].key1);
        // console.log(data.lectureList[0].keywords[i].key2);
        // console.log(data.lectureList[0].keywords[i].key3);
        ret.push(data.lectureList[0].keywords[i].date.substring(4,6));
        ret.push(data.lectureList[0].keywords[i].date.substring(6,8));
        ret.push(data.lectureList[0].keywords[i].key1);
        ret.push(data.lectureList[0].keywords[i].key2);
        ret.push(data.lectureList[0].keywords[i].key3);
    }
    //console.log(data.lectureList[0].keywords[0].key1);
    //console.log('날짜는: '+(data.lectureList[0].keywords[0].date.substring(4,8)));
    // ret.push(data.lectureList[0].keywords[0].date.substring(4,6));
    // ret.push(data.lectureList[0].keywords[0].date.substring(6,8));
    // ret.push(data.lectureList[0].keywords[0].key1);
    // ret.push(data.lectureList[0].keywords[0].key2);
    // ret.push(data.lectureList[0].keywords[0].key3);
    

    return ret;

}

 const list = read_lect();
 //console.log(list);


const SWAG_PURPLE = '#5235BB';
const LIGHT_PURPLE = 'rgba(82, 53, 187, 0.09)';

const LectureMode = ({navigation}) => {
  
   
    
    return(
        <View style = {styles.container}>


            <Text onPress={() => navigation.navigate('LectureMode')} >   뒤로가기 </Text>
           
            <View style={{flex:1, flexDirection:'row'}}>
            <Text style={{fontSize:20, fontFamily:'NanumSquareB',marginLeft:10}}>{"\n\n\n"}브랜드스토리텔링</Text>
            <Text>                                   </Text>
            <ProgressCircle
                        percent={38}
                        radius={45}
                        borderWidth={8}
                        color="#552DEC"
                        shadowColor="#D9DBE9"
                        bgColor="#fff"
                        marginLeft=""
                    >
                        <Text style={{ fontSize: 18 }}>{'38%'}</Text>
                    </ProgressCircle>
            </View>

            <View style = {{flex : 6, backgroundColor:'#F7F7FC'}}>
            <Text style={{fontSize:20, fontFamily:'NanumSquareB',margin: 10}}>저장된 메모</Text>
            <Text style={{fontFamily:'NanumSquareB',paddingTop: 4, marginLeft:10}}>{list[0]}월 {list[1]}일</Text>
            
            <Card style={{padding: 10, margin: 10}}>
                <Text style={{marginTop:2}}> <Image
                    style = {{height:25, width:50}}
                    source={require('../assets/images/key1.png')}
                    resizeMode="contain"
                ></Image>  {list[2]}</Text>
                <Text style={{marginTop:2}}> <Image
                    style = {{height:25, width:50}}
                    source={require('../assets/images/key2.png')}
                    resizeMode="contain"
                ></Image>  {list[3]}</Text>
                <Text style={{marginTop:2}}> <Image
                    style = {{height:25, width:50}}
                    source={require('../assets/images/key3.png')}
                    resizeMode="contain"
                ></Image>  {list[4]}</Text>
                    {/* <Text style={styles.keyword}>Key2</Text><Text>{list[3]}</Text>
                    <Text style={styles.keyword}>Key3</Text><Text>{list[4]}</Text> */}
            </Card>

            <Text style={{fontFamily:'NanumSquareB',paddingTop: 10, marginLeft:10}}>{list[5]}월 {list[6]}일</Text>
            <Card style={{padding: 10, margin: 10}}>
                <Text style={{marginTop:2}}> <Image
                    style = {{height:25, width:50}}
                    source={require('../assets/images/key1.png')}
                    resizeMode="contain"
                ></Image>  {list[7]}</Text>
                <Text style={{marginTop:2}}> <Image
                    style = {{height:25, width:50}}
                    source={require('../assets/images/key2.png')}
                    resizeMode="contain"
                ></Image>  {list[8]}</Text>
                <Text style={{marginTop:2}}> <Image
                    style = {{height:25, width:50}}
                    source={require('../assets/images/key3.png')}
                    resizeMode="contain"
                ></Image>  {list[9]}</Text>
            </Card>
            </View> 
           
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
            color : '#552DEC'   
        },
        buttonClicked :{
            flex :1,
            backgroundColor : '#552DEC',
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