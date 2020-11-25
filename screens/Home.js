import React from 'react';
import {View, Text, StyleSheet ,ScrollView, Image} from 'react-native';
import Block from './components/home/Block'
import ShowDate from './components/home/ShowDate'
import MainBlock from './components/home/MainBlock'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = ({navigation}) => {
  return (
    <View style = {styles.container}>

      <View style = {{flex :0.4, justifyContent : 'flex-end'}}>
        <Text style = {styles.welcomeText}>안녕하세요 일소님!</Text>
      </View>
      
      <View style = {{flex :0.5,flexDirection: "row"}}>
          <View style = {styles.date}>
            <ShowDate />
          </View>
      
        <View style = {{flex :1, alignItems : 'flex-end', justifyContent : 'center'}}>
        <TouchableOpacity
                style = {{flex:1, justifyContent : 'center'}}
                title="to PostBox"
                onPress={() => navigation.navigate('PostBox')}
            >
          <Image
          style = {styles.letterIcon}
          source={require('../assets/icons/letter.png')}
          resizeMode="contain"
          ></Image>
         </TouchableOpacity>
        </View>
      </View >

    
      <View style= {{flex :0.5, justifyContent : 'center',marginTop : 5}}>
        <Text style = {styles.text_title}> TODAY </Text>
      </View>
      <View style = {{flex : 2}} >
      <ScrollView style = {styles.blocks} horizontal = {true}>
        <Block />
        <Block /> 
        <Block />
      </ScrollView>
      </View>
      <View style ={{flex:0.5, justifyContent: 'center', marginTop: 10}}>
                <Text style = {styles.text_title}>NOW</Text>
      </View>
      <View style = {styles.mainBlock}>
        <MainBlock />
      </View>
    </View>

    
  )
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    paddingTop : 60,
    backgroundColor : '#F7F7FC'
    
  },
  date :{
    flex :2.5, 
    marginLeft : 10,
    justifyContent : 'center'
    //backgroundColor:'yellow'
  },
  welcomeText :{
    fontSize : 20,
    fontFamily : 'NanumSquareR',
    color : '#4E4B66',
    marginLeft : 10,
    textAlign : 'left',
  },
  text_title : {
    fontSize : 25,
    fontFamily : 'NanumSquareEB',
    color : '#4E4B66',
    marginLeft : 10,
    textAlign : 'left'
  },
  blocks : {
    //backgroundColor : 'green'
    marginLeft : 10
  },
  mainBlock :{
    flex :3.7,
    marginBottom : 15,
    alignItems : 'center',
    //backgroundColor : 'orange'
  },
  letterIcon : {
    width : 60, height:30,
    alignSelf: 'stretch',
    //width: undefined,
    //height: undefined,
    //backgroundColor : 'orange' 
  }
});

export default Home;