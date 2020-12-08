import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet ,ScrollView, Image} from 'react-native';
import Block from './components/home/Block'
import ShowDate from './components/home/ShowDate'
import MainBlock from './components/home/MainBlock'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const [lectures, setLectures]= useState([]);
  const [todaystring, setTodaystring] = useState("");
  const [date, setDate] = useState("");
  const [now, setNow] = useState("");
  const [currentLecture, setCurrentLecture] = useState([]);

  useEffect(() =>{

    const fetchToday = async () => {
      const today = await new Date();
      
      const currentDate = today.getDate();
      const currentDay = today.getDay();
      const yearnow = today.getFullYear();
      const timeNow = today.getHours() * 60 + today.getMinutes();
      setNow(timeNow);

      const currentMonth = today.getMonth() + 1;
      const days = ["일요일","월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
      const dateString = currentMonth + "월 " + currentDate + "일 " + days[currentDay]
      setDate(dateString);

      //console.log("inside showdate current month is :" + currentMonth);
      
      //20201008과 같은 형식으로 바꾸기 위한 코드
      const month_changed = currentMonth > 9 ? currentMonth.toString() : `0${currentMonth.toString()}`;
      const date_changed = currentDate > 9 ? currentDate.toString() : `0${currentDate.toString()}`;

      setTodaystring( yearnow.toString() + month_changed + date_changed);
      //console.log(todaystring);
    };

    const fetchLectures = async () => {
      const data = await require('../json/dates.json');
      const filtered = data.filter(day => day.today === todaystring);
      if(filtered[0] != null){
        setLectures(filtered[0].lecture_list);
        //console.log(filtered[0].lecture_list);
      }
      else{
        console.log("no lectures");
      }
      //console.log("inside");
    }
    const fetchLectureNow = async () =>{
      const data = await require('../json/lecture.json'); 
      const lects = data.lectureList;
      const filtered = lects.filter(lect => calculateTime(lect.Time[2],lect.Time[3]) > now);
      console.log(filtered[0]);
      //단 lecture.json이 정렬되어 있는 데이터여야함 이거 이야기해볼 것
      console.log("FfFFFFFFFFFF");
      setCurrentLecture(filtered[0]);
    }
      fetchToday();
      fetchLectures();
      fetchLectureNow();

  },[]);

  const calculateTime = (hour, min) => {
    return(Number(hour) * 60 + Number(min));}


  return (
    <View style = {styles.container}>

      <View style = {{flex :0.4, justifyContent : 'flex-end'}}>
        <Text style = {styles.welcomeText}>안녕하세요 일소님!</Text>
      </View>
      
      <View style = {{flex :0.5,flexDirection: "row"}}>
          <View style = {styles.date}>
            <ShowDate date = {date}/>
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
        <Block></Block> 
        <Text onPress={()=>{ navigation.navigate('InsertMemo');}}> 테스트</Text>
      </ScrollView>
      </View>
      <View style ={{flex:0.5, justifyContent: 'center', marginTop: 10}}>
            <Text style = {styles.text_title}>NOW</Text>
      </View>
      <View style = {styles.mainBlock}>
        <MainBlock currentlecture = {currentLecture} now = {now} />
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