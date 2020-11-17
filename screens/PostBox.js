import React from 'react';
import { View,Text } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'

const PostBox = ({navigation}) => {
    return(
        <View>
            <TouchableOpacity
                    style = {{flex:1, justifyContent : 'center'}}
                    title="to Home"
                    onPress={() => navigation.navigate('Home')}
                >
                </TouchableOpacity>
        </View>
    )
}

export default PostBox;
