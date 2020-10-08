import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppTabNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadScreen from './Screens/ReadScreen';
import WriteScreen from './Screens/WriteScreen';

 
export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  Writescreen : {screen:WriteScreen},
  ReadScreen : {screen:ReadScreen}
})
const AppContainer = createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
