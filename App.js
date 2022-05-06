import 'react-native-gesture-handler';
import React from 'react';
import {Image, Text, View, Platform, TextInput, Button} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/home/HomeScreen';
import DetailScreen from './screen/detail/DetailScreen';
import MapScreen from './screen/map/MapScreen';
import HomeBottomTab from './screen/components/HomeBottomTab';
import { icons } from './assets/data/Constant';
import { style, styles } from './AppStyle';

const Stack = createNativeStackNavigator();
export default class App extends Component {
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='home' 
            component={HomeScreen}
            options = {{
              headerTitle: () => (
                <TextInput
                  placeholder="745 LinColn PI"
                  placeholderTextColor= 'black'
                  style={styles.homeHeaderInput}
                />
              ),
              headerLeft: () => (
                <Image style={styles.homeHeaderImg} source={icons.nearby}/>
              ),
              headerRight: () => (
                <Image style={styles.homeHeaderImg} source={icons.shopping}/>
              ),
            }}
          />
          <Stack.Screen 
            name='detail' 
            component={DetailScreen}
            options = {{
              headerTitle: () => (
                <TextInput
                  placeholder="Burgers Story"
                  placeholderTextColor= 'black'
                  style={styles.homeHeaderInput}
                />
              ),
              headerLeft: () => (
                <Image style={styles.homeHeaderImg} source={icons.back}/>
              ),
              headerRight: () => (
                <Image style={styles.homeHeaderImg} source={icons.list}/>
              ),
            }}
          />
          <Stack.Screen name='map' component={MapScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
