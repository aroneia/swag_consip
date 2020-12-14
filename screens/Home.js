import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet ,ScrollView, Image} from 'react-native';
import Block from './components/home/Block'
import ShowDate from './components/home/ShowDate'
import MainBlock from './components/home/MainBlock'
import { TouchableOpacity } from 'react-native-gesture-handler';
import data from '../json/lecture.json';



const Home = ({navigation}) => {
  //const [lectures, setLectures]= useState([]); //lecture.json에서 불러온 오늘 들어야하는 강의리스트 
  //let todaystring = ""; //json을 읽기 위해 20201021 같은 형식의 날짜 
  const [todaystring, setToday ] = useState("20201215");
  const [date, setDate] = useState("");//홈화면에서 오늘의 날짜를 표시해주기 위한 EX) 2020년 10월 21
  const [now, setNow] = useState(""); //현재 시간
  const [currentlecture, setCurrentlecture] = useState([]); //현재 수강중(또는 곧 수강할) 강의 
  const [ status, setStatus ] = useState("");
  const [ progress, setProgress ] = useState();
  const [ stampStatus, setStampStatus] = useState("before") //도장의 상태 before, late, absent, good 

  //let currentlecture = [];

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

      //20201008과 같은 형식으로 바꾸기 위한 코드
      const month_changed = currentMonth > 9 ? currentMonth.toString() : `0${currentMonth.toString()}`;
      const date_changed = currentDate > 9 ? currentDate.toString() : `0${currentDate.toString()}`;

      setToday(yearnow.toString() + month_changed + date_changed);
    };

    const fetchLectureToday = () =>{
      //const data = await require('../json/lecture.json');
      const lects = data.lectureList;
      //console.log(lects)
      let lecturesToday = [];
      for(let l = 0; l < lects.length; l++){
        for(let i =0; i<lects[l].schedule.length; i++){
          console.log(todaystring)
          if(lects[l].schedule[i] === todaystring){
            console.log("schedule");
            console.log("today :" ,todaystring);
            //console.log(lects[l].schedule[i]);
            console.log(lects[l]);
            lecturesToday.push(lects[l]);
          }
        } 
      }
      console.log("today lect ------------>");
      console.log(lecturesToday);
      //sort lecture today 오름차순
      lecturesToday.sort(function(a,b){
        a.Time[0]-b.Time[0];
      }) 
      //오늘 하는 강의 중에서 지금 듣는 강의 
      const filtered = lecturesToday.filter(lect => calculateTime(lect.Time[2],lect.Time[3]) > now);
      console.log("filtered------>")
      console.log(filtered[0]);
      //setCurrentlecture(filtered[0]);
      
      setCurrentlecture( filtered[0] );
      //return filtered[0];
    }; 

    const getProgress = () => {
      const calculateTime = (hour, min) => {
          return(Number(hour) * 60 + Number(min));}

      if (currentlecture == undefined){
          //main.js에서 end time으로 정렬해서 없으면 noclass
          console.log("no class ----> mainblock.js");
          setStatus("noclass");
          setProgress(0);
      }
      else if(currentlecture.length === 0){
          setStatus("noclass");
          setProgress(0);
      }      
      else{
          const end = calculateTime(currentlecture.Time[2],currentlecture.Time[3]);
          const start = calculateTime(currentlecture.Time[0],currentlecture.Time[1]);
          //console.log("time",currentlecture.Time[1]);

          if(now < start){
              setStatus("before");
              time_before_start = start - now ;
              console.log("start",start);
              console.log("ts",time_before_start);
              setProgress(0);
  
          }else if(now >= start){
              setStatus("during");
              const totalTime = end - start;
              const currTime = now - calculateTime(currentlecture.Time[0], currentlecture.Time[1])
              console.log("현재 진행: "+ currTime);
              console.log("now: " + now);
              //console.log(currentlecture.Time);
              setProgress(currTime / totalTime);
              //console.log("progress------>")
              //console.log(currTime/totalTime);
          }
      }
  }
  
 
  console.log("progress------>");
  console.log(progress);
      fetchToday();
      fetchLectureToday();
      getProgress();
     
      
  },[]);

  const setInfoStamp = (isPressed) =>{
    const start = calculateTime(currentlecture.Time[0],currentlecture.Time[1]);
    const end = calculateTime(currentlecture.Time[2],currentlecture.Time[3]);

    if(isPressed == true && now > start + 10){
      //10분 이후부터 지각으로 처리
      setStampStatus("late");
    }else if(isPressed ==true && now <= start +10){
      setStampStatus("good");
    }else if(isPressed == false && now > end - 10){
      //끝나기 10분전부터 결석처리 
      setStampStatus("absent");
    }

    const lects = data.lectureList;
    for(let i =0; i <lects.length; i++){
      if(lects[i].name == currentlecture.name){
        console.log("------stamp-----inside current lecture");
        if(stampStatus == "good") {lects[i].stamp.push(1)}
        if(stampStatus == "late") {lects[i].stamp.push(0)}
        if(stampStatus == "absent") {lects[i].stamp.push(-1)}

      }
    }

    //lecture list에 stamp 값 넣기

    console.log("setinfostamp-------->", stampStatus);
  }
  

  const calculateTime = (hour, min) => {
    return(Number(hour) * 60 + Number(min));}

  return (
    <View style = {styles.container}>
      <View style = {styles.swag}>
        <Text style= {styles.swagtext}>SWAG</Text>
      </View>
     <View style = {{flex :0.5,flexDirection: "row", justifyContent : 'center'}}>
      <View style = {{flex :1, alignItems : 'flex-start', justifyContent : 'flex-end'}}>
  <Text style = {styles.welcomeText}>안녕하세요 일소님!</Text>
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

        <View style = {styles.date}>
          <ShowDate date = {date}/>
        </View>
      
      <View style= {{flex :0.5, justifyContent : 'center', marginLeft : 16}}>
        <Text style = {styles.text_title}>TODAY</Text>
      </View>
      <View style = {{flex : 1.7, marginLeft : 16, justifyContent : 'center'}} >
      <ScrollView horizontal = {true}>
        <Block stampStatus = {stampStatus} currentname = {currentlecture.name}></Block> 
        <Text onPress={()=>{ navigation.navigate('InsertMemo');}}></Text>
      </ScrollView>
      </View>

      <View style ={{flex:0.5, justifyContent: 'center', marginLeft : 16}}>
          <Text style = {styles.text_title}>NOW</Text>
      </View>
      <View style = {styles.mainBlock}>
        <MainBlock progress = {progress} status = {status} name = {currentlecture.name} setInfoStamp = {setInfoStamp}/>
      </View>
    </View>

    
  )
}

const styles = StyleSheet.create({
  container :{
    width : '100%',
    flex : 1,
    backgroundColor : '#F7F7FC'
  },
  swag : { 
    marginTop : 57,
    flex: 0.3,
    justifyContent : "center",
  },
  swagtext:{
      fontFamily: "NanumSquareEB",
      fontStyle: "normal",
      fontSize: 17,
      textAlign: "center",
    },
  date :{
    flex :0.3, 
    justifyContent : 'center',
    marginLeft : 16
    //backgroundColor:'yellow'
  },
  welcomeText :{
    fontSize : 17,
    fontFamily : 'NanumSquareR',
    color : '#4E4B66',
    textAlign : 'left',
    marginLeft : 16
  },
  text_title : {
    fontSize : 17,
    fontFamily : 'NanumSquareEB',
    color : '#4E4B66',
    textAlign : 'left',
    marginTop : 'auto',
    marginBottom : 'auto'
  },
  mainBlock :{
    flex :3.7,
    marginTop : 0,
    alignItems : 'center',
    marginLeft : 16,
    marginRight : 16,
    

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