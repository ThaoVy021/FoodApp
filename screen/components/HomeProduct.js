import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { styles } from './HomeProductStyle'
import { icons, categoryData, restaurantData } from '../../assets/data/Constant'

// const category = []
// const restaurant = []

// for (let i = 0; i < categoryData.length; i++) {
//     category.push(
//         <View style={styles.homeProduct_menu_item}>
//             <View style={styles.homeProduct_menu_item_contain_img}>
//                 <Image style={styles.homeProduct_menu_item_img} source={categoryData[i].icon}/>
//             </View>
//             <View style={styles.homeProduct_menu_item_dish}><Text>{categoryData[i].name}</Text></View>
//         </View>
//     )
// }
// for (let i = 0; i < restaurantData.length; i++) {
//     restaurant.push(
//         <View style={styles.homeProduct_restaurant_item}>
            
//         </View>
//     )
// }

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.homeProduct_menu_item}>
            <View style={styles.homeProduct_menu_item_contain_img}>
                <Image style={styles.homeProduct_menu_item_img} source={item.icon}/>
            </View>
            <View style={styles.homeProduct_menu_item_dish}><Text>{item.name}</Text></View>
        </TouchableOpacity>
    )
}

export default HomeProduct = () => {
    return (
        <View style={styles.homeProduct}>
            <View style={styles.homeProduct_menu}>
                <FlatList
                    style={{flexDirection: 'row'}}
                    data={categoryData}
                    renderItem={renderItem}
                />
            </View>
            <View style={styles.homeProduct_menu}>
            </View>
        </View>
    )
}
