import React from 'react';
import * as Font from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { 
  StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
     } from 'react-native';


import mom from '../img/mom.png';
import dad from '../img/dad.png';
import brother from '../img/brother.png';
import sister from '../img/sister.png';
import girlfriend from '../img/girlfriend.png';
import boyfriend from '../img/boyfriend.png';

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
            <View style={styles.container}>

                <Text>WHO ARE YOU GETTING A GIFT?</Text>

                <View style={styles.profilesContainer}>

                    <View style={styles.profiles}>
                        <TouchableOpacity>
                            <Image source={{uri: mom}} style={styles.profilesImages}/>
                        </TouchableOpacity>
                        <Text style={styles.customFont}>Mom</Text>
                    </View>

                    <View style={styles.profiles}>
                        <TouchableOpacity>
                            <Image source={{uri: dad}} style={styles.profilesImages}/>
                        </TouchableOpacity>
                        <Text>Dad</Text>
                    </View>

                    <View style={styles.profiles}>
                        <TouchableOpacity>
                            <Image source={{uri: brother}} style={styles.profilesImages}/>
                        </TouchableOpacity>
                        <Text>Brother</Text>
                    </View>

                    <View style={styles.profiles}>
                        <TouchableOpacity>
                            <Image source={{uri: sister}} style={styles.profilesImages}/>
                        </TouchableOpacity>
                        <Text>Sister</Text>
                    </View>

                    <View style={styles.profiles}>
                        <TouchableOpacity>
                            <Image source={{uri: girlfriend}} style={styles.profilesImages}/>
                        </TouchableOpacity>
                        <Text>Girlfriend</Text>
                    </View>

                    <View style={styles.profiles}>
                        <TouchableOpacity>
                            <Image source={{uri: boyfriend}} style={styles.profilesImages}/>
                        </TouchableOpacity>
                        <Text>Boyfriend</Text>
                    </View>

                </View>

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

/* Styling Home */

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8B195',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profilesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profiles: {
        textAlign: 'center',
        flexBasis: '170px',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25,
    },
    profilesImages: {
        width: 100,
        height:  100,
        resizeMode: 'contain',
    },
    customFont: {
        fontFamily: 'Nunito-Regular',
        fontSize: '14px'
    }
  });