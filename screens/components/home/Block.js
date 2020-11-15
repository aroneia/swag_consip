import React from 'react';
import {View, ImageBackground, StyleSheet,Text} from 'react-native';
import Dash from 'react-native-dash'

const Block = () => {
    return (
        <View style ={styles.container}>
            <ImageBackground
            style = {styles.blockImage}
            source = {require('../../../assets/images/block.png')} >
            <View style = {{flex:1}}></View>
            <Dash dashGap ={5} dashColor ={'#5235BB'}/>
            <View style={{flex: 0.5}}>
                <Text style = {{textAlign : 'center'}}>브랜드스토리텔링</Text>
                <Text style = {{textAlign : 'center'}}>11:00</Text>
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        aspectRatio: 0.74,
        marginRight : 10,
        marginLeft : 5,
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