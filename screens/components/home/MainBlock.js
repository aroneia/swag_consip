import React,{useState} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground,TouchableOpacity} from 'react-native';
import ProgressBar from 'react-native-progress/Bar'
import InsertMemo from '../home/InsertMemo'

const lectureName = "브랜드스토리텔링";
const lectureTimeLeft = 2;
const SWAG_PURPLE = '#5235BB';



//time data 받아오는거 추가 해야함

const MainBlock = ({currentlecture, now}) => {
    const [ visible, setvisible] = useState(false);

    
    const getProgress = () => {

        if (currentlecture = undefined){
            console.log("current lecture is undefined");
            return 0;
        }        
        const calculateTime = (hour, min) => {
            return(Number(hour) * 60 + Number(min));}
        /*
        const end = calculateTime(currentlecture.Time[2],currentlecture.Time[3]);
        const start = calculateTime(currentlecture.Time[1],currentlecture.Time[0]);
        const totalTime = end - start;
        const currTime = now - calculateTime(currentlecture.Time[0], currentlecture.Time[1])
        const progress = currTime / totalTime ;
        console.log(currentlecture.Time);*/
        const progress = 0.5;
        return progress;
    
    }
    return(
        <View style = {styles.mainBlock} >
            <View style = {{flex :2, justifyContent : 'center', marginTop : 35}}>
                <Text style = {styles.text_body_highlight}>아직은
                {"\n"}<Text style = {{fontFamily : 'NanumSquareEB'}}>{lectureName}</Text>
                </Text>
                <Text style = {styles.text_body}>수업시간 <Text style= {{fontFamily : 'NanumSquareEB'}}>{lectureTimeLeft}시간 전</Text> </Text>
            </View>
            <View style = {{flex:1, flexDirection : 'row',}}>
                <View style ={styles.progressBar}>
                    <ProgressBar 
                    progress= {getProgress()} 
                    width={250}
                    height = {18}
                    borderRadius ={0} borderWidth = {0}
                    color = {SWAG_PURPLE}
                    unfilledColor ={'#EFEFEF'}
                    />
                </View>

                <View style ={styles.imageContainerL}>
                <ImageBackground
                    source = {require('../../../assets/icons/circleButtonOff.png')} 
                    style ={styles.buttonImageEnd}
                    >
                    <Text style ={styles.buttonText}>시작</Text>
                </ImageBackground>
                    
                </View>

                <View style ={{flex :1}}></View>
                <TouchableOpacity 
                style = {styles.imageContainerR}
                onPress = {() => {setvisible(!visible)}}>
                <ImageBackground
                    source = {require('../../../assets/icons/circleButtonOff.png')} 
                    style ={styles.buttonImageEnd}
                    >
                 <Text style ={styles.buttonText}>종료</Text>
                </ImageBackground>
                </TouchableOpacity>
            </View>
            
            <View style = {{flex: 4, justifyContent : 'center' }}>
            <Image
                style = {styles.animal}
                source={require('../../../assets/images/alien1.png')}
                resizeMode="contain"
            />
            </View>{visible && <InsertMemo isvisible = {visible} setvisible ={setvisible} lectureName = {lectureName}/>}
        </View>)
}



const styles = StyleSheet.create({
    mainBlock :{
        backgroundColor : '#FFF',
        borderRadius : 32,
        borderColor : '#D9DBE9',
        borderWidth : 1,
        height : '94%',
        aspectRatio: 343/316,
     
    },
    text_body :{
        color : '#5235BB',
        fontSize : 16,
        textAlign: 'center',
        lineHeight: 22
    },
    text_body_highlight :{
        color : '#5235BB',
        fontSize : 16,
        textAlign: 'center',
        lineHeight: 22
    },
    imageContainerL:{
        width : 60,
        marginLeft : 24,
        aspectRatio : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    imageContainerR:{
        width : 60,
        aspectRatio : 1,
        marginRight: 24,
        alignItems : 'center',
        justifyContent : 'center'
    },
    buttonText:
    {   textAlign : 'center',
        color : '#6E7191',
        fontFamily : 'NanumSquareB',
        fontSize : 14
    },
  
    progressBar :{
        zIndex :0,
        position: 'absolute',
        top: 14, left: 0, right: 0, bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonImageEnd: {
        width : 60,
        height : 60,
        aspectRatio :1,
        flex: 1,
        resizeMode : 'contain',
        justifyContent: 'center',
        zIndex :1       
        
    },
    animal:{
        height: 101,
        width: undefined,
        alignSelf : 'stretch'
        
    }


});

export default MainBlock;