import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const MyPage = () => {
    return(
        <View style = {styles.container}>
        <View style = {styles.swag}>
                <Text style= {styles.swagtext}>SWAG</Text>
        </View>
        <View style = {{
            flex : 3,
            justifyContent: "center",
            alignItems: "center"}}>
                <View style = {{
                    height: 157,
                    width: 157,
                    backgroundColor: "#ffffff",
                    borderWidth : 5,
                    borderRadius : 157,
                    borderColor :"#2C01A6",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style = {{
                        fontSize : 50,
                        fontFamily : 'NanumSquareEB',
                    }}>일</Text>
                </View>
                <Text style = {{
                    marginTop: 20,
                    fontSize : 24,
                    fontFamily : 'NanumSquareEB',
                }}>
                    일소
                </Text>
                <Text style = {{
                    marginTop: 5,
                    fontSize : 17,
                    fontFamily : 'NanumSquareR',
                }}
                >since 2020</Text>

        </View>

        <View style = {{
        marginLeft: 16,
        marginRight: 16,
        borderTopWidth : 1,
        borderTopColor : "#D9DBE9",
        flex : 1}}>
            <View style= { {flexDirection:"row",justifyContent:"space-between",flex:3} }> 
            <Text style = {styles.text}>앱 버전</Text>
            <Text style = {styles.text}>ver. 1.0 (20201214)</Text>
            </View>

            <View style= { {flexDirection:"row",justifyContent:"space-between"} }>             
            <Text style = {styles.text}>문의하기</Text>
            <Text style = {styles.text}>workingcows@gmail.com</Text>
            </View>
            <Text style = {[styles.text,{alignSelf:"flex-end",color:"#A0A3BD"}]}>copyright@workingcows</Text>
        </View >
 
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container :{
            flex : 1,
            justifyContent : 'center',
            backgroundColor: '#F7F7FC'
        },
        swag : { 
          marginTop : 45.25,
          flex: 0.3,
          justifyContent : "center",
        },
        swagtext:{
            fontFamily: "NanumSquareEB",
            fontStyle: "normal",
            fontSize: 17,
            textAlign: "center",
          },
        text : {
            marginTop: 20,
            marginBottom: 20,
            fontSize: 17,
            color: "#4E4B66",
            fontFamily : 'NanumSquareR',

        }

    }
)

export default MyPage;