import React, {Component, useState} from 'react';
import {View, Text, Image,TextInput, Button, StyleSheet,TouchableOpacity} from 'react-native';
import {Card} from 'react-native-shadow-cards';
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

// const list = read_lect();
// console.log("read lect한 결과:"+list[0]);


//const list1 = read_keyw();
//console.log(list1);


const SWAG_PURPLE = '#5235BB';
const LIGHT_PURPLE = 'rgba(82, 53, 187, 0.09)';

const LectureMode = ({route, navigation}) => {
  
    const classn = route.params.id;
    const perc = route.params.perc;
    //console.log(classn);
    const list = read_lect(classn);
    // console.log("list[0][1]은 "+list[0][1]);
    // console.log("lisst[1]은 "+list[1]);
    
    //fin[0]: 첫째날 fin[1]둘째날 덩어리.
    const show_keyword = () => {
        return list.map((el, i) => 
        <View>
            <Text style={{fontFamily:'NanumSquareB',paddingTop: 4, marginLeft:10}}>{list[i][0]}월 {list[i][1]}일</Text>
            <Text></Text>
            <Card style={{padding: 10, margin: 10}}>
                    <Text style={{marginTop:2, marginBottom:2}}> <Image
                        style = {{height:25, width:50 }}
                        source={require('../assets/images/key1.png')}
                        resizeMode="contain"
                    ></Image>  {list[i][2]}</Text>
                    <Text style={{marginTop:2}}> <Image
                        style = {{height:25, width:50}}
                        source={require('../assets/images/key2.png')}
                        resizeMode="contain"
                    ></Image>  {list[i][3]}</Text>
                    <Text style={{marginTop:2}}> <Image
                        style = {{height:25, width:50}}
                        source={require('../assets/images/key3.png')}
                        resizeMode="contain"
                    ></Image>  {list[i][4]}</Text>
                    
                </Card>
        </View>
        
        )
        
     }

    
    return(
        <View style = {styles.container}>


            <Text onPress={() => navigation.navigate('LectureMode')} >   뒤로가기 </Text>
            <View style={{flex:1, flexDirection:'row'}}>
            <Text style={{fontSize:20, fontFamily:'NanumSquareB',marginLeft:10}}>{"\n\n\n"}{classn}</Text>
            <Text>                                </Text>
            <ProgressCircle
                        percent={perc}
                        radius={45}
                        borderWidth={8}
                        color="#552DEC"
                        shadowColor="#D9DBE9"
                        bgColor="#fff"
                        marginLeft=""
                    >
                        <Text style={{ fontSize: 18 }}>{perc+'%'}</Text>
                    </ProgressCircle>
            </View>

            <View style = {{flex : 6, backgroundColor:'#F7F7FC'}}>
            <Text style={{fontSize:20, fontFamily:'NanumSquareB',margin: 10}}>저장된 메모</Text>
            {show_keyword()}
            {/* <Text style={{fontFamily:'NanumSquareB',paddingTop: 4, marginLeft:10}}>{list[0]}월 {list[1]}일</Text>
            
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
            </Card> */}
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