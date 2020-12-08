import React from 'react'
import { View, Text,  StyleSheet, TouchableOpacity, Image } from 'react-native';

const AilenFriend = ({animal, navigation}) => {
    return (
        <View style = {styles.container}>
            <View style ={{flex :0.5, flexDirection : "row", alignItems : 'center'}}>
                <TouchableOpacity
                style = {{flex:1, justifyContent : 'center'}}
                title="to PostBox"
                onPress={() => navigation.navigate('PostBox')}
                >
                <Image 
                style = {styles.backIcon}
                source = {require('../assets/icons/Backarrow.png')}/>
            </TouchableOpacity>
                <Text style = {styles.text_title}>편지함</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        paddingTop: 60,
        paddingHorizontal : 10,
        backgroundColor:'#F7F7FC'
    },
    line : {
        borderBottomWidth : 1,
        borderColor : '#D9DBE9'
    },
    text_title : {
        flex : 1,
        fontSize : 17,
        fontFamily : 'NanumSquareEB',
        color : '#14142A',
        marginLeft : 10,
        textAlign : 'left'
      },
      backIcon :{
        aspectRatio : 1,
        alignSelf: 'stretch',
        width : 50,
        height :50
    },
})

export default AilenFriend;
