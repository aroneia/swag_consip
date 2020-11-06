import React from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import Report from './Report'

const LectureMode = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <Button
            style = {{flex:1}}
            title="to Report"
            onPress={() =>
            navigation.navigate('Report')
            }/>
            <Text style = {styles.text}> lecturemode </Text>
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

export default LectureMode;