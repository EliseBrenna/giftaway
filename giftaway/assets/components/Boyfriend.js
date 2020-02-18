import React from 'react';
import { TouchableOpacity, Touchable } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';
import Slider from "react-native-slider";
import { 
  StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    Platform,
    Alert, 
    YellowBox
     } from 'react-native';




export default class Boyfriend extends React.Component {
    static navigationOptions = {
        title: '',
        headerStyle: {
          backgroundColor: '#FFF',
          height: '30px',
          borderBottomWidth: 0,
        },
        headerTintColor: '#000',
      };
      
      state = {
        value: 0
      };


    render() {
        return (
            <View style={styles.container}>

                <MenuProvider style={{ flexDirection: 'column', padding: 30}}>
                    <Menu onSelect={value => alert(`You Clicked : ${value}`)}>
                        <MenuTrigger>
                            <Text style={styles.customFont}>Filter</Text>
                        </MenuTrigger>

                        <MenuOptions>
                            <MenuOption value={'Price'}>
                                <Slider
                                style={{width: 190, height: 30, borderRadius: 50}}
                                minimumValue={10}
                                maximumValue={500}
                                step={10}
                            
                                value={this.state.value}
                                onValueChange={value => this.setState({ value })}
                                />
                                <Text style={styles.customFont}>
                                    Price: ${this.state.value}
                                </Text>
                            </MenuOption>

                            <MenuOption value={'Age'}>
                                <Text style={styles.customFont}>Age</Text>
                            </MenuOption>

                        </MenuOptions>

                    </Menu>
                </MenuProvider>

                <Text>Boyfriend</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    customFont: {
        fontFamily: 'Nunito-Light',
        fontSize: '12px',
        color: '#000',
        letterSpacing: '1px',
        fontWeight: 'bold',
        paddingBottom: '10px'
    },
});