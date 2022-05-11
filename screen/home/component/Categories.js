import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from '../styles/styles'
import { categoryData } from '../../../common/Contant'

export default function Categories(props) {
  return (
    <View style={styles.category}>
      <Text style={styles.category__text}>Main</Text>
      <Text style={styles.category__text}>Categories</Text>
      <CategoriesList onSelectedCategory={props.onSelectedCategory} categorySelected={props.categorySelected} />
    </View>
  )
}

export const CategoriesList = (props) => {
    
    renderItem = ({item}) => (
        <TouchableOpacity
            style={[styles.category_list, props.categorySelected == item.id ? styles.category_list__selected : ""]}
            onPress={()=> props.onSelectedCategory(item.id)}
        >
            <View style={styles.category_list__circle}>
                <Image style={styles.category_list__circle__icon} source={item.icon}/>
            </View>

            <Text style={[styles.category_list__text, props.categorySelected == item.id ? styles.category_list__text__selected : ""]}>{item.name}</Text>
        </TouchableOpacity>
    )

    return(
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryData}
            renderItem={renderItem}
        />
    )
}