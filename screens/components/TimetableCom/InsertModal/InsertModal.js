import React, { Component, useState,setState } from 'react';
import { Modal, Text,TouchableOpacity, View,Image, StyleSheet, TextInput, ScrollView} from 'react-native'
import ActionButton from '../button/ActionButton'
import TimeItem from './TimeItem'
import KeywordButton from './KewordButton'
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";


function formatAMPM(date) {
   var hours = date.getHours();
   var minutes = date.getMinutes();
   var ampm = hours >= 12 ? 'pm' : 'am';
   hours = hours % 12;
   hours = hours ? hours : 12; // the hour '0' should be '12'
   minutes = minutes < 10 ? '0' + minutes : minutes;
   var strTime = hours + ':' + minutes + ' ' + ampm;
   return strTime;
 }

export const InsertModal = () => {

   //모델 보일지 말지
   const [modalVisible,setmodalVisible] = useState(false);

   //키워드
   const [K_realtime,setK_realtime] = useState(false);
   const [K_nonrealtime,setK_nonrealtime] = useState(false);
   const [K_mix,setK_mix] = useState(false);
   const [K_school,setK_school] = useState(false);
   const [K_academy,setK_academy] = useState(false);
   const [K_onlinelecture,setK_onlinelecture] = useState(false);
   const [K_certificate,setK_certificate] = useState(false);
   const [K_language,setK_language] = useState(false);
   const [K_major,setK_major] = useState(false);
   const [K_elective,setK_elective] = useState(false);
   const [K_study,setK_study] = useState(false);

   //시작 날짜
   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

   //강의시간 리스트
   const [Input, setInput] = useState([]);
 
   const lessonIndex = 0;

   const [isTimePickerVisible1, setTimePickerVisibility1] = useState(false);
   const [isTimePickerVisible2, setTimePickerVisibility2] = useState(false);

   const [mode, setMode] = useState('date');

   const [startdate, setstartDate] = useState(new Date());
   const [starttime, setstarttime] = useState(new Date('December 17, 1995 08:00:00'));
   const [endtime, setendtime] = useState(new Date('1995-12-17T09:00:00'));

   const showDatePicker = () => {
      setMode('date');
     setDatePickerVisibility(true);
   };
   const showTimePicker1 = () => {
      setMode('time');
      setTimePickerVisibility1(true);
   };
   const showTimePicker2 = () => {
      setMode('time');
      setTimePickerVisibility2(true);
   };
 
   const hideDatePicker = () => {
     setDatePickerVisibility(false);
     setTimePickerVisibility1(false);
     setTimePickerVisibility2(false);
   };
 
   const handleConfirm = (date) => {
     setstartDate(date);
     hideDatePicker();
   };

   const handleConfirm1 = (date) => {
      setstarttime(date);
      hideDatePicker();
    };
    const handleConfirm2 = (date) => {
      setendtime(date);
      hideDatePicker();
    };

    //시간추가
    const addTime = () => {
       console.log("아하하");
       console.log(Input);
    }

      return (
         <View style = {styles.container}>
            
            <Modal animationType = {"slide"} transparent = {false}
               visible = {modalVisible}
               transparent = {true}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>

                  <ScrollView style = {styles.modal}>
                     {/* 상단 바*/}
                     <TouchableOpacity onPress = {() => {
                           setmodalVisible(false)}}>
                           <Image
                              style={styles.close}
                              source={require('./close.png')}
                           />
                     </TouchableOpacity>  
                     <Text style = {styles.titletext}>강의추가</Text>

                     <View style = {styles.content}>
                        {/* 강의 이름 추가  */}
                        <Text style = {styles.sbtitletext}>강의이름</Text>
                        <TextInput 
                        style = {styles.textinput}
                        placeholder="강의이름을 입력해주세요."
                        placeholderTextColor="#A0A3BD"
                        />

                        <View style= { {flexDirection:"row"}}>
                           <Text style= {[styles.sbtitletext, {marginRight:65}]}>강의차수</Text>
                           <Text style= {styles.sbtitletext}>시작날짜</Text>
                        </View>   

                        <View style= { {flexDirection:"row"} }> 
                           <TextInput style = {[styles.textinput, {width:104,marginRight:16}]}
                                 keyboardType = 'numeric'
                                 placeholder="30"
                                 placeholderTextColor="#A0A3BD"
                                 /> 
                           <TouchableOpacity
                              style = {[styles.textinput, {flex:1}]}
                              onPress= {() => {showDatePicker()}}>
                                 <Text
                                 style = {{backgroundColor: "#EFF0F6",
                                 fontFamily : 'NanumSquareR',
                                 fontSize: 17,}}
                                 >{startdate.getFullYear()+'/'+(startdate.getMonth()+1)+'/'+startdate.getDate()}</Text>
                           </TouchableOpacity>
                        </View> 

                        <Text style= {styles.sbtitletext}>강의시간</Text>

                        <View style= { {flexDirection:"row"}}>                        
                              <Text style= {[styles.sbtext,{width:65,marginRight:16}]}>요일</Text>
                              <Text style= {[styles.sbtext, {flex:1,marginRight:16}]}>시작시간</Text>
                              <Text style= {[styles.sbtext, {flex:1,marginRight:50}]}>종료시간</Text>
                        </View> 

                        <View style= { {
                              flexDirection:"row",
                              justifyContent: "center",
                              alignItems: "center",}}> 
                           <View  style = {[styles.textinput, {width:65,marginRight:16}]}>
                              <RNPickerSelect
                              style={{
                                 fontFamily: 'NanumSquareR',
                                 fontSize: 17,
                              }}
                              placeholder	= {{ label: '요일', value: null } }
                              onValueChange={(value) => console.log(value)}
                              items={[
                                 { label: '월', value: 'MON' },
                                 { label: '화', value: 'TUE' },
                                 { label: '수', value: 'WED' },
                                 { label: '목', value: 'THE' },
                                 { label: '금', value: 'FRI' },
                                 { label: '토', value: 'SAT' },
                                 { label: '일', value: 'SUN' }, ]}/>
                           </View>
                           <TouchableOpacity style = {[styles.textinput, {flex:1,marginRight:16}]}
                              onPress= {() => {showTimePicker1()}}>
                                 <Text
                                 style = {{ backgroundColor: "#EFF0F6",
                                 fontFamily : 'NanumSquareR',
                                 fontSize: 17,}}
                              >{formatAMPM(starttime)}</Text>
                           </TouchableOpacity>
                           <TouchableOpacity style = {[styles.textinput, {flex:1,marginRight:16}]}
                              onPress= {() => {showTimePicker2()}}>
                                 <Text
                                 style = {{      backgroundColor: "#EFF0F6",
                                 fontFamily : 'NanumSquareR',
                                 fontSize: 17,}}
                              >{formatAMPM(endtime)}</Text>
                           </TouchableOpacity>

                           <TouchableOpacity 
                              style = {{ 
                                 backgroundColor:"#552DEC",
                                 width:34,
                                 height:34,
                                 borderRadius:34,
                                 alignItems:'center',
                                 justifyContent: 'center',

                              }}

                              onPress = {() => {
                                 addTime();addInput()}}> 
                                 <Text
                              style = {{fontSize:21,color:"#FFFFFF" }}
                              >+</Text>
                           </TouchableOpacity>
                        </View>
                        

                        <Text style = {styles.sbtitletext}>키워드</Text>
                        <View style= { {flexDirection:"row", marginTop : 8} }> 
                           <KeywordButton
                                 value={K_realtime}
                                 onChangeValue={() => setK_realtime(!K_realtime)}
                                 switchWidth={81}  
                                 activeText={'실시간'}
                           />
                           <KeywordButton
                                 value={K_nonrealtime}
                                 onChangeValue={() => setK_nonrealtime(!K_nonrealtime)}
                                 activeText={'영상'}
                           />
                           <KeywordButton
                                 value={K_mix}
                                 onChangeValue={() => setK_mix(!K_mix)}
                                 activeText={'혼합'}
                           />
                           <KeywordButton
                                 value={K_study}
                                 onChangeValue={() => setK_study(!K_study)}
                                 switchWidth={81}  
                                 activeText={'스터디'}
                           />
                        </View>  
                        <View style= { {flexDirection:"row",marginTop : 8} }> 
                           <KeywordButton
                                 value={K_school}
                                 onChangeValue={() => setK_school(!K_school)}
                                 activeText={'학교'}
                           />
                           <KeywordButton
                                 value={K_academy}
                                 onChangeValue={() => setK_academy(!K_academy)}
                                 activeText={'학원'}
                           />
                           <KeywordButton
                                 value={K_onlinelecture}
                                 onChangeValue={() => setK_onlinelecture(!K_onlinelecture)}
                                 activeText={'인강'}
                           />
                           <KeywordButton
                                 value={K_certificate}
                                 onChangeValue={() => setK_certificate(!K_certificate)}
                                 switchWidth={81}  
                                 activeText={'자격증'}
                           />
                        </View> 
                        <View style= { {flexDirection:"row", marginTop : 8} }> 
                           <KeywordButton
                                 value={K_language}
                                 onChangeValue={() => setK_language(!K_language)}
                                 activeText={'어학'}
                           />
                           <KeywordButton
                                 value={K_major}
                                 onChangeValue={() => setK_major(!K_major)}
                                 activeText={'전공'}
                           />
                           <KeywordButton
                                 value={K_elective}
                                 onChangeValue={() => setK_elective(!K_elective)}
                                 activeText={'교양'}
                           />
                        </View>    


                     
                     </View>



                     <DateTimePickerModal
                     isVisible={isDatePickerVisible}
                     mode={mode}
                     onConfirm={handleConfirm}
                     onCancel={hideDatePicker}
                     headerTextIOS = "날짜를 선택하세요"
                     />
                     <DateTimePickerModal
                     isVisible={isTimePickerVisible1}
                     mode={mode}
                     onConfirm={handleConfirm1}
                     onCancel={hideDatePicker}
                     headerTextIOS = "시간을 선택하세요"
                     />

                  </ScrollView>
                  <TouchableOpacity 
                     style={styles.insertbutton}
                     onPress = {() => {
                          setmodalVisible();}}>
                              <Text
                              style= { {
                                 fontSize:17, 
                                 color:"#FFFFFF",
                                 fontFamily:"NanumSquareEB"} }>추가하기</Text>
                     </TouchableOpacity>

                  <DateTimePickerModal
                     isVisible={isTimePickerVisible2}
                     mode={mode}
                     onConfirm={handleConfirm2}
                     onCancel={hideDatePicker}
                     headerTextIOS = "시간선택"
                     />

            </Modal>

            <ActionButton 
            buttonColor="#552DEC"
            onPress={() => {setmodalVisible(true)}}
            position="center"
            renderIcon={active => active ? (<Image source={require('./pencil.png')} style={{ height: 30, width: 30 }}/> ) : (<Image source={require('./pencil.png')} style={{ height: 30, width: 30 }} />)}>
            </ActionButton>

         </View>
      )
   }

