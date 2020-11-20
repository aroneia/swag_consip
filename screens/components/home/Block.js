import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import Dash from 'react-native-dash'

const Block = () => {
    return (
        <View style ={styles.container}>
            <View style = {{flex:1}}></View>
            <View style={{flex: 0.5}}>
                <Text style = {{textAlign : 'center'}}>브랜드스토리텔링</Text>
                <Text style = {{textAlign : 'center'}}>11:00</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        aspectRatio: 11/15,
        marginRight : 10,
        marginLeft : 5,
        backgroundColor : '#FFF',
        borderRadius : 16,
        borderWidth :1,
        borderColor : '#D9DBE9'
    },
    blockImage : {
        width : '100%',
        height : '100%',
        //boxShadow: 4px 4px 5px 'rgba(0, 0, 0, 0.2)',
        //borderRadius: 20
    },
    text : {
        fontSize :20
    },
    
})

export default Block;