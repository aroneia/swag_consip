import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Block = () => {
    return (
        <View style = {styles.block}>
        </View>
    )
}

const styles = StyleSheet.create({
    block : {

        aspectRatio: 0.8,
        marginRight : 10,
        marginLeft : 10,
        //flexDirection : 'row',
        backgroundColor : '#FFF',
        //borderColor : 'orange',
        //border: 1 solid #5235BB,
        
        //boxShadow: 4px 4px 5px 'rgba(0, 0, 0, 0.2)',
        //borderRadius: 20
    },
    text : {
        fontSize :20
    }
})

export default Block;