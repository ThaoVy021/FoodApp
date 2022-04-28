import { StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { colors, icons } from '../../assets/data/Constant'

export const styles = StyleSheet.create({
    homeProduct: {
        paddingLeft: 20,
        paddingRight: 20,
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
        width:40, 
        height: 40,
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
        marginTop: 20
    },
    homeProduct_detail_item_contain_img: {
        borderWidth: 1, 
        borderRadius: 30, 
        height: 150,
        borderColor: 'transparent',
        flex: 1,
        overflow: "hidden",
        position: 'relative'
    },
    homeProduct_detail_item_img: {
        height: 150,
        resizeMode: 'contain',
    },
    homeProduct_detail_item_img_duration: {
        position: 'absolute',
        backgroundColor: colors.white,
        bottom: 0,
        padding: 10,
        borderWidth: 1,
        borderTopRightRadius: 20,
        borderColor: 'transparent',
        overflow: 'hidden',
        fontWeight: 'bold',
    },
    homeProduct_detail_item_name: {
        fontWeight: '500',
        fontSize: 22,
        paddingTop: 10,
        paddingBottom: 10
    }
})