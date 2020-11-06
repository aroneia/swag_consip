import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { backgroundColor } from 'react-native-calendars/src/style';
import {createStackNavigator} from '@react-navigation/stack'
import LectureMode from './LectureMode'


const swagPurple = '#5235BB';
const lightPurple = 'rgba(82, 53, 187, 0.09)';

const Report = ({navigation}) => {   
    return(
        <View style = {styles.container}>
        <Button
        style = {{flex:1}}
        title="to Lecture"
        onPress={() =>
          navigation.navigate('LectureMode')
        }
      />
        <View style = {styles.buttonContainer}>
            <View style ={styles.buttonClicked}>
                <Text style ={styles.text}>캘린더모드</Text>
            </View>
            <View style ={{flex:1, justifyContent : 'center'}}>
                <Text style ={styles.textDark}>강의모드</Text>
            </View>  
        </View>
        <Calendar
        hideDayNames ={true}
        theme={{
            arrowColor: swagPurple,
            monthTextColor: swagPurple,
            dayTextColor: swagPurple,
            indicatorColor: swagPurple,
            textDayFontFamily: 'NanumSquareB',
            textMonthFontFamily: 'NanumSquareB',
        }}
        //monthFormat={'yyyy MM'}
        renderHeader={(date) => {
           return(<Text>hi</Text>)
        }}
        // Date marking style [simple/period/multi-dot/single]. Default = 'simple'
        markingType={'custom'}
        markedDates={{
            '2020-11-05': {
            customStyles: {
                container: {
                backgroundColor: '#E3DBFF'
                },
                text: {
                color: 'black',
                }
            }
            },
            '2020-11-21': {
            customStyles: {
                container: {
                backgroundColor: 'white',
                elevation: 2
                },
                text: {
                color: 'blue'
                }
            }
            }
        }}
        /> 
        <View style = {{flex: 2, flexDirection: 'row'}}>
            <View style ={{flex:1,backgroundColor:'red'}}>
            </View>
            <View style ={{flex:2,backgroundColor:'yellow', flexDirection: 'column'}}>
                <View style ={{flex:2,backgroundColor:'yellow'}}></View>
                <View style ={{flex:1,backgroundColor:'blue'}}></View>
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
            backgroundColor : 'white'
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
            color : swagPurple   
        },
        buttonClicked :{
            flex :1,
            backgroundColor : swagPurple,
            justifyContent : 'center',
            borderRadius : 30
        },
        buttonContainer : {
            flex:0.4, flexDirection: 'row', 
            backgroundColor : lightPurple,
            justifyContent : 'center',
            borderRadius : 30,
            marginBottom :20,
            marginHorizontal :20,
            
        }
    }
)

export default Report;