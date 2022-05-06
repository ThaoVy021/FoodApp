import React from 'react';
import {TouchableOpacity, Text, View, Platform, ScrollView} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import DetailProduct from '../components/DetailProduct';

export default class DetailScreen extends Component {
  onPressChuyenPageMap = () => {
    this.props.navigation.navigate('map', {
      hello: "Màn hình Detail gửi lời chào"
    })
  }
    render(){
      return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <TouchableOpacity 
          onPress={this.onPressChuyenPageMap}
        >
          <Text>Chuyển tới trang Map</Text>
        </TouchableOpacity> */}   
         <DetailProduct/>
        </View>
      )
    }
}