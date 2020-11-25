
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Fb from './screens/Fb'
import Insta from './screens/Insta'

export default class App extends React.Component {
  render() {
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Fb : {screen : Fb},
  Insta : {screen : Insta}
})

const AppContainer = createAppContainer(TabNavigator)
