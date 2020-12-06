import React, {useState} from 'react';
import { Modal, Text,TouchableOpacity, View,Image, StyleSheet, TextInput, ScrollView, Alert} from 'react-native'
import ActionButton from '../button/ActionButton'
import KeywordButton from './KewordButton'
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import data from './../../../../json/lecture.json';

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

 Date.prototype.yyyymmdd = function() {
   var mm = this.getMonth() + 1; // getMonth() is zero-based
   var dd = this.getDate();
 
   return [this.getFullYear(),
           (mm>9 ? '' : '0') + mm,
           (dd>9 ? '' : '0') + dd
          ].join('');
 };

 const InsertFail = () =>
 Alert.alert(
   "입력실패",
   "정보를 정확하게 입력해주세요",
   [
     { text: "OK", onPress: () => console.log("OK Pressed") }
   ],
   { cancelable: false }
 );

 //스케줄 리스트 구하기
 function getschedule(startdate, count, daylist) {
   var schedule = [];
   var day = [];
   for (var i = 0 ; i < daylist.length ; i++ ) {
      switch(daylist[i]) {
         case 'SUN' :
            day = day.concat([0]);
            break;
         case 'MON' :
            day = day.concat([1]);
            break;
         case 'TUE' :
            day = day.concat([2]);
            break;           
         case 'WED' :
            day = day.concat([3]);
            break;            
         case 'THE' :
            day = day.concat([4]);
            break;
         case 'FRI' :
            day = day.concat([5]);
            break;
         case 'SAT' :
            day = day.concat([6]);
            break;
   }}
   while (schedule.length != count){
   for (var i = 0 ; i < day.length ; i++ ) {
         if (startdate.getDay() == day[i]){
            schedule= schedule.concat([startdate.yyyymmdd()]);
            break;
         } 
      }
      startdate.setDate(startdate.getDate() + 1);
   }
   console.log(schedule);
   return schedule
 }
 


