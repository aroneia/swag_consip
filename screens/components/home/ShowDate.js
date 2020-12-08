import React from 'react'; 
import {View,Text, StyleSheet} from 'react-native';

const ShowDate = ({date}) => {
    //console.log(today);
    const message = `오늘은 ${date}입니다.`

    return (
            <Text style = {styles.text}>{message}</Text>
    )
}
const styles = StyleSheet.create({
    text : {
        fontSize : 17,
        fontFamily : 'NanumSquareEB',
        color : '#4E4B66',
        textAlign : 'left'
        
    }
})

export default ShowDate;