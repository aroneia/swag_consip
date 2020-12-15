import React from 'react';
import {View, Text,Image,FlatList, StyleSheet,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'
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
        var lastsch = lecturedata.lectureList[i].schedule[schlen-1];
            
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
        var lastsch = lecturedata.lectureList[i].schedule[schlen-1];
            
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
        var lastsch = lecturedata.lectureList[i].schedule[schlen-1];
            
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
        var lastsch = lecturedata.lectureList[i].schedule[schlen-1];
            
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
        var lastsch = lecturedata.lectureList[i].schedule[schlen-1];
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
        var lastsch = lecturedata.lectureList[i].schedule[schlen-1];
        
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
    var lastsch = lecturedata.lectureList[idx].schedule[schlen-1];
        
    //if(lastsch>realtoday){  //현재 강의
        return( <Image style={{left:34, top:-25}} source={require('../assets/icons/now_lec.png')} ></Image>);
    //}

}

function show_lastpic(idx){


    var schlen = lecturedata.lectureList[idx].total_num;
    var lastsch = lecturedata.lectureList[idx].schedule[schlen-1];
        
    if(lastsch<realtoday){  //지난 강의
        var t = lecturedata.lectureList[idx].total_num;
        var n = lecturedata.lectureList[idx].now_num;

        if(t==n){   //완료했다면 완료강의 표시
            return(<Image style={{left:34, top:-25}} source={require('../assets/icons/fin_lec.png')} ></Image>);
        }
        return(<Image style={{left:34, top:-25}} source={require('../assets/icons/last_lec.png')} ></Image> );
    }

}

function makeindexlist(num){
    var indexlist = [];
    for(var i=0;i<num;i++){
        indexlist.push(i);
    }
    return indexlist;
}

const indexlist = makeindexlist(Object.keys(lecturedata.lectureList).length);
console.log(indexlist);

const LectureMode = ({navigation}) => {
    var totallen = Object.keys(lecturedata.lectureList).length;

    var last = cal_last();
    var wan = cal_wan();


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
            <View style={styles.minicontainer}>
                <View style={{backgroundColor:'white', width:68, height:90, borderRadius:16, marginLeft:51, marginRight:5, marginTop:5}}>
                    <Image style={{ left:21}} source={require('../assets/icons/now_lec.png')} ></Image>
                    <Text style={{top:10, fontSize:15, textAlign:'center'}}>현재강의 </Text>
                    <Text style={{top:15,textAlign:'center', fontSize:20, fontFamily : 'NanumSquareB'}}>{totallen-last} </Text>                
                </View>
                <View style={{backgroundColor:'white', width:68, height:90, borderRadius:16, margin:5}}>
                    <Image style={{ left:21}} source={require('../assets/icons/last_lec.png')} ></Image>
                    <Text style={{top:10, fontSize:15, textAlign:'center'}}> 지난강의 </Text> 
                    <Text style={{top:15,textAlign:'center', fontSize:20, fontFamily : 'NanumSquareB'}}>{last} </Text>          
                </View>
                <View style={{backgroundColor:'white', width:68, height:90, borderRadius:16, margin:5}}>
                    <Image style={{ left:21}} source={require('../assets/icons/fin_lec.png')} ></Image>
                    <Text style={{top:10, fontSize:15, textAlign:'center'}}> 완료강의</Text>             
                    <Text style={{top:15,textAlign:'center', fontSize:20, fontFamily : 'NanumSquareB'}}>{wan} </Text>          
                </View>
                <View style={{backgroundColor:'white', width:68, height:90, borderRadius:16, margin:5}}>
                    <Image style={{ left:21}} source={require('../assets/icons/all_lec.png')} ></Image>
                    <Text style={{top:10, fontSize:15, textAlign:'center'}}> 전체강의 </Text>    
                    <Text style={{top:15,textAlign:'center', fontSize:20, fontFamily : 'NanumSquareB'}}>{totallen} </Text>          
                </View>
            </View>

            <View style={{backgroundColor:'#F7F7FC'}}>
                <Text style={{fontSize:18, fontFamily:'NanumSquareB', marginLeft:20, marginBottom:5, marginTop:10}}>현재 강의</Text>
                
            </View>
           
            <View style={styles.back}>
            <FlatList
                data={nowleclist}
                renderItem={({ item, index}) => (
                    <View
                    style={{
                            backgroundColor: '#ffffff',
                            padding:10,
                            margin:10,
                            width:110,
                            height:162,
                            borderRadius:16,
                        }}  
                        cardElevation={2}
                        cardMaxElevation={2}
                        cornerRadius={16}>
                    
                    {show_nowpic(indexlist[index])}
                    <Text style={{marginTop:-15, fontSize:15, paddingBottom:15,textAlign:'center'}} onPress={()=>{
                                navigation.navigate('Lecturedetail',{id:item, perc:nowperlist[index]});}
                            }> {item}</Text>
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
                    
                </View>
            )}
            keyExtractor={(game) => game.id}
            numColumns={3}/>
            </View>

            <View style={{backgroundColor:'#F7F7FC'}}>
                <Text style={{fontSize:18, fontFamily:'NanumSquareB', marginLeft:20, marginBottom:5, marginTop:10}}>지난 강의</Text>
            </View>
            <View style={styles.back}>

            <FlatList
                data={lastleclist}
                renderItem={({ item, index}) => (
                    <View
                    style={{
                            backgroundColor: '#ffffff',
                            padding:10,
                            margin:10,
                            width:110,
                            height:162,
                            borderRadius:16,
                            
                        }}  
                        cardElevation={2}
                        cardMaxElevation={2}
                        cornerRadius={16}>
                    
                    {show_lastpic(indexlist[index])}
                    <Text style={{marginTop:-15, fontSize:15, paddingBottom:15,textAlign:'center'}} onPress={()=>{
                                navigation.navigate('Lecturedetail',{id:item, perc:lastperlist[index]});}
                            }> {item}</Text>
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
                    
                </View>
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
        minicontainer:{
            flexDirection:'row'
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


export default LectureMode;