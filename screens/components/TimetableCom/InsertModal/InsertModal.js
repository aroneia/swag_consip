import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View,Image, StyleSheet, TextInput} from 'react-native'
import ActionButton from '../button/ActionButton'


class InsertModal extends Component {

   

   state = {
      modalVisible: false,
   }
   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }
   render() {
      return (
         <View style = {styles.container}>
            
            <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               transparent = {true}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>

               <View style={{flex: 1,  justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                  <View style = {styles.modal}>
                     <TouchableHighlight onPress = {() => {
                           this.toggleModal(!this.state.modalVisible)}}>
                           <Image
                              style={styles.close}
                              source={require('./close.png')}
                           />
                     </TouchableHighlight>
                     <Text style = {styles.titletext}>강의추가</Text>

                     <View style = {styles.content}>
                     <Text style = {styles.sbtitletext}>강의이름</Text>

                     <TextInput style = {styles.textinput} />

                     <Text style = {styles.sbtitletext}>커리큘럼</Text>
                     <Text style= { {fontSize:12, marginLeft :16,marginTop :5}}>강의지수                          시작일</Text> 
                     <View style= { {flexDirection:"row"} }> 
                        <TextInput style = {styles.textinput2} /> 
                        <Text style= { {fontSize:12, top:21}}>회</Text> 
                        <TextInput style = {styles.textinput2} />
                     </View>     

                     <Text style = {styles.sbtitletext}>키워드</Text>

                     <Text style = {styles.sbtitletext}>시간</Text>


                        
                        
                     </View>
                     <TouchableHighlight onPress = {() => {
                           this.toggleModal(!this.state.modalVisible)}}>
                                  <Text style = {styles.titletext}>확인하기</Text>
                     </TouchableHighlight>
                        

                  </View>
               </View>


            </Modal>
            
            <ActionButton 
            buttonColor="#5235BB"
            onPress={() => {this.toggleModal(true)}}
            position="center"
            renderIcon={active => active ? (<Image source={require('./pencil.png')} style={{ height: 30, width: 30 }}/> ) : (<Image source={require('./pencil.png')} style={{ height: 30, width: 30 }} />)}>
            </ActionButton>

         </View>
      )
   }
}
export default InsertModal

const styles = StyleSheet.create ({
   container: {
      backgroundColor: '#00000000',
      padding: 100,
      height: "80%",
   },
   modal: {
      marginTop: 'auto',
      backgroundColor:'#ffffff',
      borderRadius: 20,
      marginLeft :16,
      marginRight :16,
      top: '-15%'
   },
   close: {
      position : "absolute",
      width : 18,
      height: 18,
      top: 15,
      left: 15,

   },
   content : {
      borderWidth : 1,
      height: 420,
      borderColor : "#E0E0E0",
      backgroundColor :"white"

   },
   titletext: {
      height: 50,
      marginTop: 18,
      fontSize: 16,
      color: '#5235BB',
      alignSelf:'center',
      fontFamily : 'NanumSquareEB',
   },
   sbtitletext :{
      color: '#5235BB',
      marginTop :16,
      marginLeft :16,
      fontFamily : 'NanumSquareEB',
      fontSize: 14,
   },
   textinput :{
      marginTop :16,
      marginLeft :16,
      marginRight :16,
      fontFamily : 'NanumSquareR',
      fontSize: 16,
      borderBottomWidth : 1,
      borderBottomColor : "#5235BB",

   }
   ,
   textinput2 :{
      marginTop :16,
      marginLeft :16,
      width: 100,
      fontFamily : 'NanumSquareR',
      fontSize: 16,
      borderBottomWidth : 1,
      borderBottomColor : "#5235BB",

   }
})