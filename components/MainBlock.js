import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const text_now = "NOW"
const lectureName = "브랜드스토리텔링";
const lectureTimeLeft = 2;

const MainBlock = () => {
    return(
        <View style = {styles.mainBlock} >
            <View style ={{flex:1,paddingTop : 30}}>
                <Text style = {styles.text_bold}>{text_now}</Text>
            </View>
            <View style = {{flex :2, justifyContent : 'center', backgroundColor : 'yellow'}}>
                <Text style = {styles.text_body}>아직은
                {"\n"}<Text style = {{fontFamily : 'NanumSquareEB'}}>{lectureName}</Text>
                </Text>
                <Text style = {styles.text_body}>수업시간 <Text style= {{fontFamily : 'NanumSquareEB'}}>{lectureTimeLeft}시간 전</Text> </Text>
            </View>
            <View style = {{flex:2,  backgroundColor : 'grey'}}>
                <Text style = {{justifyContent : 'center', textAlign: 'center',}}> 수업시작 끝 버튼</Text>
            </View>
            <View style = {{flex:5}}>
                <Text style = {styles.text_body}> 캐릭터 이미지</Text>
            </View>
        </View>)
}



const styles = StyleSheet.create({
    mainBlock :{
        aspectRatio: 0.8,
        backgroundColor : '#F2F2F2',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35
    },
    text_bold :{
        color : '#5235BB',
        fontFamily : 'NanumSquareEB',
        fontSize : 30,
        //backgroundColor : 'red'
    },
        text_body :{
        color : '#5235BB',
        fontSize : 30,
        textAlign: 'center',
    }


});

export default MainBlock;