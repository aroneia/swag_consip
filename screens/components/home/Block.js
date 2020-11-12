import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Block = () => {
    return (

        <Image 
        style = {styles.block}
        source = {require('../../../assets/images/block.png')}
        />
    )
}

const styles = StyleSheet.create({
    block : {

        width: '30%',
        // Without height undefined it won't work
        height: undefined,
        // figure out your image aspect ratio
        aspectRatio: 0.74,
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