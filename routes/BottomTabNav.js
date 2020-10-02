import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Ingredients from '../screens/Ingredients'
import Complaints from '../screens/Complaints'
import Profile from '../screens/Profile'
import Camera from '../screens/Camera'
import Products from '../screens/Products'

const screens = {
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      activeColor: '#000000',
      inactiveColor: '#000000',
      barStyle: {
        backgroundColor: 'white',
      },
      tabBarIcon: () => <FontAwesome name='user' size={20} color='grey'/>
    }
  },
  Complaints: {
    screen: Complaints,
    navigationOptions: {
      tabBarLabel: 'Complaints',
      activeColor: '#000000',
      inactiveColor: '#000000',
      barStyle: {
        backgroundColor: 'white',
      },
      tabBarIcon: () => <FontAwesome name='frown-o' size={20} color='grey'/>
    }
  },
  Camera: {
    screen: Camera,
    navigationOptions: {
      tabBarLabel: 'Camera',
      activeColor: '#000000',
      inactiveColor: '#000000',
      barStyle: {
        backgroundColor: 'white',
      },
      tabBarIcon: () => <FontAwesome name='camera' size={20} color='grey'/>
    }
  },
  Products: {
    screen: Products,
    navigationOptions: {
      tabBarLabel: 'Products',
      activeColor: '#000000',
      inactiveColor: '#000000',
      barStyle: {
        backgroundColor: 'white',
      },
      tabBarIcon: () => <FontAwesome name='database' size={20} color='grey'/>
    },
  },
  Ingredients: {
    screen: Ingredients,
    navigationOptions: {
      tabBarLabel: 'Ingredients',
      activeColor: '#000000',
      inactiveColor: '#000000',
      barStyle: {
        backgroundColor: 'white',
      },
      tabBarIcon: () => <FontAwesome name='envira' size={20} color='grey'/>
    }
  },
}

const BottomTabNav = createMaterialBottomTabNavigator(screens)
export default createAppContainer(BottomTabNav)
