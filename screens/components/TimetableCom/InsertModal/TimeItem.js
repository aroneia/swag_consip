import React, { Component } from 'react';
import { View, Text,StyleSheet, TouchableOpacity,Animated,Image,} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

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

  class TimeItem extends Component {
    constructor() {
      super();
      this.animatedValue = new Animated.Value(0);
    }

  
    render() {
  
      return (<View>
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
        </View>

        
        
     
      );
    }
  }

  export default TimeItem

  const styles = StyleSheet.create ({
    sbtext :{
        color: '#A0A3BD',
        fontFamily : 'NanumSquareR',
        fontSize: 11,
        marginTop: 8,
  
     },
  })
