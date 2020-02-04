import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


const RootStack = createStackNavigator({   
    Home: {
    screen: Home,
  }
});
const AppNavigator = createAppContainer(RootStack);


export default AppNavigator;