export const InsertModal = ({ parentCallback }) => {
   //
   const [textstate, settextstate] = useState({color : "#A0A3BD"});

   const changecolor =() => {
      settextstate({color:"#4E4B66"})
   }

   //모델 보일지 말지
   const [modalVisible,setmodalVisible] = useState(false);

   //스크린 높이
   const bottom_initial = 0;
   const arbitrary_move_value = 100;

   const [contentInsertBottom, setcontentInsertBottom] = useState(bottom_initial);
   
    //강의명 & 강의차수
   const [lecturename, setlecturename] = useState("");
   const [lecturecount, setlecturecount] = useState(0);

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
   const [startdate, setstartDate] = useState(new Date());


   const showDatePicker = () => {
     setDatePickerVisibility(true);
   };
   const setStartDay = (date) => {
      setstartDate(date);
      hideDatePicker();
    };

   //강의시간 리스트
   const [dayList, setdayList] = useState([""]);
   const [timeList, settimeList] = useState([[new Date('December 17, 1995 08:00:00'),new Date('1995-12-17T09:00:00')]]);

   //리스트 미리 추가하기 
   const addListData = () => {
      settimeList([...timeList,[new Date('December 17, 1995 08:00:00'),new Date('1995-12-17T09:00:00')]])
    }

   //리스트 제거하기
   const deleteItem = () => {
      const newArray = timeList.slice(0,-1)
      settimeList(newArray);
   }

   //강의시간 ui 추가하기
   const createUI = () => {
      return timeList.map((el, i) =>
      <View>
      <View style= { {flexDirection:"row"}}>                        
         <Text style= {[styles.sbtext,{width:65,marginRight:16}]}>요일</Text>
         <Text style= {[styles.sbtext, {flex:1,marginRight:50}]}>시작시간</Text>
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
         onValueChange={(value) => Insertday(i,value)}
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
         >{formatAMPM(timeList[i][0])}</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {[styles.textinput, {flex:1,marginRight:16}]}
         onPress= {() => {showTimePicker2()}}>
            <Text
            style = {{ backgroundColor: "#EFF0F6",
            fontFamily : 'NanumSquareR',
            fontSize: 17,}}
         >{formatAMPM(timeList[i][1])}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style = {{ 
         backgroundColor:"#EB5757",
         width:34,
         height:34,
         borderRadius:34,
         marginTop: 8,
         alignItems:'center',
         justifyContent: 'center',

      }}
      onPress = {() => {deleteItem();}}> 
         <Text
      style = {{fontSize:21,color:"#FFFFFF" }}
      >×</Text>
   </TouchableOpacity>
   </View>
   <DateTimePickerModal
   date = {new Date('December 17, 1995 08:00:00')}
                     isVisible={isTimePickerVisible1}
                     mode={'time'}
                     onConfirm={(date) => Insertstarttime(i,date)}
                     onCancel={hideDatePicker}
                     headerTextIOS = "시간을 선택하세요"
   />
      <DateTimePickerModal
      date = {new Date('December 17, 1995 09:00:00')}
                     isVisible={isTimePickerVisible2}
                     mode={'time'}
                     onConfirm={(date) => Insertendtime(i,date)}
                     onCancel={hideDatePicker}
                     headerTextIOS = "시간을 선택하세요"
   />

   </View>
      )
      
   }

   const Insertday = (i, value) => {
      dayList[i]  = value;
   }
   const Insertstarttime = (i, date) => {
      timeList[i][0] = date;
      hideDatePicker();
   }
   const Insertendtime = (i, date) => {
      timeList[i][1] = date;
      hideDatePicker();
   }


 
   const [isTimePickerVisible1, setTimePickerVisibility1] = useState(false);
   const [isTimePickerVisible2, setTimePickerVisibility2] = useState(false);

   const showTimePicker1 = () => {
      setTimePickerVisibility1(true);
   };
   const showTimePicker2 = () => {
      setTimePickerVisibility2(true);
   };
 
   const hideDatePicker = () => {
     setDatePickerVisibility(false);
     setTimePickerVisibility1(false);
     setTimePickerVisibility2(false);
   };
 
    //시간추가
    const addTimeInput = () => {
      createUI();
      setcontentInsertBottom(arbitrary_move_value);
    }

    const inputdata = () => {
      if( lecturename == "" || lecturecount == "") { InsertFail(); }
      else {
       let time = []

       for (let i = 0 ; i < dayList.length * 4 ; i ++)
       switch(i%4) {
          case 0 :
             time[i] = parseInt(timeList[parseInt(i/4)][0].getHours());
             break;
          case 1 :
             time[i] = parseInt(timeList[parseInt(i/4)][0].getMinutes());
             break;
          case 2 :
            time[i] = parseInt(timeList[parseInt(i/4)][1].getHours());
            break;
          case 3 :
            time[i] = parseInt(timeList[parseInt(i/4)][1].getMinutes());
            break;
       }

       let keyword = []
      if(K_realtime) keyword.push("실시간");
      if(K_nonrealtime) keyword.push("영상");
      if(K_mix) keyword.push("혼합");
      if(K_school) keyword.push("학교");
      if(K_academy) keyword.push("학원");
      if(K_onlinelecture) keyword.push("인강");
      if(K_certificate) keyword.push("자격증");
      if(K_language) keyword.push("어학");
      if(K_major) keyword.push("전공");
      if(K_elective) keyword.push("교양");
      if(K_study) keyword.push("스터디");

 
      let lecturedata = 
         {
            "name": lecturename,
            "total_num": lecturecount,
            "now_num": 0,
            "days": dayList,
            "start_date": startdate.yyyymmdd(),
            "schedule":getschedule(startdate, lecturecount, dayList),
            "Time": time,
            "character": keyword, 
            "keywords": [],

            "stamp": [1,0,-1]
         };
 
       data.lectureList.push(lecturedata);
       setmodalVisible(false);
       reset();
       parentCallback("추가완료");
      }
    }

    const reset = () => {
       setdayList([]);
       settimeList([[new Date('December 17, 1995 08:00:00'),new Date('1995-12-17T09:00:00')],])
       setK_realtime(false);
       setK_nonrealtime(false);
       setK_mix(false);
       setK_school(false);
       setK_academy(false);
       setK_onlinelecture(false);
       setK_certificate(false);
       setK_language(false);
       setK_major(false);
       setK_elective(false);
       setK_study(false);
       setlecturecount();
       setlecturename();
       
    }

      return (
      <View style = {styles.container}>
         <Modal animationType = {"slide"} 
         transparent = {false}
         visible = {modalVisible}
         transparent = {true}
         onRequestClose = {() => { console.log("Modal has been closed.") } }>
            <View style = {{ backgroundColor:'#ffffff'}}>
               <TouchableOpacity onPress = {() => {
                  setmodalVisible(false);reset()}}>
                     <Image
                     style={styles.close}
                     source={require('./close.png')}
                     />
               </TouchableOpacity>  
               <Text style = {styles.titletext}>강의추가</Text>
            </View>

            <ScrollView 
            contentContainerStyle={{flexGrow: 1}}
            automaticallyAdjustContentInsets={false}
            contentInset={{top:0, bottom: contentInsertBottom }}
            style = {styles.scrollview} 
            >
            <View style = {styles.content}>
            {/* 강의 이름 추가  */}
            <Text style = {styles.sbtitletext}>강의이름</Text>
            <TextInput 
            style = {styles.textinput}
            placeholder="강의이름을 입력해주세요."
            placeholderTextColor="#A0A3BD"
            onChangeText={(lecturename) => setlecturename(lecturename)}
            value={lecturename} 
               />
                        <View style= { {flexDirection:"row"}}>
                           <Text style= {[styles.sbtitletext, {marginRight:65}]}>강의차수</Text>
                           <Text style= {styles.sbtitletext}>시작날짜</Text>
                        </View>   

                        <View style= { {flexDirection:"row"} }> 
                           <TextInput style = {[styles.textinput, {width:104,marginRight:16}]}
                                 keyboardType ={'numeric'}
                                 placeholder="30"
                                 placeholderTextColor="#A0A3BD"
                                 onChangeText={(lecturecount) => setlecturecount(lecturecount)}
                                 value={lecturecount} 
                                 /> 
                           <TouchableOpacity
                              style = {[styles.textinput, {flex:1}]}
                              onPress= {() => {showDatePicker();changecolor()}}>
                                 <Text
                                 style = {{backgroundColor: "#EFF0F6",
                                 fontFamily : 'NanumSquareR',
                                 fontSize: 17,
                                 color: textstate.color}}
                                 >{startdate.getFullYear()+'/'+(startdate.getMonth()+1)+'/'+startdate.getDate()}</Text>
                           </TouchableOpacity>
                        </View> 

                        <Text style= {styles.sbtitletext}>강의시간</Text>
                        {createUI()} 
                        <View style= { {
                              flexDirection:"row",
                              justifyContent: "center",
                              alignItems: "center",}}> 
                           <TouchableOpacity 
                              style = {{ 
                                 backgroundColor:"#552DEC",
                                 width:34,
                                 height:34,
                                 borderRadius:34,
                                 marginTop: 20,
                                 alignItems:'center',
                                 justifyContent: 'center',

                              }}

                              onPress = {() => {
                                 addListData(); addTimeInput()}}> 
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
                     mode={'date'}
                     onConfirm={setStartDay}
                     onCancel={hideDatePicker}
                     headerTextIOS = "날짜를 선택하세요"
                     />

                  </ScrollView>
                  <TouchableOpacity 
                     style={styles.insertbutton}
                     onPress = {() => {
                        inputdata()}}>
                              <Text
                              style= { {
                                 fontSize:17, 
                                 color:"#FFFFFF",
                                 fontFamily:"NanumSquareEB"} }>추가하기</Text>
                     </TouchableOpacity>

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

   scrollview: {
      marginTop: 'auto',
      backgroundColor:'#ffffff',
   
   },
   close: {
      position : "absolute",
      width : 18,
      height: 18,
      top: 82,
      left: 25,

   },
   content : {
      flex: 1,
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
