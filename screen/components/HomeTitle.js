import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from './HomeTitleStyle'

export default class HomeTitle extends Component {
  render() {
    return (
      <View style={styles.homeTitle}>
        <Text style={styles.homeTitle_name}>Main</Text>
        <Text style={styles.homeTitle_name}>Categories</Text>
      </View>
    )
  }
}