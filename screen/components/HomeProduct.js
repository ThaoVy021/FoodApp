import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { styles } from './HomeProductStyle'
import { categoryData, restaurantData } from '../../assets/data/Constant'

const renderCategoies = ({item}) => {
    return (
        <TouchableOpacity style={styles.homeProduct_menu_item}>
            <View style={styles.homeProduct_menu_item_contain_img}>
                <Image style={styles.homeProduct_menu_item_img} source={item.icon}/>
            </View>
            <View style={styles.homeProduct_menu_item_dish}><Text>{item.name}</Text></View>
        </TouchableOpacity>
    )
}

const renderCategoiesInformation = ({item}) => {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <TouchableOpacity>
                <Image style={styles.homeProduct_detail_item_img} source={item.photo}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeProduct = () => {
    return (
        <View style={styles.homeProduct}>
            <View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.homeProduct_categoies}
                    data={categoryData}
                    renderItem={renderCategoies}
                />
            </View>

            <View style={styles.homeProduct_detail}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.homeProduct_detail_item}
                    data={restaurantData}
                    renderItem={renderCategoiesInformation}
                />
            </View>
        </View>
    )
}
