import React from 'react'
import { View, Text,  StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import ProgressBar from 'react-native-progress/Bar'
import Moment from 'moment';


const AilenFriend = ({route,navigation}) => {
    const { name, month,friendship,image, message } = route.params; 
    const message_rev = message.reverse()
    return (
        <View style = {styles.container}>

            <View style ={{flex :0.5, flexDirection : "row", alignItems : 'center'}}>
                <TouchableOpacity
                style = {{justifyContent : 'center'}}
                title="to PostBox"
                onPress={() => navigation.navigate('PostBox')}
                >
                <Image 
                style = {styles.backIcon}
                source = {require('../assets/icons/Backarrow.png')}/>
                </TouchableOpacity>
                <Text style = {styles.text_title}>편지함</Text>
            </View>

            <View style = {{flex:1.5,flexDirection : "row"}}>
       
                <Image 
                style = {styles.animal}
                source = {image}/>
                
                <View style = {{flex:2,marginLeft:8,marginTop:10}}>
                    <Text style = {{fontSize:17,fontFamily:'NanumSquareEB',marginBottom:5}}>{name}의 편지</Text>
                    <Text style = {{fontSize:13, fontFamily:'NanumSquareR',marginBottom:2}}>2020년 {month}월에 함께했던 친구 {name}예요.</Text>
                    <Text style = {{fontSize:13, fontFamily:'NanumSquareR'}}>행복하게 공부했던 그날을 그리워하고 있어요.</Text>
                    <View style ={styles.longBlockContainer}>
                            <Text style= {{flex : 0.8, textAlign : 'center'}}>친밀도</Text>
                            <View style = {{flex : 3, alignItems : 'center'}}>
                                <Image 
                                source = {require('../assets/icons/singleheart.png')}
                                style = {styles.heartImageSmall}
                                ></Image>
                                <ProgressBar 
                                    style = {{height :10, marginTop :10}}
                                    progress= {friendship/100} 
                                    width={180}
                                    height = {10}
                                    borderRadius ={16} 
                                    borderWidth = {1}
                                    borderColor = {"#552DEC"}
                                    color = {"#B9A2FB"}
                                    unfilledColor ={'#EFEFEF'}
                                    />
                            </View>
                    </View>
                </View>
            </View>

            <View style = {styles.line}></View>

            <View style = {{flex: 6}}>
     
            <ScrollView 
            contentContainerStyle={{flexGrow: 1}}
            >
                <Text style = {styles.yeartext} > 2020</Text>
                <View style = {styles.messageview}>
                    {message_rev.map(message => (
                    <View style = {styles.messageitem}>
                        <Text style = {styles.messageyear}>{Moment(message.date).format("YYYY.MM.DD")}</Text>
                        <Text style = {styles.messagecontent}>{message.content}</Text>
                    </View>                    
                    ))
                    }
                </View>
            </ScrollView >
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        paddingTop: 60,
        paddingHorizontal : 15,
        backgroundColor:'#F7F7FC'
    },
    line : {
        borderBottomWidth : 1,
        borderColor : '#D9DBE9'
    },
    text_title : {
        fontSize : 17,
        fontFamily : 'NanumSquareEB',
        color : '#14142A',
        marginLeft : 10,
      },
    backIcon :{
        width : 50,
        height :50
    },
    longBlockContainer :{
        flex:0.8,
        alignItems : 'center' ,
        flexDirection : "row",
        backgroundColor : '#F7F7FC',
        borderRadius : 8,
        marginTop:10,
        borderWidth : 1,
        borderColor : '#D9DBE9'
    },
    heartImageSmall :{
        height : '30%',
        width : '30%',
        alignSelf : 'center',
        resizeMode : 'contain' 
    },
    yeartext  : {
        marginTop : 15,
        fontSize : 17,
        fontFamily : 'NanumSquareEB',
        color : '#14142A',

    },
    messageview : {
        flexDirection : "row",
        alignContent:"center",
        flexWrap: 'wrap',
    },
    messageitem :{
        marginHorizontal:8,
        padding : 15,
        paddingRight: 25,
        marginVertical: 10,
        borderRadius : 20,
        backgroundColor: '#ffffff',
        borderColor: "#D9DBE9",
        borderWidth : 1,
        height: 210,
        width: '45%',
        justifyContent : "flex-end"

    },
    messageyear : {
        fontFamily : 'NanumSquareB',
        fontSize : 12,
        color: '#14142A',
        marginVertical: 8
    },
    messagecontent : {
        fontFamily : 'NanumSquareB',
        fontSize : 18,
        color: '#4E4B66'
    },
    animal :{
        flex:0.8, 
        width: null,
        height: null,

        resizeMode: 'contain'
    }
})

export default AilenFriend;
