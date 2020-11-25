import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
import PostBlock from './components/home/PostBlock'

const SWAG_PURPLE = '#5235BB';

const PostBox = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style= {{flex :0.5, flexDirection : 'row'}}>
                <Text style={{flex :1, backgroundColor : 'red',paddingTop : 10 }}>뒤로가기</Text>
                <View style = {{flex : 3}}></View>
            </View>
            <View style ={{flex :0.5}}>
                <Text style = {styles.text_title}>우체통</Text>
            </View>
            <View style ={styles.postblock_container}>
                <PostBlock />
                <PostBlock />
                <PostBlock />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        paddingTop: 60
    },
    postblock_container:{
        flex :5
    },
    text_title : {
       
        fontSize : 25,
        fontFamily : 'NanumSquareEB',
        color : '#5235BB',
        marginLeft : 10,
        textAlign : 'left'
      },
})

export default PostBox;
