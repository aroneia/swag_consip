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
                        onPress={() => navigation.navigate('AilenFriend')}>
                        
                        <Image source = {require('../../../assets/images/alien1.png')}
                        style = {styles.animal}
                        />
                        <Text style = {styles.title}>{animal.name}</Text>
                        <Text style = {styles.text}>{animal.month}월의 친구</Text>
                    </TouchableOpacity>
                </View>
            ))}
            <View style = {styles.postBlock}>
                    <Text style = {styles.title}>???</Text>
                    <Text style = {styles.text}>11월의 친구</Text>
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
    title : {
        fontFamily : 'NanumSquareEB',
        fontSize : 20,
        color : '#4E4B66'
    },
    text :{
        fontFamily : 'NanumSquareB',
        fontSize : 15,
        color : '#4E4B66'
    },
    animal:{
        aspectRatio : 1,
        height: 90,
        width : 90,
        margin : 10
    }
})

export default PostBlock;