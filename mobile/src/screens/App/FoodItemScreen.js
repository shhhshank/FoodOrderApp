import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../../constants/Colors'

const FoodItemScreen = ({ route }) => {
    const { id, image, name, rating, description, deliveryTime, price, isFavorite, quantity } = route.params
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.iconButtonContainer}>
                    <Ionicons name='arrow-back-outline' size={27} color={Colors.DARK} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButtonContainer}>
                    <Ionicons name='heart-outline' size={27} color={Colors.DARK} />
                </TouchableOpacity>
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                </View>

                <View style={styles.rowBetween}>
                    <Text style={styles.nameText}>{name}</Text>
                    <View style={styles.quantityControlContainer}>
                        <Ionicons name='remove-outline' color={Colors.LIGHT} size={21} />
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <Ionicons name='add-outline' color={Colors.LIGHT} size={21} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FoodItemScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 11,
        flexDirection: 'row'
    },
    iconButtonContainer: {
        borderWidth: 0.7,
        borderRadius: 999,
        padding: 5,
        borderColor: '#acacac'
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 11,
        alignItems: "center"
    },
    image: {
        height: 240,
        width: 240,
        borderRadius: 999
    },
    imageContainer: {
        borderWidth: 3,
        borderRadius: 999,
        padding: 10,
        borderColor: Colors.PRIMARY
    },
    rowBetween: {
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: "center",
        width: "100%"
    },
    quantityControlContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: 80,
        backgroundColor: Colors.PRIMARY,
        height: 40,
        borderRadius: 999
    },
    quantityText: {
        color: Colors.LIGHT,
        fontSize: 19,
        fontWeight: '600'
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 21
    }
})