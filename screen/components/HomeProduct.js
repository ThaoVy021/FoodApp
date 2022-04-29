import { Text, View, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import { styles } from './HomeProductStyle'
import { icons, categoryData, restaurantData } from '../../assets/data/Constant'

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
        <View>
            <View style={styles.homeProduct_detail_item_contain_img}>
                <TouchableOpacity>
                    <ImageBackground style={styles.homeProduct_detail_item_img} source={item.photo}/>
                    <Text style={styles.homeProduct_detail_item_img_duration}>{item.duration}</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity>
                <Text style={styles.homeProduct_detail_item_name}>{item.name}</Text>
            </TouchableOpacity>

            <View style={styles.homeProduct_detail_item_infor}>
                <Image style={styles.homeProduct_detail_item_infor_imgStar} source={icons.star}/>
                <Text style={{marginRight: 20}}>{item.rating}</Text>
                <Text style={{fontWeight: '500'}}>{item.includeDish}</Text>
                <Text style={{fontWeight: 'bold'}}>$</Text><Text>$$</Text>
            </View>
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
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.homeProduct_detail_item}
                    data={restaurantData}
                    renderItem={renderCategoiesInformation}
                />
            </View>
        </View>
    )
}
