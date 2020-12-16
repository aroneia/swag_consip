import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Calendar} from 'react-native-calendars';
import * as datesdata from '../json/dates.json' 
import ProgressBar from 'react-native-progress/Bar'

SWAG_PURPLE = '#552DEC';
LIGHT_PURPLE = 'rgba(82, 53, 187, 0.09)';
const SQUARESIZE = 48
let DAYHEIGHT = 0
let MARGINTOP = SQUARESIZE - DAYHEIGHT;
let comboCount = 0;


const getYearMonth = (date) =>{
    const year = date.getFullYear();
    //console.log(year);
    const month = date.getMonth() + 1;
    //console.log(month);
    const yearMonth = year + "년" + " " + month + "월"
    return yearMonth;
}

const Report = ({navigation}) => { 
    //퍼펙트 데이 
    const [perfect, setPerfect] = useState(0);
    //최대 연속 일수 
    const [combo, setCombo] = useState(0);
    const [month, setMonth] = useState(1);
    const [friendship, setFriendship] = useState(0);

    useEffect(()=>{
        const fetchHeart = () => {
            //오늘 날짜 string
            const today = new Date();
            const data = require('../json/dates.json');
            const yearMonth_string = String(today.getFullYear()) 
            + String(today.getMonth()+1 > 9 ? today.getMonth()+1 : `0${today.getMonth()+1}`); 
        
            const perfectDays = data.filter(item => {
                //console.log(item.heart);
                //만약 date.json 파일이 정렬되어있으면 여기서 최대연속일수를 가져오는게 더 좋을 거 같은데
                return item.heart == 1 && item.today.slice(0,6) == yearMonth_string} );
            setPerfect(perfectDays.length);
            setMonth(today.getMonth() +1);
        }
        const fetchFriend = () => {
            const datafriend = require('../json/alien_friend.json'); 
            //나중에 현재 달에 따라 친구 이름별로 가져오도록 수정해야
            setFriendship( datafriend[0].friendship/100 );
        }
        fetchHeart();
        fetchFriend();
    },[]);

    const colorDay = (date) => {
        const datestring = date.dateString.slice(0,4)+ date.dateString.slice(5,7)+ date.dateString.slice(8,10);
        DAYHEIGHT = 10;
        MARGINTOP = SQUARESIZE - DAYHEIGHT
        //console.log("length:"+Object.keys(data).length); 마지막 object는 default object
    
        //month 정보 가져와서 30, 31 길이 알아야함 
        
        for (let index = 0; index < Object.keys(datesdata).length-1; index++){
            let item = datesdata[index];
    
            if(datestring !== item.today) {
                DAYHEIGHT = 0
                //console.log(datestring.slice(8,10))
            }else if(datestring === item.today){
                const progress = item.stamp_sum/item.total_lectrues;
                //console.log("progress is :" + progress);
                DAYHEIGHT = SQUARESIZE * progress;
                MARGINTOP = SQUARESIZE - DAYHEIGHT;
    
                //최대 연속 일수 
                if(progress == 1){
                    comboCount = comboCount + 1;
                    if(combo < comboCount){setCombo(comboCount);}
                }
                else{comboCount = 0;
                }
                return DAYHEIGHT;
            }
        }
        return DAYHEIGHT;
    }
    
    return(
        <View style= {{backgroundColor : "#F7F7FC", flex :1}}>
        <View style = {styles.container}>
            <View style = {styles.swag}>
                <Text style= {styles.swagtext}>SWAG</Text>
            </View>
            <View style = {styles.buttonContainer}>

                <View style ={styles.buttonClicked}>
                    <Text style ={styles.text}>캘린더모드</Text>
                </View>
                <TouchableOpacity
                    style = {{flex:1, justifyContent : 'center',}}
                    title="to Lecture"
                    onPress={() => navigation.navigate('LectureMode')}
                >
                    <Text style ={styles.textDark}>강의모드</Text>
                </TouchableOpacity>

            </View>
            <View style ={styles.calendarContainer}>
                <Calendar
                hideDayNames ={true}
                style={{
                    height: 450
                }}
                theme={{
                    calendarbackgroundColor: '#F7F7FC',
                    arrowColor: SWAG_PURPLE,
                    monthTextColor: SWAG_PURPLE,
                    dayTextColor: SWAG_PURPLE,
                    indicatorColor: SWAG_PURPLE,
                    textDayFontFamily: 'NanumSquareB',
                    textMonthFontFamily: 'NanumSquareB',
                }}
                //monthFormat={'yyyy MM'}
                renderHeader={(date) => {
                return(<Text style = {styles.textHeader}>{getYearMonth(date)}</Text>)
                }}
                // Date marking style [simple/period/multi-dot/single]. Default = 'simple'
                markingType={'custom'}
                dayComponent={({date, state}) => {
                    return (
                    <View style= {{width : 50, height :50, borderWidth :1, borderColor : SWAG_PURPLE, alignItems: 'center',}}>
                        <View style = {{height : colorDay(date), width:SQUARESIZE, marginTop :MARGINTOP ,backgroundColor : '#B9A2FB',
                    }}>
                        </View>
                    
                        <Text style ={{
                            position : 'absolute',
                            color: state === 'disabled' ? '#D9DBE9' : '#2C01A6',
                            marginTop: Platform.OS === 'android' ? 4 : 14,
                            marginBottom: Platform.OS === 'android' ? 4 : 'auto',
                            fontFamily : 'NanumSquareB'
                            }}>
                        {date.day}
                        </Text>
                    </View>
                    );
                }}
            
                />
            </View>
            <View style ={{flex :0.5, justifyContent : 'flex-end'}}>
                    <Text style ={styles.monthText} >{month}월의 기록</Text>
            </View> 
            <View style = {{flex: 2, flexDirection: 'row', alignItems : 'stretch'}}>
                    <View style ={{flex:2.5,flexDirection: 'column'}}>
                        <View style ={{flex:2, flexDirection : 'row'}}>
                            <View style ={styles.blockContainer}>
                            <Image 
                                source = {require('../assets/icons/singleheart.png')}
                                style = {styles.heartImage}
                                ></Image>
                                <Text>퍼펙트 데이</Text>
                                <Text>{perfect}일</Text>
                            </View>
                            <View style ={styles.blockContainer}>
                                <Image 
                                source = {require('../assets/icons/doubleHeart.png')}
                                style = {styles.heartImage}
                                ></Image>
                                <Text>최대연속일수</Text>
                                <Text>{combo}일</Text>
                            </View>
                        </View>
                        <View style ={styles.longBlockContainer}>
                            <Text style= {{flex : 1, textAlign : 'center'}}>친밀도</Text>
                            <View style = {{flex : 3, alignItems : 'center'}}>
                               
                                    <Image 
                                    source = {require('../assets/icons/singleheart.png')}
                                    style = {styles.heartImageSmall}
                                    ></Image>
                                    
                              
                                <ProgressBar 
                                    style = {{height :10, marginTop :10}}
                                    progress= {friendship} 
                                    width={150}
                                    height = {10}
                                    borderRadius ={16} 
                                    borderWidth = {1}
                                    borderColor = {"#552DEC"}
                                    color = {"#B9A2FB"}
                                    unfilledColor ={'#EFEFEF'}
                                    />
                            </View>
                        </View>
                    </View>
                    <View style ={{flex:1}}>
                        <Image
                        source = {require('../assets/images/animal1.png')}
                        style = {styles.animalImage}
                        ></Image>
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
            backgroundColor : '#F7F7FC',
            marginHorizontal : 15,
            marginBottom : 15
        },
        swag : { 
          marginTop : 61,
          flex: 0.3,
          justifyContent : "center",
        },
        swagtext:{
            fontFamily: "NanumSquareEB",
            fontStyle: "normal",
            fontSize: 17,
            textAlign: "center",
          },
        title:{
            position: 'absolute',
            top : 80,
            fontSize: 17,
            color: '#4F4F4F',
            alignSelf:'center',
            fontFamily : 'NanumSquareEB',
        },
        calendarContainer:{
            flex : 6, 
            marginBottom :10,
            backgroundColor:'#F7F7FC'
        },
        text: {
            fontSize : 13,
            textAlign : 'center',
            fontFamily : 'NanumSquareB',
            color : 'white'   
        },
        textDark: {
            fontSize : 13,
            textAlign : 'center',
            fontFamily : 'NanumSquareB',
            color : "#6E7191"   
        },
        textHeader:{
            fontFamily: 'NanumSquareEB',
            fontSize: 21,
            textAlign: 'center',
            color: '#2C01A6' 
        },
        buttonClicked :{
            flex :1,
            backgroundColor : SWAG_PURPLE,
            justifyContent : 'center',
            borderRadius : 30,
            marginHorizontal: 10,
        },
        buttonContainer : {
            height : 25,
            flexDirection: 'row', 
            justifyContent : 'center',
            borderRadius : 30,
            marginTop: 15,
            marginBottom :20,
            marginHorizontal :100,
            
        },
        monthText :{
            fontSize : 18,
            textAlign : 'left',
            fontFamily : 'NanumSquareB',
            
        },
        heartImage :{
            height : '40%',
            width : '40%',
            margin : 5,
            alignSelf : 'center',
            resizeMode : 'contain' 
        },
        heartImageSmall :{
            height : '30%',
            width : '30%',
            alignSelf : 'center',
            resizeMode : 'contain' 
        },
        animalImage :{
            width : 100,
            height : null,
            flex :1,
            alignSelf : 'center',
            resizeMode : 'contain',
            //transform: [{rotateY: '180deg'}]
        },
        blockContainer :{
            flex:1,
            backgroundColor : '#FFF',
            borderRadius : 20,
            alignItems : 'center',
            margin : 10,
            marginTop : 20,
            borderWidth : 1,
            borderColor : '#D9DBE9'
        },
        longBlockContainer :{
            flex:0.8,
            alignItems : 'center' ,
            flexDirection : "row",
            backgroundColor : '#FFF',
            borderRadius : 20,
            marginLeft : 10,
            marginRight : 10,
            borderWidth : 1,
            borderColor : '#D9DBE9'
        }
    }
)

export default Report;