import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../../constants/Colors'
import BannerSlider from '../../components/BannerSlider/BannerSlider'
import Slider from '../../components/SliderDot/Slider'

const images = [
    require('../../../assets/banner1.jpg'),
    require('../../../assets/banner1.jpg'),
    require('../../../assets/banner1.jpg')
]

const categories = [
    {
        id: "1",
        name: "Pizza",
        icon: require('../../../assets/categories/pizza.png')
    },
    {
        id: "2",
        name: "Cake",
        icon: require('../../../assets/categories/cake.png')
    },
    {
        id: "3",
        name: "Ice Cream",
        icon: require('../../../assets/categories/icecream.png')
    },
    {
        id: "4",
        name: "Waffles",
        icon: require('../../../assets/categories/waffles.png')
    },
    {
        id: "5",
        name: "Coffee",
        icon: require('../../../assets/categories/coffee.png')
    },
    {
        id: "6",
        name: "Kebab",
        icon: require('../../../assets/categories/kebab.png')
    },
    {
        id: "7",
        name: "Meat",
        icon: require('../../../assets/categories/meat.png')
    }
]

const HomeScreen = () => {

    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0)

    const FoodItem = ({ }) => {
        return (
            <View>

            </View>
        )
    }

    const ChipItem = ({ id, name, icon, index }) => {
        const selected = index == selectedCategoryIndex;

        return (
            <TouchableOpacity onPress={() => { setSelectedCategoryIndex(index) }} activeOpacity={0.7} key={id} style={[styles.chipContainer, { backgroundColor: selected ? Colors.PRIMARY : 'transparent' }]}>
                <Image source={icon} style={styles.categoryIcon} resizeMode='contain' />
                <Text style={[styles.categoryText, { color: selected ? Colors.LIGHT : Colors.PRIMARY }]}>{name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchInputContainer}>
                    <TextInput cursorColor={Colors.PRIMARY} selectionColor={Colors.PRIMARY} placeholder='Search your food' style={styles.input} />
                </View>
                <TouchableOpacity style={styles.searchIconContainer}>
                    <Ionicons name='search-outline' size={25} style={styles.searchIcon} color={Colors.LIGHT} />
                </TouchableOpacity>
            </View>

            {/* <BannerSlider images={images} /> */}

            <View style={styles.rowContainer}>
                <View style={styles.rowTitleContainer}>
                    <Text style={styles.titleText}>Categories</Text>
                </View>

                <FlatList showsHorizontalScrollIndicator={false} ItemSeparatorComponent={() => (<View style={{ width: 10 }} />)} horizontal data={categories} renderItem={({ item, index }) => (
                    <ChipItem key={index.toString()} {...item} index={index} />
                )} />
            </View>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    searchInputContainer: {
        width: '85%',
        backgroundColor: "#dfdfdf",
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 11,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center'
    },
    searchContainer: {
        flexDirection: 'row'
    },
    searchIconContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginStart: 4
    },
    searchIcon: {
        backgroundColor: Colors.PRIMARY,
        padding: 11,
        borderRadius: 8
    },
    input: {
        flex: 1,
        fontSize: 19,
    },
    rowContainer: {
        width: "100%",
        marginVertical: 5
    },
    rowTitleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8
    },
    titleText: {
        fontSize: 19,
        fontWeight: "bold",
    },
    chipContainer: {
        height: 40,
        borderRadius: 999,
        justifyContent: 'space-evenly',
        alignItems: "center",
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        paddingHorizontal: 8

    },
    categoryIcon: {
        width: 30,
        height: 30
    },
    categoryText: {
        fontSize: 16
    }
})