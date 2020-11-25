import React, {useState} from 'react'; 
import {View,Text, StyleSheet} from 'react-native';

const ShowDate = () => {
    const today = new Date();
    const currentDate = today.getDate();
    const currentDay = today.getDay();
    console.log(today.getDay());
    const currentMonth = today.getMonth() + 1;
    const days = ["일요일","월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

    const dateString = currentMonth + "월 " + currentDate + "일 " + days[currentDay]
    
    const [date, setDate] = useState(dateString);
    console.log("inside showdate current month is :" + currentMonth);
    //console.log(today);
    const message = `오늘은 ${date}입니다.`

    return (
        <View>
            <Text style = {styles.text}>{message}</Text>
        </View>    
    )
}
const styles = StyleSheet.create({
    text : {
        fontSize : 20,
        fontFamily : 'NanumSquareEB',
        color : '#4E4B66',
        textAlign : 'left'
        
    }
})

export default ShowDate;