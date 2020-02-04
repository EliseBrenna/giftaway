import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { 
  StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
     } from 'react-native';

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
        return (
            <View>
                <Text>Hei</Text>
            </View>
        )
    }
}