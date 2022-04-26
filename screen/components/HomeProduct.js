import { Text, View, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { styles } from './HomeProductStyle'
import { icons,categoryData } from '../../assets/data/Constant'

var bs = []

for (let i = 0; i < categoryData.length; i++) {
    bs.push(
        <View style={styles.homeProduct_menu_item}>
            <View style={styles.homeProduct_menu_item_contain_img}>
                <Image style={styles.homeProduct_menu_item_img} source={categoryData[i].icon}/>
            </View>
            <View style={styles.homeProduct_menu_item_dish}><Text>{categoryData.name}</Text></View>
        </View>
    )
}

export default HomeProduct = () => {
    return (
        <View style={styles.homeProduct}>
            <View style={styles.homeProduct_menu}>



            { bs }
                



            </View>

            <View style={styles.homeProduct_product}>
                <Image/>
            </View>
        </View>
    )
}