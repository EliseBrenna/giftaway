import React from 'react';
import { TouchableOpacity, Touchable } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';
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




export default class Dad extends React.Component {
    static navigationOptions = {
        title: '',
        headerStyle: {
          backgroundColor: '#FFF',
          height: '30px',
          borderBottomWidth: 0
        },
        headerTintColor: '#FFF',
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
                                <Text style={styles.customFont}>Price</Text>
                            </MenuOption>

                            <MenuOption value={'Age'}>
                                <Text style={styles.customFont}>Age</Text>
                            </MenuOption>

                        </MenuOptions>

                    </Menu>
                </MenuProvider>
                <Text>Dad</Text>
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