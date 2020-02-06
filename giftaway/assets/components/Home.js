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


import mom from '../img/mother.png';
import dad from '../img/father.png';
import brother from '../img/brother.png';
import sister from '../img/sister.png';
import girlfriend from '../img/girlfriend.png';
import boyfriend from '../img/boyfriend.png';
import giftaway from '../img/giftaway_logo.png';

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

        try {
            await Font.loadAsync({
              'Quicksand-Bold': require('../fonts/Quicksand-Bold.ttf'),
              'Nunito-Light': require('../fonts/Nunito-Light.ttf')
            })
      
            this.setState({
              fontLoaded: true
            })
          } catch (err) {
            console.log(err);
          }

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

                <Text style={styles.customFontHeader}>DON'T GIFT UP YET . . .</Text>

                <Text style={styles.customFont2}>Let us assist you with finding the perfect present. <br>
                </br>Pick the person you need help with.</Text>

                <View style={styles.profilesContainer}>

                    <View style={styles.profiles}>
                        <TouchableOpacity>
                            <Image source={{uri: mom}} style={styles.profilesImages}/>
                        </TouchableOpacity>
                        <Text style={styles.customFont}>MOM</Text>
                    </View>

                    <View style={styles.profiles}>
                        <TouchableOpacity>
                            <Image source={{uri: dad}} style={styles.profilesImages}/>
                        </TouchableOpacity>
                        <Text style={styles.customFont}>DAD</Text>
                    </View>

                    <View style={styles.profiles}>
                        <TouchableOpacity>
                            <Image source={{uri: brother}} style={styles.profilesImages}/>
                        </TouchableOpacity>
                        <Text style={styles.customFont}>BROTHER</Text>
                    </View>
                    
                    <View style={styles.profiles}>
                        <TouchableOpacity>
                            <Image source={{uri: sister}} style={styles.profilesImages}/>
                        </TouchableOpacity>
                        <Text style={styles.customFont}>SISTER</Text>
                    </View>

                    <View style={styles.profiles}>
                        <TouchableOpacity>
                            <Image source={{uri: girlfriend}} style={styles.profilesImages}/>
                        </TouchableOpacity>
                        <Text style={styles.customFont}>GIRLFRIEND</Text>
                    </View>

                    <View style={styles.profiles}>
                        <TouchableOpacity>
                            <Image source={{uri: boyfriend}} style={styles.profilesImages}/>
                        </TouchableOpacity>
                        <Text style={styles.customFont}>BOYFRIEND</Text>
                    </View>

                </View>

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
            },
            slogan: {
                fontFamily: 'Quicksand-Bold',
                fontSize: 18,
                color: 'white'
            }
        };

        return (

            <View style={splashStyle.container}>
                <LinearGradient
                    colors={['#ef0870', '#52308c']}
                    style={splashStyle.container}>
                    {/* <Image source={{uri: giftaway }} style={splashStyle.logo} /> */}
                    <Text style={splashStyle.slogan}>Don't gift up!</Text>
                </LinearGradient>   
            </View>


    
                

        )
    }
}

/* Styling Home */

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
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
        flexBasis: '120px',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25,
        backgroundColor: '#000',
        margin: '10px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    profilesImages: {
        width: 100,
        height:  100,
        resizeMode: 'contain',
    },
    customFontHeader: {
        fontFamily: 'Quicksand-Bold',
        fontSize: '20px',
        paddingBottom: '20px'
    },
    customFont: {
        fontFamily: 'Nunito-Light',
        fontSize: '12px',
        color: '#FFF',
        letterSpacing: '1px',
        fontWeight: 'bold',
        paddingBottom: '10px'
    },
    customFont2: {
        fontFamily: 'Nunito-Light',
        fontSize: '12px',
        color: '#000',
        letterSpacing: '1px',
        fontWeight: 'bold',
        paddingBottom: '10px',
        textAlign: 'center'
    }
  });
