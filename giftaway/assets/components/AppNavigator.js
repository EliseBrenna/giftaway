import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './Home';
import Mom from './Mom';
import Dad from './Dad';
import Brother from './Brother';
import Sister from './Sister';
import Girlfriend from './Girlfriend';
import Boyfriend from './Boyfriend';


const RootStack = createStackNavigator({   
    Home: {
    screen: Home,
  },
  Mom: {
    screen: Mom,
  },
  Dad : {
    screen: Dad,
  },
  Brother: {
    screen: Brother,
  },
  Sister: {
    screen: Sister,
  },
  Girlfriend: {
    screen: Girlfriend,
  },
  Boyfriend: {
    screen: Boyfriend,
  }
});
const AppNavigator = createAppContainer(RootStack);


export default AppNavigator;
