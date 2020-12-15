import React, {useState, useEffect} from 'react';
import { View,Text, Image, StyleSheet, ScrollView } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
import PostBlocks from './components/home/PostBlocks'


const SWAG_PURPLE = '#5235BB';



const PostBox = ({navigation}) => {
    const [animals, setAnimals] = useState([]);
    
    useEffect(() => {
        const fetchPosts = async () =>{
            const data = require('../json/alien_friend.json');
            setAnimals(data);
        };
        fetchPosts();
    }, [])
    console.log(animals);
    

    return(
        <View style={styles.container}>
            <View style ={{flex :0.5, flexDirection : "row", alignItems : 'center'}}>
                <TouchableOpacity
                style = {{flex:1, justifyContent : 'center'}}
                title="to Home"
                onPress={() => navigation.navigate('Home')}
                >
                <Image 
                style = {styles.backIcon}
                source = {require('../assets/icons/Backarrow.png')}/>
            </TouchableOpacity>
                <Text style = {styles.text_title}>외계인친구들</Text>
            </View>

            <View style ={styles.itemBox}>
                <View style = {{flex: 2}}>
                    <Text style = {styles.subtitle}>안녕하세요 일소님</Text>
                    <Text style = {styles.text}>지금까지 함꼐공부했던 친구들로부터 편지가 도착했어요.</Text>
                </View>
                <View style = {{flex : 1}}>
                    <Image 
                    source = {require('../assets/images/Ufo.png')}
                    style = {styles.ufoIcon}
                    />    
                </View>
            </View>

            <View style = {styles.line}></View>
            <View style = {styles.scrollWrapper}>
            <ScrollView>
                <View style ={styles.postblock_container}>
                    <Text style ={styles.year}>2020</Text>
                    <PostBlocks animals = {animals} navigation = {navigation}/>
                    
                </View>

            </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        paddingTop: 60,
        paddingHorizontal : 10,
        backgroundColor:'#F7F7FC'
    },
    line : {
        borderBottomWidth : 1,
        borderColor : '#D9DBE9'
    },
    itemBox:{
        flex:2,
        flexDirection : "row",
        alignItems : 'flex-end',
        marginBottom : 5
    },
    scrollWrapper:{flex : 6},
    postblock_container:{
        flex :1.5,
        justifyContent : 'flex-start',

      
    },
    text_title : {
        flex : 1,
        fontSize : 17,
        fontFamily : 'NanumSquareEB',
        color : '#14142A',
        marginLeft : 10,
        textAlign : 'left'
      },
      subtitle:{
        fontFamily: "NanumSquareEB",
        fontSize: 17,
        color: "#4E4B66"
      },
      year:{
        fontFamily: "NanumSquareEB",
        fontSize: 17,
        color: "#4E4B66",
        marginBottom : 5,
        marginTop : 10,
        justifyContent : 'center'
      },
      text:{
        fontFamily: "NanumSquareR",
        fontSize: 13,
        color: "#4E4B66",
        marginRight : 10,
        marginVertical : 10
      },
      backIcon :{
          aspectRatio : 1,
          alignSelf: 'stretch',
          width : 50,
          height :50
      },
      ufoIcon:{
          aspectRatio : 108.36/141.07,
          height : 150,
      }
})

export default PostBox;
