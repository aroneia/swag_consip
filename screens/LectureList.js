import React from 'react';
import {View, Text,Button,FlatList, StyleSheet,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'
import ProgressCircle from 'react-native-progress-circle'
import lecturedata from './../json/lecture';


SWAG_PURPLE = '#552DEC';
LIGHT_PURPLE = 'rgba(82, 53, 187, 0.09)';

function read_leclist(){
    var ret = [];

    //console.log(typeof(data));
    console.log('-- lec list print----');
    var len = Object.keys(lecturedata.lectureList).length;
    //console.log(len);
    for(var i=0;i<len;i++){
        console.log(lecturedata.lectureList[i].name);
        ret.push(lecturedata.lectureList[i].name);
    }
    return ret;

}
const list = read_leclist();
console.log("list 내용물은");
console.log(list);


function cal_p(){ 
    var per = [];
    var len = Object.keys(lecturedata.lectureList).length;
    console.log(len);
    for(var i=0;i<len;i++){
        var t = lecturedata.lectureList[i].total_num;
        var n = lecturedata.lectureList[i].now_num;
        var p = n/t*100;
        // console.log("총 강의수:" + t);
        // console.log("들은 강의수:" + n);
        // console.log("퍼센트: "+p)
        per.push(p);
    }

    return per;
}

const perlist = cal_p();
console.log(perlist);

const LectureMode = ({navigation}) => {
    
    // const viewlecture = ({item, i}) => {
    //     return(
        //     <CardView
        //     style={{
        //             backgroundColor: '#ffffff',
        //             padding:10,
        //             margin:10,
        //             width:110,
        //             height:162
        //         }}  
        //         cardElevation={2}
        //         cardMaxElevation={2}
        //         cornerRadius={10}>
                   
        //     <Text style={{fontSize:15, paddingBottom:15,textAlign:'center'}} onPress={()=>{
        //                 navigation.navigate('Lecturedetail',{id:item, perc:perlist[i]});}
        //             }> {item}</Text>
        //     <ProgressCircle
        //             percent={perlist[i]}
        //             radius={45}
        //             borderWidth={8}
        //             color="#552DEC"
        //             shadowColor="#D9DBE9"
        //             bgColor="#fff"
        //     >
        //     <Text style={{ fontSize: 18 }}>{perlist[i]+'%'}</Text>
        //     </ProgressCircle>
        // </CardView>
    //     )
        
    //  };

    return(
        <View style= {{backgroundColor : "#F7F7FC", flex :1}}>
        <View style = {styles.container}>
            <Text style = {styles.title}>SWAG</Text>


            <View style = {styles.buttonContainer}>
                <TouchableOpacity
                    style = {{flex:1, justifyContent : 'center'}}
                    title="to Report Calendar"
                    onPress={() => navigation.navigate('Report')}
                >
                    <Text style ={styles.textDark}>캘린더모드</Text>
                </TouchableOpacity>
                
                <View style ={styles.buttonClicked}>
                    <Text style ={styles.text}>강의모드</Text>
                </View>
    
            </View>

            <View style={{backgroundColor:'#F7F7FC'}}>
                <Text style={{fontSize:18, fontFamily:'NanumSquareB', marginLeft:20, marginBottom:5, marginTop:10}}>현재 강의</Text>
                
            </View>
           
            <View style={styles.back}>
            <FlatList
                data={list}
                renderItem={({ item, index}) => (
                    <CardView
                    style={{
                            backgroundColor: '#ffffff',
                            padding:10,
                            margin:10,
                            width:110,
                            height:162
                        }}  
                        cardElevation={2}
                        cardMaxElevation={2}
                        cornerRadius={10}>
                           
                    <Text style={{fontSize:15, paddingBottom:15,textAlign:'center'}} onPress={()=>{
                                navigation.navigate('Lecturedetail',{id:item, perc:perlist[index]});}
                            }> {item}</Text>
                    <ProgressCircle
                            percent={perlist[index]}
                            radius={45}
                            borderWidth={8}
                            color="#552DEC"
                            shadowColor="#D9DBE9"
                            bgColor="#fff"
                    >
                    <Text style={{ fontSize: 18 }}>{perlist[index]+'%'}</Text>
                    </ProgressCircle> 
                </CardView>
                )}
                keyExtractor={(game) => game.id}
                numColumns={3}/>
                
            </View>
           
        </View>
        
        </View>
        
    );
}


const styles = StyleSheet.create(
    {
        container :{
            flex : 1,
            justifyContent : 'center',
            backgroundColor : '#F7F7FC',
            paddingTop : 80,
            marginHorizontal : 15,
            marginBottom : 15
        },
        title:{
            position: 'absolute',
            top : 80,
            fontSize: 17,
            color: '#4F4F4F',
            alignSelf:'center',
            fontFamily : 'NanumSquareEB',
        },
        text: {
            fontSize : 13,
            textAlign : 'center',
            fontFamily : 'NanumSquareB',
            color : 'white'   
        },
        textDark: {
            fontSize : 13,
            textAlign : 'center',
            fontFamily : 'NanumSquareB',
            color : "#6E7191"   
        },
        buttonClicked :{
            flex :1,
            backgroundColor : SWAG_PURPLE,
            justifyContent : 'center',
            borderRadius : 30,
            marginLeft: 80
        },
        buttonContainer : {
            height : 25,
            flexDirection: 'row', 
            justifyContent : 'center',
            borderRadius : 30,
            marginTop: 30,
            marginBottom :20,
            marginHorizontal :20,
            
        },
        back:{
            flex:7.5,
            backgroundColor : '#F7F7FC',
            flexDirection:'row'
        },
        content:{
            flex:1,
            fontFamily : 'NanumSquareB',
            backgroundColor:'#f5a942',
        },
        
        percet:{
            marginTop: 20,
            marginLeft:8,
            width:80,
            height:80
        },
        cc:{
            shadowColor: '#470000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.2,
            elevation: 1,
        }
    }
)

const hotGame = [
    {
      id: "1",
      game: "애니팡4",
      text: "다시 한 팡 붙자! 애니팡4!",
      people: 180,
      src:
        "https://playgame-img.kakaogame.com/production/images/j7eg-2020-06-23/13-58-08-879/appIcon.png",
    },
    {
      id: "2",
      game: "달빛조각사",
      text: "모험가들의 꿈! 달빛조각사",
      people: 260,
      src:
        "https://playgame-img.kakaogame.com/production/images/jjkt-2020-04-21/11-47-10-291/appIcon.jpeg",
    },
    {
      id: "3",
      game: "쿵야 캐치마인드",
      text: "빵터지는 모바일 그림퀴즈 게임!",
      people: 320,
      src:
        "https://playgame-img.kakaogame.com/production/images/t9e4-2019-10-15/23-20-48-778/appIcon.png",
    },
    {
      id: "4",
      game: "테라 클래식",
      text: "같지만 또 다른 세계, 테라 클래식!",
      people: 70,
      src:
        "https://playgame-img.kakaogame.com/production/images/1j22-2019-08-09/14-13-27-593/appIcon.jpeg",
    },
    {
      id: "5",
      game: "프렌즈레이싱",
      text: "프렌즈와 함께 밟아버려씽!",
      people: 670,
      src:
        "https://playgame-img.kakaogame.com/production/images/0ujp-2020-02-20/15-06-34-246/appIcon.png",
    },
    {
      id: "6",
      game: "엘더스크롤:블레이드",
      text: "오리지널 엘더스크롤 시리즈의 신작",
      people: 300,
      src:
        "https://playgame-img.kakaogame.com/production/images/g1vq-2020-07-15/16-54-20-485/appIcon.jpeg",
    },
    {
      id: "7",
      game: "가디언 테일즈",
      text: "띵작 어드벤쳐 가디언테일즈",
      people: 160,
      src:
        "https://playgame-img.kakaogame.com/production/images/npr3-2020-06-30/11-09-04-344/appIcon.png",
    },
    {
      id: "8",
      game: "프렌즈타워",
      text: "손 끝으로 그리는 퍼즐, 프렌즈타워",
      people: 190,
      src:
        "https://playgame-img.kakaogame.com/production/images/l8yf-2020-03-12/10-40-15-851/appIcon.png",
    },
  ];

export default LectureMode;