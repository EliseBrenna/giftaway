import React from 'react';
import * as Font from 'expo-font';
import { TouchableOpacity, Touchable } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
     } from 'react-native';


import * as data from '../../src/gifts.json';
const gifts = data.default;
const motherGifts = gifts.filter(mother => mother.gender === 'female');
console.log(motherGifts);

export default class Home extends React.Component {
    static navigationOptions = {
        title: '',
        headerStyle: {
            height: 0,
            borderBottomWidth: 0
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
            isLoading: true,
        }
    }



      render() {
        
        return (
            <View>

                <Text>MOTHER</Text>
               

            </View>
        )

    };
  }

    
