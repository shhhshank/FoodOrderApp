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

const foods = [
    {
        id: "1",
        image: require("../../../assets/foods/pizza/classic-cheese.jpg"),
        name: "Classic Cheese",
        rating: "4.5",
        description: "Simple and all time favorite classic cheese pizza, made with high quality cheese and tossed at fire owen",
        deliveryTime: "30 min",
        price: "299",
        isFavorite: false,
        quantity: 0
    },
    {
        id: "2",
        image: require("../../../assets/foods/pizza/classic-cheese.jpg"),
        name: "Classic Cheese",
        rating: "4.5",
        description: "Simple and all time favorite classic cheese pizza, made with high quality cheese and tossed at fire owen",
        deliveryTime: "30 min",
        price: "299",
        isFavorite: false,
        quantity: 0
    },
    {
        id: "3",
        image: require("../../../assets/foods/pizza/classic-cheese.jpg"),
        name: "Classic Cheese",
        rating: "4.5",
        description: "Simple and all time favorite classic cheese pizza, made with high quality cheese and tossed at fire owen",
        deliveryTime: "30 min",
        price: "299",
        isFavorite: false,
        quantity: 0
    }
]

const HomeScreen = ({ navigation }) => {

    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0)

    const FoodItem = ({ id, image, name, rating, description, deliveryTime, price, isFavorite, quantity }) => {
        const onFoodPressed = () => {
            navigation.navigate('food', { id, image, name, rating, description, deliveryTime, price, isFavorite, quantity })
        }
        return (
            <TouchableOpacity onPress={onFoodPressed} activeOpacity={0.8} style={styles.foodItemContainer}>
                <View style={styles.foodItemInfoContainer}>
                    <Image source={image} style={styles.foodItemImage} resizeMode='cover' />
                    <View style={[styles.rowBetween, { marginBottom: 4 }]}>
                        <Text style={styles.foodItemName}>{name}</Text>
                        <Ionicons name='add-circle' color={Colors.PRIMARY} size={21} />
                    </View>
                    <View style={styles.rowBetween}>
                        <Text style={styles.foodItemPrice}>₹ {price}</Text>
                        <View style={styles.rowBetween}>
                            <Ionicons name='star' color={'#ffbf00'} size={21} />
                            <Text style={styles.foodItemRating}>{rating}</Text>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
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

            <BannerSlider images={images} />

            <View style={styles.rowContainer}>
                <View style={styles.rowTitleContainer}>
                    <Text style={styles.titleText}>Categories</Text>
                </View>

                <FlatList showsHorizontalScrollIndicator={false} ItemSeparatorComponent={() => (<View style={{ width: 10 }} />)} horizontal data={categories} renderItem={({ item, index }) => (
                    <ChipItem key={index.toString()} {...item} index={index} />
                )} />
            </View>

            <View style={styles.rowContainer}>
                <View style={styles.rowTitleContainer}>
                    <Text style={styles.titleText}>Top Picks</Text>
                </View>

                <FlatList showsHorizontalScrollIndicator={false} ItemSeparatorComponent={() => (<View style={{ width: 10 }} />)} horizontal data={foods} renderItem={({ item, index }) => (
                    <FoodItem key={index.toString()} {...item} index={index} />
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
    },
    foodItemContainer: {
        width: 190,
        aspectRatio: 1,
        backgroundColor: '#dcdcdc',
        borderRadius: 10,

    },
    foodItemInfoContainer: {
        flex: 1,
        padding: 10
    },
    foodItemImage: {
        height: "60%",
        width: "100%",
        borderRadius: 5,
        marginBottom: 8
    },
    foodItemName: {
        fontWeight: "bold",
        fontSize: 16
    },
    foodItemPrice: {
        fontWeight: 'bold',
        fontSize: 21,
        color: Colors.PRIMARY
    },
    foodItemRating: {
        fontWeight: '700',
        color: Colors.DARK
    },
    rowBetween: {
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: "center"
    }
})