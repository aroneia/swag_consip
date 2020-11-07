import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

const LectureMode = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity
                    style = {{flex:1, justifyContent : 'center'}}
                    title="to Report Calendar"
                    onPress={() => navigation.navigate('Report')}
                >
                    <Text style ={styles.textDark}>캘린더모드</Text>
                </TouchableOpacity>
                
                <View style ={styles.buttonClicked}>
                    <Text style ={styles.text}>강의모드</Text>
                </View>
        </View>
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
            fontSize : 18,
            textAlign : 'center',
            fontFamily : 'NanumSquareB',
            color : 'white'  
        },
        textDark: {
            fontSize : 18,
            textAlign : 'center',
            fontFamily : 'NanumSquareB',
            color : SWAG_PURPLE   
        },
        buttonClicked :{
            flex :1,
            backgroundColor : SWAG_PURPLE,
            justifyContent : 'center',
            borderRadius : 30
        },
        buttonContainer : {
            flex:0.4, flexDirection: 'row', 
            backgroundColor : LIGHT_PURPLE,
            justifyContent : 'center',
            borderRadius : 30,
            marginBottom :20,
            marginHorizontal :20,
            
        }
    }
)

export default LectureMode;