import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './Home';
import Mother from './Mother';


const RootStack = createStackNavigator({   
    Home: {
    screen: Home,
  },
  Mother: {
    screen: Mother,
},
});
const AppNavigator = createAppContainer(RootStack);


export default AppNavigator;
