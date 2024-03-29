import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../../constants/Colors'
import foods from '../../constants/Food'
import Button from '../../components/Button/Button'
const CartScreen = ({ route }) => {

    const CartItem = ({ id, image, name, rating, description, deliveryTime, type, price, isFavorite, quantity }) => {
        return (
            <View style={styles.cartItemContainer}>
                <Image source={image} style={styles.cartItemImage} />
                <View style={styles.cartItemInfoContainer}>
                    <View style={styles.rowBetween}>
                        <Text style={styles.cartItemName}>{name}</Text>
                        <Ionicons name='add-circle' color={Colors.PRIMARY} size={24} />
                    </View>
                    <View style={styles.rowBetween}>
                        <Text style={styles.cartItemType}>{type}</Text>
                        <Text style={styles.cartItemQuanity}>{quantity}</Text>
                    </View>

                    <Text style={styles.cartItemPrice}>₹ {quantity * price}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>Cart</Text>
            </View>
            <View style={styles.contentContainer}>
                <FlatList data={foods} renderItem={({ item, index }) => (
                    <CartItem {...item} />
                )}
                    ItemSeparatorComponent={() => (<View style={{ height: 10 }} />)}
                    style={styles.cartList} />

                <View style={{ marginVertical: 11 }}>
                    <View style={[styles.rowBetween, { marginBottom: 6 }]}>
                        <Text style={styles.cartBillTitle}>Subtotal</Text>
                        <Text>₹999</Text>
                    </View>
                    <View style={[styles.rowBetween, { marginBottom: 6 }]}>
                        <Text style={styles.cartBillTitle}>Discount</Text>
                        <Text>30%</Text>
                    </View>
                    <View style={[styles.rowBetween, { marginBottom: 6 }]}>
                        <Text style={styles.cartBillTitle}>Shipping</Text>
                        <Text>₹90</Text>
                    </View>

                    <View style={{ marginBottom: 8, height: 1, width: '100%', borderRadius: 1, borderWidth: 1, borderColor: Colors.PRIMARY, borderStyle: 'dotted' }} />

                    <View style={[styles.rowBetween, { marginBottom: 6 }]}>
                        <Text style={{ ...styles.cartBillTitle, fontWeight: "bold" }}>Total</Text>
                        <Text style={{ fontWeight: "bold" }}>₹1010</Text>
                    </View>
                </View>

                <Button title={"Buy"} />

            </View>

        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    headerContainer: {
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 11,
        flexDirection: 'row',
        borderBottomColor: Colors.GREY,
        borderBottomWidth: 1
    },
    titleText: {
        fontSize: 21,
        fontWeight: 'bold'
    },
    cartItemContainer: {
        width: "100%",
        height: 120,
        backgroundColor: Colors.GREY,
        borderRadius: 15,
        padding: 10,
        flexDirection: "row"
    },
    contentContainer: {
        padding: 10
    },
    cartItemImage: {
        height: "100%",
        width: 110,
        borderRadius: 5
    },
    cartList: {
        height: "65%"
    },
    cartItemInfoContainer: {
        flex: 1,
        padding: 11,
        justifyContent: "space-evenly"
    },
    rowBetween: {
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: "center"
    },
    cartItemName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    cartItemType: {
        fontSize: 15,
        color: Colors.SECONDARY_TEXT
    },
    cartItemQuanity: {
        fontSize: 15,
        width: 15
    },
    cartItemPrice: {
        fontSize: 19,
        fontWeight: 'bold',
        color: Colors.PRIMARY
    },
    cartBillTitle: {
        fontSize: 16
    }
})