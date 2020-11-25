import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const MyPage = () => {
    return(
        <View style = {styles.container}>
        <Text style = {styles.text}> 계정설정 </Text>
        <TouchableOpacity>
            <View style = {{backgroundColor: 'purple', flex :1}}></View>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container :{
            flex : 1,
            justifyContent : 'center'
        },
        text: {
            fontSize : 50,
            textAlign : 'center'
        }
    }
)

export default MyPage;