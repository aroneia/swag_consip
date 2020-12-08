import React from 'react'; 
import {View,Text, StyleSheet} from 'react-native';

const ShowDate = ({date}) => {
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