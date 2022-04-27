import { StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../assets/data/Constant'

export const styles = StyleSheet.create({
    homeProduct: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: colors.secondary,  
    },
    homeProduct_menu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    homeProduct_menu_item: {
        flexDirection: 'column',
        height: 140,
        backgroundColor: colors.white,  
        padding: 10,
        borderRadius: 50
    },
    homeProduct_menu_item_contain_img: {
        width:60, 
        height: 60,
        backgroundColor: colors.secondary, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    homeProduct_menu_item_img: {
        width: 10,
        height: 10,
        backgroundColor: colors.secondary,
        padding: 15,
    },
    homeProduct_menu_item_dish: {
        marginTop: 15,
        alignItems: 'center'
    },


    // homeProduct_product: {
    //     flex: 1,
    //     backgroundColor: 'yellow'
    // }
})