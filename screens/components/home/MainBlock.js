import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import ProgressBar from 'react-native-progress/Bar'
 

const text_now = "NOW"
const lectureName = "브랜드스토리텔링";
const lectureTimeLeft = 2;
const SWAG_PURPLE = '#5235BB';

//time data 받아오는거 추가 해야함
const getProgress = () => {
    const totalTime = 1;
    const currTime = 0.5;
    const progress = currTime / totalTime ;

    return progress;
}

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
            <View style = {{flex:2, flexDirection : 'row'}}>
                <View style ={styles.imageContainerL}>
                <ImageBackground
                    source = {require('../../../assets/icons/circleButtonOn.png')} 
                    style ={styles.buttonImageStart}>
                    <Text style ={{ textAlign : 'center', color : '#FFF', fontFamily : 'NanumSquareB', fontSize : 20}}>시작</Text>
                </ImageBackground>
     
                </View>
                <View style ={styles.progressBar}>
                    <ProgressBar 
                    progress= {getProgress()} 
                    width={200}
                    height = {50}
                    borderRadius ={0} borderWidth = {0}
                    color = {SWAG_PURPLE}
                    unfilledColor ={'#EFEFEF'}
                    />
                </View>

                <View style = {styles.imageContainerR}>
                <ImageBackground
                    source = {require('../../../assets/icons/circleButtonOff.png')} 
                    style ={styles.buttonImageEnd}
                    >
                 <Text style ={{ textAlign : 'center', color : '#BDBDBD', fontFamily : 'NanumSquareB', fontSize : 20}}>종료</Text>
                </ImageBackground>
                </View>

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
    imageContainerL:{
        flex : 0.4,
        aspectRatio : 1,
        backgroundColor : 'yellow',
        marginLeft : 10
    },
    imageContainerR:{
        flex : 0.4,
        aspectRatio : 1,
        backgroundColor : 'yellow',
        marginRight: 10
    },
    buttonImageStart: {
        width : null,
        height: null,
        flex: 1,
        resizeMode : 'contain', 
        justifyContent: 'center',
    },
    progressBar :{
        flex : 1,
        justifyContent : 'center',
        backgroundColor : 'orange',
    },
    buttonImageEnd: {
        width : null,
        height: null,
        flex: 1,
        resizeMode : 'contain',
        justifyContent: 'center'          
        
    },
    animal:{
        height: 150,
        width: undefined,
        alignSelf : 'stretch',
        marginBottom : 80 
        
    }


});

export default MainBlock;