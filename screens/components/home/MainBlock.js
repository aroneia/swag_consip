import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

const text_now = "NOW"
const lectureName = "브랜드스토리텔링";
const lectureTimeLeft = 2;
const SWAG_PURPLE = '#5235BB';



const MainBlock = () => {
    return(
        <View style = {styles.mainBlock} >
            <View style ={{flex:1,paddingTop : 30}}>
                <Text style = {styles.text_title}>{text_now}</Text>
            </View>
            <View style = {{flex :2, justifyContent : 'center'}}>
                <Text style = {styles.text_body}>아직은
                {"\n"}<Text style = {{fontFamily : 'NanumSquareEB'}}>{lectureName}</Text>
                </Text>
                <Text style = {styles.text_body}>수업시간 <Text style= {{fontFamily : 'NanumSquareEB'}}>{lectureTimeLeft}시간 전</Text> </Text>
            </View>
            <View style = {{flex:2 , flexDirection : 'row'}}>
                <ImageBackground
                    source = {require('../../../assets/icons/circleButtonOn.png')} style ={styles.buttonImage}>
                </ImageBackground>
                <ImageBackground
                    source = {require('../../../assets/icons/circleButtonOff.png')} style ={styles.buttonImage}>
                </ImageBackground>

            </View>
            <View style = {{flex: 5, justifyContent : 'flex-end' }}>
            <Image
                style = {styles.animal}
                source={require('../../../assets/images/animal1.png')}
                resizeMode="contain"
            />
            </View>
        </View>)
}



const styles = StyleSheet.create({
    mainBlock :{
        aspectRatio: 0.8,
        backgroundColor : '#FFF',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35
    },
    text_title :{
        color : '#5235BB',
        fontFamily : 'NanumSquareEB',
        fontSize : 25,
        marginLeft : 20,
    },
        text_body :{
        color : '#5235BB',
        fontSize : 30,
        textAlign: 'center',
    },
    buttonImage: {
        flex :1,
        width : '50%',
        height: '50%',
        aspectRatio: 1
    },
    animal:{
        height: 150,
        width: undefined,
        alignSelf : 'stretch',
        marginBottom : 80 
        
    }


});

export default MainBlock;