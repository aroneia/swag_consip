import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import ProgressBar from 'react-native-progress/Bar'
 
const lectureName = "브랜드스토리텔링";
const lectureTimeLeft = 2;
const SWAG_PURPLE = '#5235BB';

//time data 받아오는거 추가 해야함
const getProgress = () => {
    const totalTime = 2;
    const currTime = 0.5;
    const progress = currTime / totalTime ;

    return progress;
}

const MainBlock = () => {
    return(
        <View style = {styles.mainBlock} >
            <View style = {{flex :2, justifyContent : 'center', marginTop : 35}}>
                <Text style = {styles.text_body_highlight}>아직은
                {"\n"}<Text style = {{fontFamily : 'NanumSquareEB'}}>{lectureName}</Text>
                </Text>
                <Text style = {styles.text_body}>수업시간 <Text style= {{fontFamily : 'NanumSquareEB'}}>{lectureTimeLeft}시간 전</Text> </Text>
            </View>
            <View style = {{flex:1, flexDirection : 'row'}}>
                <View style ={styles.progressBar}>
                    <ProgressBar 
                    progress= {getProgress()} 
                    width={250}
                    height = {25}
                    borderRadius ={0} borderWidth = {0}
                    color = {SWAG_PURPLE}
                    unfilledColor ={'#EFEFEF'}
                    />
                </View>

                <View style ={styles.imageContainerL}>
                <ImageBackground
                    source = {require('../../../assets/icons/circleButtonOff.png')} 
                    style ={styles.buttonImageStart}>
                    <Text style ={{ textAlign : 'center', color : '#BDBDBD', fontFamily : 'NanumSquareB', fontSize : 20}}>시작</Text>
                </ImageBackground>
     
                </View>
                <View style ={{flex :1}}></View>
                <View style = {styles.imageContainerR}>
                <ImageBackground
                    source = {require('../../../assets/icons/circleButtonOff.png')} 
                    style ={styles.buttonImageEnd}
                    >
                 <Text style ={{ textAlign : 'center', color : '#BDBDBD', fontFamily : 'NanumSquareB', fontSize : 20}}>종료</Text>
                </ImageBackground>
                </View>
            </View>
            
            <View style = {{flex: 4, justifyContent : 'flex-end' }}>
            <Image
                style = {styles.animal}
                source={require('../../../assets/images/alien1.png')}
                resizeMode="contain"
            />
            </View>
        </View>)
}



const styles = StyleSheet.create({
    mainBlock :{
        aspectRatio: 1.07,
        backgroundColor : '#FFF',
        borderRadius : 32,
        borderColor : '#D9DBE9',
        borderWidth : 1,
     
    },
    text_body :{
        color : '#5235BB',
        fontSize : 20,
        textAlign: 'center'
    },
    text_body_highlight :{
        color : '#5235BB',
        fontSize : 20,
        textAlign: 'center',
    },
    imageContainerL:{
        width : 90,
        aspectRatio : 1,
        marginLeft : 15
    },
    imageContainerR:{
        width : 90,
        aspectRatio : 1,
        marginRight: 15
    },
    buttonImageStart: {
        width : null,
        height: null,
        flex: 1,
        resizeMode : 'contain', 
        justifyContent: 'center',
        zIndex :1
    },
    progressBar :{
        zIndex :0,
        position: 'absolute',
        top: 40, left: 0, right: 0, bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonImageEnd: {
        width : null,
        height: null,
        flex: 1,
        resizeMode : 'contain',
        justifyContent: 'center',
        zIndex :1       
        
    },
    animal:{
        height: 150,
        width: undefined,
        alignSelf : 'stretch',
        marginBottom :10 
        
    }


});

export default MainBlock;