import React,{useState} from 'react';
import {View, StyleSheet,Text, Image, TouchableOpacity,Modal} from 'react-native';
import Dash from 'react-native-dash';
import data from '../../../json/lecture.json';



const checkLength =(name) => {
    if (name.length > 6) {
        const sliced = `${name.slice(0,7)}...`;
        return sliced
    }
    return name;
}


function getTodayLabel() {
    
    var week = new Array('SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');
    
    var today = new Date().getDay();
    var todayLabel = week[today];
    
    return todayLabel;
}
 

function checktoday(){
    let todayleclist =[];
    let istoday=0;

    const todayday = getTodayLabel();
    console.log(todayday);
    let len = Object.keys(data.lectureList).length;
    for(let i=0;i<len;i++){

        for(var j=0;j< Object.keys(data.lectureList[i].days).length;j++){
            console.log(data.lectureList[i].days[j]);
             if(todayday == data.lectureList[i].days[j]){
                 console.log("오늘에 있네요~");
                 todayleclist.push(data.lectureList[i].name);
                 istoday=1;
             }
        }
    }
    
    return todayleclist;    
}
const test = checktoday();
console.log("오늘 강의 목록은 "+test);

function read_lectime(){

    let todaylectimelist =[];
    let time=[];

    const todayday = getTodayLabel();
    
    let len = Object.keys(data.lectureList).length;
    for(let i=0;i<len;i++){
        for(var j=0;j< Object.keys(data.lectureList[i].days).length;j++){
            console.log(data.lectureList[i].days[j]);
             if(todayday == data.lectureList[i].days[j]){
                time=data.lectureList[i].Time;
                //console.log("여기여기"+ data.lectureList[i].Time[0]);
                todaylectimelist.push(time);
             }
        }
        
    }
    return todaylectimelist;    
}

const lecttimelist = read_lectime();
console.log("오늘의 강의 시간들은: "+lecttimelist[0]);

lecttimelist.sort(function(a, b) { // 오름차순
    return a[0] < b[0]  ? -1 : a[0]  > b[0]  ? 1 : 0;
});




const Block = ({stampStatus}) => {

    const stampImage = (lectname) =>{
         //도장의 상태 before, late, absent, good 
         console.log("------------------stamp----->",stampStatus);
        if(stampStatus == "before"){
            return require('../../../assets/icons/stampBefore.png')
        }else{
            const lects = data.lectureList;
            for(let index =0; index <lects.length; index++){
              if(lects[index].name == lectname){
                const stamps = lects[index].stamp
                console.log("stamp value of" + lectname + " is " + stamps[stamps.length -1])
                //stamp 값이 1 -> good 
                if(stamps[stamps.length-1] == 1){return require('../../../assets/icons/stampGood.png')}
                else if(stamps[stamps.length-1] == 0){return require('../../../assets/icons/stampLate.png')}
                else return require('../../../assets/icons/stampBefore.png');
                }
            }
        }
    }


    
    const lectname = checktoday();

    const show_name = () => {
        return test.map((el,i) => 

        <TouchableOpacity 
        style ={styles.container}
        key = {i}
        >
            <View style = {{flex:1, alignItems : 'center', justifyContent: 'center'}}>
            <Image
                    style ={styles.stamp}
                    source={stampImage(lectname[i])}
                    resizeMode = "contain"
                    >
                </Image>
            </View>
            <View style={{flex: 0.5}}>
                <Text style = {styles.textname}>{checkLength(test[i])}</Text>
                <Text style = {styles.texttime}>{lecttimelist[i][0]}:{lecttimelist[i][1]}</Text>
            </View>
        </TouchableOpacity>
           
        
    )
    }



    return(
        <View>
            <View style={{flexDirection:'row'}}>
                {show_name()}
            </View>
        </View>   
            
    );
}

const styles = StyleSheet.create({
    container :{
        width: 123,
        aspectRatio: 11/15,
        marginRight : 8,
        backgroundColor : '#FFF',
        borderRadius : 16,
        borderWidth :1,
        borderColor : '#D9DBE9'
        
    },
    stamp:{
        width : 80,
        height : 80,
        aspectRatio: 1,
    },
    blockImage : {
        width : '100%',
        height : '100%',
        //boxShadow: 4px 4px 5px 'rgba(0, 0, 0, 0.2)',
        //borderRadius: 20
    },
    textname : {
        fontSize :15,
        textAlign : "center",
        fontFamily : "NanumSquareEB",
        color : "#4E4B66"
    },
    texttime : {
        fontSize :18,
        textAlign : "center",
        fontFamily : "NanumSquareR",
        color : "#4E4B66",
        marginTop : 7
    
    }
    
})

export default Block;