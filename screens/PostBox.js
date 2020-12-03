import React, {useState, useEffect} from 'react';
import { View,Text, StyleSheet } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
import PostBlocks from './components/home/PostBlocks'

const SWAG_PURPLE = '#5235BB';

//
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
            <View style ={{flex :0.5, flexDirection : "row"}}>

                <TouchableOpacity
                style = {{flex:1, justifyContent : 'center'}}
                title="to Home"
                onPress={() => navigation.navigate('Home')}
                >
                <Text>뒤로가기</Text>
            </TouchableOpacity>

                <Text style = {styles.text_title}>외계인친구들</Text>
            </View>
            <View style ={{flex:1}}>
                <Text>안녕하세요 일소님</Text>
                <Text>지금까지 함꼐공부했던 친구들로부터 편지가 도착했어요.</Text>
            </View>
            <View style ={styles.postblock_container}>
                <Text>2020</Text>
                <PostBlocks animals = {animals}/>
            </View>
            <View style ={styles.postblock_container}>
                <Text>2019</Text>
                <PostBlocks animals = {animals}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        paddingTop: 60,
        paddingHorizontal : 10
    },
    postblock_container:{
        flex :3,
        
    },
    text_title : {
        flex : 1,
        fontSize : 25,
        fontFamily : 'NanumSquareEB',
        color : '#5235BB',
        marginLeft : 10,
        textAlign : 'left'
      },
})

export default PostBox;
