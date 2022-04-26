import React from 'react';
import {View} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailScreen from '../detail/DetailScreen';
import MapScreen from '../map/MapScreen';
import { icons } from '../../assets/data/Constant';
import HomeTitle from '../components/HomeTitle';
import HomeProduct from '../components/HomeProduct';

// const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator();
export default HomeScreen = ({navigation}) => {
  const onPressChuyenPageDetail = () => {
    navigation.navigate('detail', {
      hello: "Màn hình Home gửi lời chào"
    })
  }
    return(
      <View>
        <HomeTitle />
        <HomeProduct />
      </View>
    
      // <Drawer.Navigator>
      //   <Drawer.Screen name='detail_draw' component={DetailScreen} />
      //   <Drawer.Screen name='map_draw' component={MapScreen} />
      // </Drawer.Navigator>

      // <Tab.Navigator>
      //   <Tab.Screen name='detail_tab' component={DetailScreen}/>
      //   <Tab.Screen 
      //     name='map_tab' 
      //     component={MapScreen}
      //     options={{
      //       tabBarIcon: (focused) => (
      //         <Text style={{
      //           color: focused ? 'red' : 'black'
      //         }}>Customer</Text>
      //       )
      //     }}
      //   />
      // </Tab.Navigator>
    )
}