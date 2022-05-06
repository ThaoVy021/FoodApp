import { Text, View, Image, FlatList } from 'react-native'
import React, { Component } from 'react'
import { restaurantData, icons } from '../../assets/data/Constant'


detailProduct = ({item}) => {
  console.log(item.menu)
  return (
    <Image style={{width: 300, height: 200}} source={item.menu[0].photo}/>
  )
}

export default class DetailProduct extends Component {
  render() {
    return (
      <View>
        <View>
          <FlatList
              data={restaurantData}
              renderItem={detailProduct}
          />
        </View>
        <Image style={{width: 300, height: 200}} source={restaurantData[0].menu.photo}/>
      </View>
    )
  }
}