export default InsertModal

const styles = StyleSheet.create ({
   container: {
      backgroundColor: '#00000000',
      padding: 100,
   },
   modal: {
      marginTop: 'auto',
      backgroundColor:'#ffffff',
      height: '100%'
   },
   close: {
      position : "absolute",
      width : 18,
      height: 18,
      top: 82,
      left: 25,

   },
   content : {
      height: 420,
      borderColor : "#E0E0E0",
      backgroundColor :"white",
      marginLeft :25,
      marginRight :25,

   },
   titletext: {
      height: 50,
      marginTop: 80,
      fontSize: 21,
      color: '#14142A',
      alignSelf:'center',
      fontFamily : 'NanumSquareB',
   },
   sbtitletext :{
      color: '#4E4B66',
      fontFamily : 'NanumSquareR',
      fontSize: 15,
      marginTop: 40,
   },
   sbtext :{
      color: '#A0A3BD',
      fontFamily : 'NanumSquareR',
      fontSize: 11,
      marginTop: 8,

   },
   textinput :{
      marginTop:8,
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft:16,
      backgroundColor: "#EFF0F6",
      fontFamily : 'NanumSquareR',
      fontSize: 17,
      borderRadius: 8,
      borderWidth: 1,
      borderColor:"#D9DBE9"
      
   },
   insertbutton:{
      position:"absolute",
      width:350,
      height:56,
      backgroundColor: "#552DEC",
      bottom:34,
      alignSelf:'center',
      alignItems:'center',
      justifyContent: 'center',
      borderRadius:32,

   }

})
