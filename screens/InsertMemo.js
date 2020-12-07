import React, {useState, useEffect} from 'react';
import { View,Text, StyleSheet, TextInput } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'


const SWAG_PURPLE = '#5235BB';

//
const InsertMemo = ({navigation}) => {


    return(
        <View style={styles.container}>
            <Text style={{fontSize:18}}>오늘자 000의 키워드를 남겨주세요. </Text>
            <View style={styles.keyword}>
               <Text style={styles.keywordText}>Keyword1</Text>
               <TextInput
               
                placeholder="키워드를 입력해주세요"
                placeholderTextColor="#A0A3BD"
                autoCapitalize="none"
               
                />
            </View>
            <View style={styles.keyword}>
               <Text style={styles.keywordText}>Keyword2</Text>
               <TextInput
               
                placeholder="키워드를 입력해주세요"
                placeholderTextColor="#A0A3BD"
                autoCapitalize="none"
               
                />
            </View>
            <View style={styles.keyword}>
               <Text style={styles.keywordText}>Keyword3</Text>
               <TextInput
               
                placeholder="키워드를 입력해주세요"
                placeholderTextColor="#A0A3BD"
                autoCapitalize="none"
               
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        textAlign:'center',
        paddingTop : 80,
        backgroundColor : '#F7F7FC'
    },
    keyword:{
        backgroundColor: '#EFF0F6',
        width: 291,
        height: 56,
        borderRadius:8,
        margin:14
        
    },
    keywordText:{
        color:'#552DEC',
        fontFamily : 'NanumSquareB',
        paddingBottom:10
    }
    
})

export default InsertMemo;
