import React from 'react'
import { View, Text,  StyleSheet } from 'react-native';

const AilenFriend = () => {
    return (
        <View style = {styles.container}>
            <Text style= {{fontSize : 100, textAlign : 'center',}}>편지함</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        
        justifyContent : 'center'

    }
})

export default AilenFriend;
