import React from 'react';
import { View,Text, StyleSheet, Image } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
import * as dummydata from '../../../json/calendar_dummy.json'

const progress =  dummydata.takenLecture /dummydata.totalLecture ;

const PostBlock = ({animals, navigation}) => {
    //const nextMonth = animals[animals.length-1].month +1;
    return(
        <View>
        <View style ={styles.container}>
            {animals.map(animal => (
                <View key = {animal.id} style = {styles.postBlock}>
                    <TouchableOpacity 
                        style = {{alignItems : 'center'}}
                        title="to AilenFriend"
                        onPress={() => navigation.navigate('AilenFriend',animal)}>
                        <View style = {styles.animalContainer}>
                        <Image source = {require('../../../assets/images/alien1.png')}
                        style = {styles.animal}
                        />
                        </View>
                       
                        <Text style = {styles.title}>{animal.name}</Text>
                     
                        <Text style = {styles.text}>{animal.month}월의 친구</Text>
                    </TouchableOpacity>
                </View>
            ))}
            <View style = {styles.postBlockGray}>
                    <View style = {styles.animalContainer}>
                    <Image source = {require('../../../assets/images/friend_unknown.png')}
                    style = {styles.animal_unknown}/>
                    </View>
                    <Text style = {styles.titleGray}>???</Text>
                    <Text style = {styles.textGray}>11월의 친구</Text>
            </View>
        </View>
        </View>
        )
    
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection : "row",
    },
    postBlock :{
        flex :1,
        height : 153,
        aspectRatio: 110/153,
        borderWidth :1,
        borderColor : '#5235BB',
        borderRadius : 16,
        backgroundColor : '#FFF',
        margin :5,
        justifyContent : 'center',
        alignItems: 'center',
        textAlign : 'center'
    },
    postBlockGray :{
        flex :1,
        height : 153,
        aspectRatio: 110/153,
        borderWidth :1,
        borderColor : '#D9DBE9',
        borderRadius : 16,
        backgroundColor : '#FFF',
        margin :5,
        justifyContent : 'center',
        alignItems: 'center',
        textAlign : 'center'
    },
    animalContainer : {
        flex : 3, 
        justifyContent : 'center',
        alignContent : 'center'
    },
    title : {
        fontFamily : 'NanumSquareEB',
        fontSize : 15,
        color : '#2C01A6',
    },
    text :{
        fontFamily : 'NanumSquareB',
        fontSize : 11,
        color : '#2C01A6',
        flex : 1
        
    },
    titleGray : {
        fontFamily : 'NanumSquareEB',
        fontSize : 15,
        color : '#4E4B66',
    },
    textGray :{
        fontFamily : 'NanumSquareB',
        fontSize : 11,
        color : '#4E4B66',
        flex : 1
        
    },
    animal_unknown:{
        aspectRatio : 64/75,
        height: 75,
        width : 64,
        margin : 10,
   
    },
    animal :{
        aspectRatio : 1,
        height : 70,
      
    }
})

export default PostBlock;