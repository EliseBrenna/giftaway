import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
     } from 'react-native';

import giftaway from '../img/giftaway_logo.png';

export default class Home extends React.Component {
    static navigationOptions = {
        title: '',
        headerStyle: {
            backgroundColor: '#FFF',
            height: 0,
            borderBottomWidth: 0
        },
        headerTintColor: '#FFF'
    };

    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
            isLoading: true,
        }
    }

    async componentDidMount() {
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.setState({ isLoading: false });
        }
    }

    performTimeConsumingTask = async() => {
        return new Promise((resolve) => 
        setTimeout(
            () => { resolve('result') },
            2000
            )
        );
    }

    render() {
        if (this.state.isLoading) {
            return <SplashScreen />;
        } 
        return (
            <View>
                <Text>Hei</Text>
            </View>
        )
    }
}

class SplashScreen extends React.Component {
    render() {
          const splashStyle = {
            logo: {
                width: 170,
                height:  140,
                alignItems: 'center',
                justifyContent: 'center',
            },
            container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                height: '100vh'
            }
        };

        return (

            <View style={splashStyle.container}>
                <LinearGradient
                    colors={['#f8b195', '#f67280']}
                    style={splashStyle.container}>
                    <Image source={{uri: giftaway }} style={splashStyle.logo} />
                </LinearGradient>   
            </View>


    
                

        )
    }
}

