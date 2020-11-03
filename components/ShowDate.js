import React, {useState, useEffect} from 'react'; 
import {View,Text, StyleSheet} from 'react-native';

const ShowDate = () => {
    const today = new Date();
    const currentDate = today.getDate();
    const currentDay = today.getDay();
    const currentMonth = today.getMonth() + 1;
    const days = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];

    const dateString = currentMonth + "월 " + currentDate + "일 " + days[currentDay]
    
    const [date, setDate] = useState(dateString);
    console.log("month " + currentMonth);
    //console.log(today);
    
    return (
        <View>
            <Text style = {styles.text}>{date}</Text>
        </View>    
    )
}
const styles = StyleSheet.create({
    text : {
        fontSize : 20,
        fontFamily : 'NanumSquareEB',
        color : '#fff'
        
    }
})

export default ShowDate;