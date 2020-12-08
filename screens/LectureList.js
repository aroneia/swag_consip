import React from 'react';
import {View, Text,Button, StyleSheet,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'
import ProgressCircle from 'react-native-progress-circle'
import lecturedata from './../json/lecture';


function read_leclist(){
    var ret = [];

    //console.log(typeof(data));
    console.log('-- lec list print----');
    var len = Object.keys(lecturedata.lectureList).length;
    console.log(len);
    for(var i=0;i<len;i++){
        console.log(lecturedata.lectureList[i].name);
        ret.push(lecturedata.lectureList[i].name);
    }
    return ret;

}
const list = read_leclist();
console.log(list);


function cal_p(){ 
    var per = [];
    var len = Object.keys(lecturedata.lectureList).length;
    console.log(len);
    for(var i=0;i<len;i++){
        var t = lecturedata.lectureList[i].total_num;
        var n = lecturedata.lectureList[i].now_num;
        var p = n/t*100;
        console.log("총 강의수:" + t);
        console.log("들은 강의수:" + n);
        console.log("퍼센트: "+p)
        per.push(p);
    }

    return per;
}

const perlist = cal_p();
console.log(perlist);

const LectureMode = ({navigation}) => {
    

    const viewlecture = () => {
        return list.map((el, i) =>
        <View>
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
                            navigation.navigate('Lecturedetail',{id:list[i], perc:perlist[i]});}
                        }> {list[i]}</Text>
                     <ProgressCircle
                        percent={perlist[i]}
                        radius={45}
                        borderWidth={8}
                        color="#552DEC"
                        shadowColor="#D9DBE9"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 18 }}>{perlist[i]+'%'}</Text>
                    </ProgressCircle>
            </CardView>
     </View>
        )
        
     }

    return(
        <View style = {styles.container}>
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
            {viewlecture()}
           
            </View>
           
        </View>
        
        
        
    );
}


const styles = StyleSheet.create(
    {
        container :{
            flex : 1,
            paddingTop : 80,
            backgroundColor : '#F7F7FC'
        },
        text: {
            fontSize : 18,
            textAlign : 'center',
            fontFamily : 'NanumSquareB',
            color : 'white'  
        },
        textDark: {
            fontSize : 18,
            textAlign : 'center',
            fontFamily : 'NanumSquareB',
            color : '#552DEC'   
        },
        buttonClicked :{
            flex :1,
            backgroundColor : '#552DEC',
            justifyContent : 'center',
            borderRadius : 30
        },
        buttonContainer : {
            flex:0.4, flexDirection: 'row', 
            backgroundColor : LIGHT_PURPLE,
            justifyContent : 'center',
            borderRadius : 30,
            marginBottom :20,
            marginHorizontal :20,
            
        },
        title:{
            flex:0.5,
            backgroundColor : '#F7F7FC',
            textAlign:'center',
            fontFamily : 'NanumSquareB'
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