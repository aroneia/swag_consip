import React from 'react';
import {View, Text,Button, StyleSheet,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'
import ProgressCircle from 'react-native-progress-circle'

const LectureMode = ({navigation}) => {
      
    return(
        <View style = {styles.container}>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity
                    style = {{flex:1, justifyContent : 'center'}}
                    title="to Report Calendar"
                    onPress={() => navigation.navigate('Report')}
                >
                    <Text style ={styles.textDark}>캘린더모드</Text>
                </TouchableOpacity>
                
                <View style ={styles.buttonClicked}>
                    <Text style ={styles.text}>강의모드</Text>
                </View>
    
            </View>
            <Text style={{fontSize:20, marginLeft:20}} >현재 강의</Text>
            <View style={styles.back}>
                
            <CardView
                    style={{
                    backgroundColor: '#ffffff',
                    padding:10,
                    margin:10,
                    width:110,
                    height:162
                    }}  
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={10}>
                     <Text style={{fontSize:15, paddingBottom:15,textAlign:'center'}} onPress={()=>{
                            navigation.navigate('Lecturedetail');}
                        }> 콘텐츠시스템 프로젝트</Text>
                     <ProgressCircle
                        percent={38}
                        radius={45}
                        borderWidth={8}
                        color="#552DEC"
                        shadowColor="#D9DBE9"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 18 }}>{'38%'}</Text>
                    </ProgressCircle>
            </CardView>
            <CardView
                    style={{
                    backgroundColor: '#ffffff',
                    padding:10,
                    margin:10,
                    width:110,
                    height:162
                    }}  
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={10}>
                     <Text style={{fontSize:15,paddingBottom:15, textAlign:'center'}} > 융합콘텐츠캡스톤디자인2</Text>
                     <ProgressCircle
                        percent={48}
                        radius={45}
                        borderWidth={8}
                        color="#552DEC"
                        shadowColor="#D9DBE9"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 18 }}>{'48%'}</Text>
                    </ProgressCircle>
            </CardView>
            <CardView
                    style={{
                    backgroundColor: '#ffffff',
                    padding:10,
                    margin:10,
                    width:110,
                    height:162
                    }}  
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={10}>
                     <Text style={{fontSize:15,paddingBottom:15, textAlign:'center'}}> 브랜드스토리텔링</Text>
                     <ProgressCircle
                        percent={48}
                        radius={45}
                        borderWidth={8}
                        color="#552DEC"
                        shadowColor="#D9DBE9"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 18 }}>{'48%'}</Text>
                    </ProgressCircle>
                     {/* <Image
                        style = {styles.percet}
                        source={require('../assets/icons/perc.png')}
                        resizeMode="contain"
                    ></Image> */}
            </CardView>
            </View>
            <View style={styles.footer}>
            </View>
        </View>
        
        
        
    );
}


const styles = StyleSheet.create(
    {
        container :{
            flex : 1,
            paddingTop : 80,
            backgroundColor : '#ffffff'
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
            color : SWAG_PURPLE   
        },
        buttonClicked :{
            flex :1,
            backgroundColor : SWAG_PURPLE,
            justifyContent : 'center',
            borderRadius : 30
        },
        buttonContainer : {
            flex:0.4, flexDirection: 'row', 
            backgroundColor : LIGHT_PURPLE,
            justifyContent : 'center',
            borderRadius : 30,
            marginBottom :20,
            marginHorizontal :20,
            
        },
        
        back:{
            flex:1,
            backgroundColor : '#F7F7FC',
            
            flexDirection:'row'
        },
        content:{
            flex:1,
            fontFamily : 'NanumSquareB',
            backgroundColor:'#f5a942',
        },
        footer:{
            height:50,
            backgroundColor:'#4fbc7a',
        },
        percet:{
            marginTop: 20,
            marginLeft:8,
            width:80,
            height:80
        },
        cc:{
            shadowColor: '#470000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.2,
            elevation: 1,
        }
    }
)

export default LectureMode;