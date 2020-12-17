import React, {useState, useEffect} from 'react';
import { View,Text, StyleSheet,Dimensions,Image,TextInput,Modal,TouchableOpacity } from 'react-native';
import lecturedata from '../../../json/lecture.json'

const SWAG_PURPLE = '#5235BB';
const windowWidth = Dimensions.get('window').width;



const InsertMemo = ({visible,setvisible,lectureName, setInfoStamp}) => {
  
  console.log(lectureName);
    const handleClose = () => {
        setvisible(false);
    }

    const [modalVisible,setmodalVisible] = useState(false);
    
    const [key1,setKey1] = useState('');
    const [key2, setKey2] = useState('');
    const [key3, setKey3] = useState('');
    
    const inputkeymemo = () => {
    
      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth() + 1;  // 월
      var date = today.getDate();  // 날짜

      var todaydate = year+""+month+""+date+""; 

      let keyword = {
        "date": todaydate,
        "key1":key1,
        "key2":key2,
        "key3":key3
      };
        var len = Object.keys(lecturedata.lectureList).length;
        
        for(var i=0;i<len;i++){
            if(lecturedata.lectureList[i].name == lectureName);
            lecturedata.lectureList[i].keywords.push(keyword);
        }
       
        setmodalVisible(false);
        reset();
       
     }

     const reset = () => {
  
      setKey1(false);
      setKey2(false);
      setKey3(false);
   }

    return(
        <View style={styles.container}>
            <Modal 
             visible={modalVisible}
            animationType = {"fade"}
            transparent={true}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity onPress = {() => {handleClose();}}>
                            <Image style={styles.close} source={require('../../../assets/icons/close.png')}/>
                    </TouchableOpacity>  
    
                    <Text style={styles.Text}>오늘자</Text>
                    <Text style={styles.Text}>{lectureName}의</Text>
                    <Text style={styles.Text}>키워드를 남겨주세요</Text>

                    <View style={{margin: 25, marginTop:50,marginBottom:50,}}>
                        <View style = {styles.input}>
                        <Text style = {{fontSize: 11, fontFamily:'NanumSquareR',color:"#552DEC",marginBottom:5}}>KEY1</Text>
                        <TextInput 
                        style = {{fontSize: 17}}
                        placeholder = "키워드를 입력해주세요."
                        placeholderTextColor = "#A0A3BD"
                        onChangeText={(key1) => setKey1(key1)}
                        value={key1}
                        /> 
                        </View>
                        <View style = {[styles.input,{marginBottom:32,marginTop:32}]}>
                        <Text style = {{fontSize: 11, fontFamily:'NanumSquareR',color:"#552DEC",marginBottom:5}}>KEY2</Text>
                        <TextInput 
                        style = {{fontSize: 17}}
                        placeholder = "키워드를 입력해주세요."
                        placeholderTextColor = "#A0A3BD"
                        onChangeText={(key2) => setKey2(key2)}
                        value={key2}
                        /> 
                        </View>
                        <View style = {styles.input}>
                        <Text style = {{fontSize: 11, fontFamily:'NanumSquareR',color:"#552DEC",marginBottom:5}}>KEY3</Text>
                        <TextInput 
                        style = {{fontSize: 17}}
                        placeholder = "키워드를 입력해주세요."
                        placeholderTextColor = "#A0A3BD"
                        onChangeText={(key3) => setKey3(key3)}
                        value={key3}
                        /> 
                        </View>
                    </View>

                    <TouchableOpacity
                    style={{ ...styles.openButton}}
                    onPress={() => {
                      handleClose();
                      inputkeymemo();
                      setInfoStamp(true);
                    }}
                    >
                     <Text style={styles.textStyle}>저장하기</Text>
                    </TouchableOpacity>
          
                </View>
            </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        position: 'absolute',
        textAlign:'center',
        backgroundColor : '#F7F7FC'
    }, 
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: "center",
        alignItems: "center",
      },
    modalView: {
      backgroundColor: "white",
      width : windowWidth - 32,
      height: 557,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
    },
    close : {
        width : 20,
        height: 20,
        marginLeft: 23,
        marginTop:23,
        marginBottom: 30,
    },
    Text: {
        textAlign: "center",
        fontFamily : 'NanumSquareEB',
        fontSize : 17,
        color: "#4E4B66"
      },
    input : {
        borderColor : "#D9DBE9",
        borderWidth : 1,
        borderRadius : 8,
        backgroundColor : "#EFF0F6",
        height:56,
        padding: 16,
        paddingTop: 8,
        paddingBottom: 8,
    },
    openButton: {
      backgroundColor: "#552DEC",
      marginLeft : 50,
      marginRight : 50,
      height : 56,
      borderRadius: 40,
      justifyContent:"center"
    
    },
    textStyle: {
      color: "white",
      textAlign: "center",
      fontFamily : 'NanumSquareEB',
        fontSize : 17,

    },

    
})

export default InsertMemo;
