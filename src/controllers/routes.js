import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '#views/pages/home-page';
import Cart from '#views/pages/cart-page';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart
    },
    {
      defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#7159c1',
        },
      },
    },
  ),
);

export default Routes;
