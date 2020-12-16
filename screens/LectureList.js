import React from 'react';
import {View, Text,Image,FlatList, StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
import lecturedata from './../json/lecture';
 
SWAG_PURPLE = '#552DEC';
LIGHT_PURPLE = 'rgba(82, 53, 187, 0.09)';

const today =new Date();   
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
const realtoday= year+""+month+""+date;

function read_leclist(){
    var ret = [];
    
    console.log('-- lec list print----');
    var len = Object.keys(lecturedata.lectureList).length;
    for(var i=0;i<len;i++){
        console.log(lecturedata.lectureList[i].name);
        ret.push(lecturedata.lectureList[i].name);
    }
    return ret;

}
const list = read_leclist();

function read_nowleclist(){
    var nowlec = [];

    var len = Object.keys(lecturedata.lectureList).length;
    for(var i=0;i<len;i++){
        var schlen = lecturedata.lectureList[i].total_num;
        //console.log("총 길이"+schlen);
        //console.log("스케줄 총 길이는: "+Object.keys(lecturedata.lectureList[i].schedule).length);
        //console.log("설마 schlen의 타입이? "+ (schlen-2));
        //console.log("수동으로 마지막 날짜 출력하게: "+lecturedata.lectureList[i].schedule[schlen-2]);
        var lastsch = lecturedata.lectureList[i].schedule[schlen-2];
        console.log("마지막 날짜는"+lastsch);    

        if(lastsch>realtoday){  
            nowlec.push(lecturedata.lectureList[i].name);
        }    
    }
    return nowlec;
}
const nowleclist = read_nowleclist();
console.log("현재 강의:"+nowleclist);

function cal_nowp(){ 
    var per = [];

    var len = Object.keys(lecturedata.lectureList).length;
    for(var i=0;i<len;i++){
        var schlen = lecturedata.lectureList[i].total_num;
        var lastsch = lecturedata.lectureList[i].schedule[schlen-2];
            
        if(lastsch>realtoday){
            var t = lecturedata.lectureList[i].total_num;   // console.log("총 강의수:" + t);
            var n = lecturedata.lectureList[i].now_num;     // console.log("들은 강의수:" + n);
            var p = (n/t*100).toFixed(1);                   // console.log("퍼센트: "+p)
            per.push(p);
        }    
    }
    return per;
}

const nowperlist = cal_nowp();
console.log(nowperlist);


function read_lastleclist(){
    var lastlec = [];

    var len = Object.keys(lecturedata.lectureList).length;
    for(var i=0;i<len;i++){
        var schlen = lecturedata.lectureList[i].total_num;
        var lastsch = lecturedata.lectureList[i].schedule[schlen-2];
            
        if(lastsch<realtoday){  //지난 강의
            lastlec.push(lecturedata.lectureList[i].name)
        }  
    }
    return lastlec;
}
const lastleclist = read_lastleclist();
console.log("지난강의:"+lastleclist);


function cal_lastp(){ 
    var per = [];

    var len = Object.keys(lecturedata.lectureList).length;
    for(var i=0;i<len;i++){
        var schlen = lecturedata.lectureList[i].total_num;
        var lastsch = lecturedata.lectureList[i].schedule[schlen-2];
            
        if(lastsch<realtoday){
            var t = lecturedata.lectureList[i].total_num;   // console.log("총 강의수:" + t);
            var n = lecturedata.lectureList[i].now_num;     // console.log("들은 강의수:" + n);
            var p = (n/t*100).toFixed(1);                   // console.log("퍼센트: "+p)
            per.push(p);
        }    
    }
    return per;
}

const lastperlist = cal_lastp();
console.log(lastperlist);


function cal_last(){

    var len = Object.keys(lecturedata.lectureList).length;
    var last_lect = 0; // false;

    //지난강의인데 완료못함 > 지난강의
    //지난강의인데 완료함 > 완료강의

    //강의가 지났는지 여부 체크
    for(var i=0;i<len;i++){
        var schlen = lecturedata.lectureList[i].total_num;
        var lastsch = lecturedata.lectureList[i].schedule[schlen-2];
        console.log(lastsch);
        console.log(realtoday);
        if(lastsch<realtoday)
            last_lect = last_lect+1;
    }

    return last_lect;
}

function cal_wan(){

    var len = Object.keys(lecturedata.lectureList).length;
    var wan_lect = 0; // false;

    //지난강의인데 완료못함 > 지난강의
    //지난강의인데 완료함 > 완료강의
    
    // 강의가 완료되었는지 여부 체크 
    for(var i=0;i<len;i++){
        var schlen = lecturedata.lectureList[i].total_num;
        var lastsch = lecturedata.lectureList[i].schedule[schlen-2];
        
        if(lastsch<realtoday){  //지난 강의
            var t = lecturedata.lectureList[i].total_num;
            var n = lecturedata.lectureList[i].now_num;

            if(t==n){
                wan_lect = wan_lect+1;
            }
        }
    }
    return wan_lect;
}


function show_nowpic(idx){

    var schlen = lecturedata.lectureList[idx].total_num;
    var lastsch = lecturedata.lectureList[idx].schedule[schlen-2];
        
    //if(lastsch>realtoday){  //현재 강의
        return( <Image style={{alignSelf:"center", top: -13}} source={require('../assets/icons/now_lec.png')} ></Image>);
    //}

}

function show_lastpic(idx){


    var schlen = lecturedata.lectureList[idx].total_num;
    var lastsch = lecturedata.lectureList[idx].schedule[schlen-2];
        
    if(lastsch<realtoday){  //지난 강의
        var t = lecturedata.lectureList[idx].total_num;
        var n = lecturedata.lectureList[idx].now_num;

        if(t==n){   //완료했다면 완료강의 표시
            return(<Image style={{alignSelf:"center", top:-15.5}} source={require('../assets/icons/fin_lec.png')} ></Image>);
        }
        return(<Image style={{alignSelf:"center", top:-15.5}} source={require('../assets/icons/last_lec.png')} ></Image> );
    }

}

function makeindexlist(num){
    var indexlist = [];
    for(var i=0;i<num;i++){
        indexlist.push(i);
    }
    return indexlist;
}

const nowindexlist = makeindexlist(Object.keys(nowleclist).length);
const lastindexlist = makeindexlist(Object.keys(lastleclist).length);
console.log("현재 인덱스리스트 길이:"+Object.keys(nowindexlist).length);
console.log("과거 인덱스리스트 길이:"+Object.keys(lastindexlist).length);


const LectureMode = ({navigation}) => {
    var totallen = Object.keys(lecturedata.lectureList).length;

    var last = cal_last();
    var wan = cal_wan();


    return(
        <View style = {styles.container}>

            <View style = {styles.swag}>
                <Text style= {styles.swagtext}>SWAG</Text>
            </View>
            
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

            <View style={{flexDirection:'row',justifyContent:'center',flex: 1}}>
                    <View style={styles.miniblock}>
                        <Image style={{resizeMode:"stretch"}} source={require('../assets/icons/now_lec.png')} ></Image>
                        <Text style={styles.minibtitle}>현재강의</Text>
                        <Text style={styles.minibcount}>{totallen-last} </Text>                
                    </View>
                    <View style={styles.miniblock}>
                        <Image style={{resizeMode:"stretch",top : -1.4}} source={require('../assets/icons/last_lec.png')} ></Image>
                        <Text style={[styles.minibtitle,{top:0}]}>지난강의</Text> 
                        <Text style={[styles.minibcount,{top:9}]}>{last} </Text>          
                    </View>
                    <View style={styles.miniblock}>
                        <Image style={{resizeMode:"stretch"}} source={require('../assets/icons/fin_lec.png')} ></Image>
                        <Text style={styles.minibtitle}>완료강의</Text>             
                        <Text style={styles.minibcount}>{wan} </Text>          
                    </View>
                    <View style={styles.miniblock}>
                        <Image style={{resizeMode:"stretch"}} source={require('../assets/icons/all_lec.png')} ></Image>
                        <Text style={styles.minibtitle}>전체강의</Text>    
                        <Text style={styles.minibcount}>{totallen} </Text>          
                    </View>
            </View>

            <View style = {styles.shadow}></View>
            <View style = {{flex: 7.5}}>
            <ScrollView style = {{flex: 7.5}}>

                <Text style={{fontSize:17, fontFamily:'NanumSquareEB', color : "#14142A",marginBottom:5, marginTop:20}}>현재 강의</Text>
            <View style={{flexDirection:'row'}}>
                <FlatList
                    numColumns={3}
                    data={nowleclist}
                    renderItem={({ item, index}) => (
                    <TouchableOpacity
                        style={styles.lecturecard} 
                        onPress={()=>{ navigation.navigate('Lecturedetail',{id:item, perc:nowperlist[index]});}}
                        >
                        {show_nowpic(nowindexlist[index])}
                        <Text style={styles.lecturename} > {item}</Text>
                        <View style = {{flex:1,justifyContent:"flex-end"}}>
                        <ProgressCircle
                                percent={nowperlist[index]}
                                radius={45}
                                borderWidth={8}
                                color="#552DEC"
                                shadowColor="#D9DBE9"
                                bgColor="#fff"
                        >
                        <Text style={{ fontSize: 18 }}>{nowperlist[index]+'%'}</Text>
                        </ProgressCircle>
                        <View style = {{height:10}}></View>
                        </View> 
                        
                    </TouchableOpacity>
                )}
                keyExtractor={(game) => game.id}
                numColumns={3}/>
            </View>


            <View style={{backgroundColor:'#F7F7FC'}}>
                <Text style={{fontSize:17, fontFamily:'NanumSquareEB', color : "#14142A",marginBottom:5, marginTop:20}}>지난 강의</Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <FlatList
                data={lastleclist}
                renderItem={({ item, index}) => (
                    <TouchableOpacity
                    style={styles.lecturecard} 
                    onPress={()=>{navigation.navigate('Lecturedetail',{id:item, perc:lastperlist[index]});}}
                    >
                    
                    {show_lastpic(lastindexlist[index])}
                    <Text style={styles.lecturename} > {item}</Text>
                    <View style = {{flex:1,justifyContent:"flex-end"}}>

                    <ProgressCircle
                            percent={lastperlist[index]}
                            radius={45}
                            borderWidth={8}
                            color="#552DEC"
                            shadowColor="#D9DBE9"
                            bgColor="#fff"
                    >

                    <Text style={{ fontSize: 18 }}>{lastperlist[index]+'%'}</Text>
                    </ProgressCircle> 
                    <View style = {{height:10}}></View>
                    </View>
                    </TouchableOpacity>
            )}
            keyExtractor={(game) => game.id}
            numColumns={3}/>
            </View>
            </ScrollView>
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
            paddingHorizontal : 15,
        },
        swag : { 
          marginTop : 61,
          flex: 0.3,
          justifyContent : "center",
        },
        swagtext:{
            fontFamily: "NanumSquareEB",
            fontStyle: "normal",
            fontSize: 17,
            textAlign: "center",
          },
        miniblock:{
            backgroundColor:'white', 
            width: 58, 
            height:80, 
            borderRadius:16, 
            marginHorizontal :6,
            alignItems : 'center',
        },
        minibtitle:{
            top:3, 
            fontSize:11,
            fontFamily : 'NanumSquareR',
            color:"#4E4B66",
            textAlign:'center'
        },
        minibcount:{
            top:12,
            textAlign:'center', 
            fontSize:18, 
            color:"#4E4B66",
            fontFamily : 'NanumSquareEB'
        },
        shadow :{
            height:25,
            marginHorizontal : -16,
            backgroundColor:'#F7F7FC',
            borderBottomWidth:1,
            borderColor:"#D9DBE9",
            shadowColor: '#000',
            shadowOffset: { width:0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 2,
            elevation: 1,
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
        },
        buttonContainer : {
            height : 25,
            flexDirection: 'row', 
            justifyContent : 'center',
            borderRadius : 30,
            marginTop: 15,
            marginBottom :20,
            marginHorizontal :100,
        },
        lecturecard:{
            backgroundColor: '#ffffff',
            alignItems : "center",
            marginTop:17,
            marginHorizontal:5,
            width: "30%",
            height:165,
            borderRadius:16,
            borderColor : "#D9DBE9",
            borderWidth:1,
        },
        lecturename:{
            marginTop:-5,
            fontSize:14, 
            fontFamily:'NanumSquareEB', 
            color : "#4E4B66", 
            paddingHorizontal:10,
            paddingBottom:15,
            textAlign:'center'
        }
        ,
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


export default LectureMode;