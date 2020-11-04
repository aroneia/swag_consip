import React from 'react';
import {View, Text, StyleSheet ,ScrollView} from 'react-native';
import Block from './components/Block'
import ShowDate from './components/ShowDate'
import MainBlock from './components/MainBlock'


const Home = () => {
  return (
    <View style = {styles.container}>
      <View style = {{flex :0.5 }}>
        <View style = {{flex : 1, flexDirection: "row" }}>
          <ShowDate style = {{flex :1, flexDirection: "row"}}/>
        <View/>
        <View style = {{flex :1, flexDirection: "row", justifyContent : "flex-end"}}>
          <Text style = {{ fontSize : 20, textAlign : 'left'}}> 우체국 </Text>
        </View>
      </View >

    </View>
      <View style= {{flex :0.5}}>
        <Text style = {styles.text}> TODAY </Text>
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
  text : {
    fontSize : 30,
    fontFamily : 'NanumSquareEB',
    color : '#fff'
    
   
  },
  blocks : {
    //backgroundColor : 'green'
  },
  mainBlock :{
    flex :4.5,
    //backgroundColor : 'orange'
  }
});

export default Home;