import { StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../assets/data/Constant'

export const styles = StyleSheet.create({
    homeProduct: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: colors.secondary,  
    },
    homeProduct_categoies: {
        flexDirection: 'row', 
        flexWrap: 'nowrap',
    },
    homeProduct_menu_item: {
        flexDirection: 'column',
        height: 120,
        backgroundColor: colors.white,  
        padding: 10,
        borderRadius: 50, 
        marginRight: 15,
        alignItems: 'center'
    },
    homeProduct_menu_item_contain_img: {
        width:50, 
        height: 50,
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


    homeProduct_detail: {
        
    },
    homeProduct_detail_item: {
        flexDirection: 'column', 
        flexWrap: 'nowrap',
    },
    homeProduct_detail_item_img: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        aspectRatio: 1
    },
})