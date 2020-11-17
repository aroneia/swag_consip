import React from 'react';
import {View, Text, StyleSheet ,ScrollView, Image} from 'react-native';
import Block from './components/home/Block'
import ShowDate from './components/home/ShowDate'
import MainBlock from './components/home/MainBlock'
import { TouchableOpacity } from 'react-native-gesture-handler';
import PostBox from './PostBox'

//우체통 이미지 수정해야함 !!

const Home = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <View style = {{flex :0.5 }}>
        <View style = {{flex : 1, flexDirection: "row" }}>
          <View style = {styles.date}>
            <ShowDate />
          </View>
        <View/>
        <View style = {{flex :1, flexDirection:'row', justifyContent : 'flex-end'}}>
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
    </View>
      <View style= {{flex :0.5}}>
        <Text style = {styles.text_title}> TODAY </Text>
      </View>
      <View style = {{flex : 2}} >
      <ScrollView style = {styles.blocks} horizontal = {true}>
        <Block />
        <Block /> 
        <Block />
      </ScrollView>
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
    backgroundColor : '#5235BB'
    
  },
  date :{
    flex :1, 
    marginLeft : 10,
    //backgroundColor:'yellow'
  },
  text_title : {
    fontSize : 25,
    fontFamily : 'NanumSquareEB',
    color : '#fff',
    marginLeft : 10,
    textAlign : 'left'
  },
  blocks : {
    //backgroundColor : 'green'
    marginLeft : 10
  },
  mainBlock :{
    flex :4.5,
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