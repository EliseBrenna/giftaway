import React from 'react';
import { TouchableOpacity, Touchable } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
     } from 'react-native';



export default class Sister extends React.Component {
    static navigationOptions = {
        title: '',
        headerStyle: {
            height: 0,
            borderBottomWidth: 0
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Sister</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
});