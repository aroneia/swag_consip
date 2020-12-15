import React,{useState} from 'react';
import {View, StyleSheet,Text, Image, TouchableOpacity,Modal} from 'react-native';
import Dash from 'react-native-dash';
import data from '../../../json/lecture.json';


function read_lectname(){

    let fin = [];   
    
    let len = Object.keys(data.lectureList).length;
    for(let i=0;i<len;i++){
        console.log(data.lectureList[i].name);
        fin.push(data.lectureList[i].name);
    }
    // var keylen = Object.keys(data.lectureList[an].keywords).length;
    // for(var i=0;i<keylen;i++){
    //         ret= [];
    //         ret.push(data.lectureList[an].keywords[i].date.substring(4,6));
    //         ret.push(data.lectureList[an].keywords[i].date.substring(6,8));
    //         ret.push(data.lectureList[an].keywords[i].key1);
    //         ret.push(data.lectureList[an].keywords[i].key2);
    //         ret.push(data.lectureList[an].keywords[i].key3);
    //         //console.log(ret);
    //         fin.push(ret);
    // }

    return fin;
}

const checkLength =(name) => {
    if (name.length > 6) {
        const sliced = `${name.slice(0,7)}...`;
        return sliced
    }
    return name;
}


const Block = () => {

    
    const lectname = read_lectname();

    const show_name = () => {
        return lectname.map((el,i) => 

        <TouchableOpacity 
        style ={styles.container}
        key = {i}
        >
            <View style = {{flex:1, alignItems : 'center', justifyContent: 'center'}}>
            <Image
                    style ={styles.stamp}
                    source={require('../../../assets/icons/circleButtonOff.png')}
                    resizeMode = "contain"
                    >
                </Image>
            </View>
            <View style={{flex: 0.5}}>
                <Text style = {styles.textname}>{checkLength(lectname[i])}</Text>
                <Text style = {styles.texttime}>11:00</Text>
            </View>
        </TouchableOpacity>
           
        
    )
    }



    return(
        <View>
            <View style={{flexDirection:'row'}}>
                {show_name()}
            </View>
        </View>   
            
    );
}

const styles = StyleSheet.create({
    container :{
        width: 123,
        aspectRatio: 11/15,
        marginRight : 7,
        backgroundColor : '#FFF',
        borderRadius : 16,
        borderWidth :1,
        borderColor : '#D9DBE9'
        
    },
    stamp:{
        width : 66,
        height : 66,
        aspectRatio: 1,
    },
    blockImage : {
        width : '100%',
        height : '100%',
        //boxShadow: 4px 4px 5px 'rgba(0, 0, 0, 0.2)',
        //borderRadius: 20
    },
    textname : {
        fontSize :13,
        textAlign : "center",
        fontFamily : "NanumSquareEB",
        color : "#4E4B66"
    },
    texttime : {
        fontSize :17,
        textAlign : "center",
        fontFamily : "NanumSquareR",
        color : "#4E4B66",
        marginBottom : 7 
    }
    
})

export default Block;