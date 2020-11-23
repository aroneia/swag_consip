import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import * as data from '../json/calendar_dummy.json' 

SWAG_PURPLE = '#5235BB';
LIGHT_PURPLE = 'rgba(82, 53, 187, 0.09)';
const SQUARESIZE = 48
let DAYHEIGHT = 0
let MARGINTOP = SQUARESIZE - DAYHEIGHT;

const colorDay = (day) => {
    console.log(day);
    //console.log("length:"+Object.keys(data).length); 마지막 object는 default object
    //data.length 왜 작동 안하는지 모르겠음 시발
    for (let index = 0; index < Object.keys(data).length-1; index++){
        let item = data[index];
        //console.log("item.date is" + item.date);
        if(item.date !== day) {
            DAYHEIGHT = 0
        }else if(item.date === day){
            const progress = item.takenLecture/item.totalLecture;
            //console.log("progress is :" + progress);
            DAYHEIGHT = SQUARESIZE * progress;
            MARGINTOP = SQUARESIZE - DAYHEIGHT;
            return DAYHEIGHT;
        }
    } 
    return DAYHEIGHT;
}

const getYearMonth = (date) =>{
    const year = date.getFullYear();
    //console.log(year);
    const month = date.getMonth() + 1;
    //console.log(month);
    const yearMonth = year + "년" + " " + month + "월"
    return yearMonth;
}

const Report = ({navigation}) => {   
    return(
        <View style = {styles.container}>
        <View style = {styles.buttonContainer}>
            <View style ={styles.buttonClicked}>
                <Text style ={styles.text}>캘린더모드</Text>
            </View>
            
            <TouchableOpacity
                style = {{flex:1, justifyContent : 'center'}}
                title="to Lecture"
                onPress={() => navigation.navigate('LectureMode')}
            >
                <Text style ={styles.textDark}>강의모드</Text>
            </TouchableOpacity>
          
        </View>
        <Calendar
        hideDayNames ={true}
        style={{
            height: 450
          }}
        theme={{
            arrowColor: SWAG_PURPLE,
            monthTextColor: SWAG_PURPLE,
            dayTextColor: SWAG_PURPLE,
            indicatorColor: SWAG_PURPLE,
            textDayFontFamily: 'NanumSquareB',
            textMonthFontFamily: 'NanumSquareB',
        }}
        //monthFormat={'yyyy MM'}
        renderHeader={(date) => {
        return(<Text style = {styles.textDark}>{getYearMonth(date)}</Text>)
        }}
        // Date marking style [simple/period/multi-dot/single]. Default = 'simple'
        markingType={'custom'}
        dayComponent={({date, state}) => {
            return (
              <View style= {{width : 50, height :50, borderWidth :1, borderColor : SWAG_PURPLE, alignItems: 'center',}}>
                <View style = {{height : colorDay(date.day), width:SQUARESIZE, marginTop :MARGINTOP ,backgroundColor : '#B9A2FB',
            }}>
                </View>
               
                <Text style ={{
                    position : 'absolute',
                    color: state === 'disabled' ? '#D9DBE9' : '#2C01A6',
                    marginTop: Platform.OS === 'android' ? 4 : 14,
                    fontFamily : 'NanumSquareB'
                    }}>
                  {date.day}
                </Text>
              </View>
            );
          }}
       
        /> 
        <View style = {{flex: 2, flexDirection: 'row'}}>
            <View style ={{flex:1}}>
                <Image
                source = {require('../assets/images/animal1.png')}
                style = {styles.animalImage}
                ></Image>
            </View>
            <View style ={{flex:2.5,flexDirection: 'column'}}>
                <View style ={{flex:2, flexDirection : 'row'}}>
                    <View style ={styles.blockContainer}>
                        <Text>퍼펙트 데이</Text>
                        <Text>15일</Text>
                    </View>
                    <View style ={styles.blockContainer}>
                        <Text>퍼펙트 데이</Text>
                        <Text>15일</Text>
                    </View>
                </View>
                <View style ={styles.longBlockContainer}>
                    <Text>친밀도</Text>
                   
                </View>
            </View>
               
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
        animalImage :{
            width : 100,
            height : null,
            flex :1,
            alignSelf : 'center',
            resizeMode : 'contain',
            transform: [{rotateY: '180deg'}]
        },
        blockContainer :{
            flex:1,
            backgroundColor : '#F3F2F7',
            borderRadius : 20,
            margin : 10,
            marginTop : 20
        },
        longBlockContainer :{
            flex:1,
            backgroundColor : '#F3F2F7',
            borderRadius : 20,
            marginLeft : 10,
            marginRight : 10,
        }
    }
)

export default Report;