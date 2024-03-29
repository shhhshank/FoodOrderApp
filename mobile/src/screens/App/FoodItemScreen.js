import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../../constants/Colors'

const FoodItemScreen = ({ route }) => {
    const { id, image, name, rating, description, deliveryTime, type, price, isFavorite, quantity } = route.params
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

                <View style={[styles.rowBetween, { marginBottom: 18 }]}>
                    <Text style={styles.nameText}>{name}</Text>
                    <View style={styles.quantityControlContainer}>
                        <Ionicons name='remove-outline' color={Colors.LIGHT} size={21} />
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <Ionicons name='add-outline' color={Colors.LIGHT} size={21} />
                    </View>
                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.descTitle}>Description</Text>
                    <Text style={styles.desc}>{description}</Text>
                </View>

                <View style={styles.rowEvenly}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoTitle}>Delivery</Text>
                        <Text style={styles.infoText}>{deliveryTime}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoTitle}>Type</Text>
                        <Text style={styles.infoText}>{type}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoTitle}>Rating</Text>
                        <View style={styles.row}>
                            <Ionicons name='star' color={'#ffbf00'} size={21} />
                            <Text>{rating}</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.rowBetween, styles.addToCartContainer]}>
                    <Text style={styles.priceText}>₹ {price}</Text>
                    <TouchableOpacity activeOpacity={0.8} style={styles.addToCartButton}>
                        <Text>Add to cart</Text>
                    </TouchableOpacity>
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
        borderColor: Colors.GREY
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
        borderColor: Colors.PRIMARY,
        marginBottom: 21
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
    },
    descTitle: {
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 8
    },
    descriptionContainer: {
        flex: 1,
        alignSelf: 'flex-start'
    },
    desc: {
        color: '#8c8c8c',
        fontSize: 17
    },
    rowEvenly: {
        width: "100%",
        justifyContent: "space-evenly",
        flexDirection: "row"
    },
    infoContainer: {
        height: 80,
        width: 100,
        backgroundColor: Colors.GREY,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    infoTitle: {
        fontSize: 17,
        fontWeight: "bold"
    },
    infoText: {
        fontSize: 15,
        fontWeight: '400'
    },
    row: {
        flexDirection: "row",
    },
    addToCartContainer: {
        width: "100%",
        height: 60,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 999,
        paddingHorizontal: 15,
        marginVertical: 15
    },
    addToCartButton: {
        backgroundColor: "white",
        height: 40,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999
    },
    priceText: {
        color: Colors.LIGHT,
        fontSize: 21
    }
})