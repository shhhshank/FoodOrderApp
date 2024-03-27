import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Colors'
import Slider from '../../components/SliderDot/Slider'
import Button from '../../components/Button/Button'


const sliderData = [
    {
        image: require('../../../assets/safed-sauce-pasta.webp'),
        title: 'Fresh Food Order',
        description: "Taste the essence of freshness with our meticulously crafted dishes, featuring locally sourced ingredients."
    },
    {
        image: require('../../../assets/delivery-man.webp'),
        title: 'Quick Delivery',
        description: "Delight in speedy delivery, ensuring your meal arrives swiftly to satisfy your cravings for delicious, wholesome fare."
    },
    {
        image: require('../../../assets/map-route.jpg'),
        title: 'On Time Delivery',
        description: "Elevate your dining experience with our seamless in-house delivery system, ensuring your meal is swiftly brought to your table."
    }
]

const SliderScreen = ({ navigation }) => {
    const [currSlide, setCurrSlide] = useState(0);

    const onNextPressed = () => {
        if (currSlide < sliderData.length - 1) {
            setCurrSlide(currSlide => currSlide + 1)
        } else {
            navigation.replace('AuthStack')
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={sliderData[currSlide].image} resizeMode='cover' />
            </View>
            <Slider style={styles.slider} count={sliderData.length} currentIndex={currSlide} />
            <Text style={styles.textTitle}>{sliderData[currSlide].title}</Text>
            <Text style={styles.description}>{sliderData[currSlide].description}</Text>
            <Button title={currSlide == sliderData.length - 1 ? 'Finish' : 'Next'} onPress={onNextPressed} />
        </View>
    )
}

export default SliderScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center",
        flex: 1,
        padding: 15
    },
    imageContainer: {
        width: '70%',
        aspectRatio: 1,
        borderWidth: 2,
        borderColor: Colors.PRIMARY,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    image: {
        height: "90%",
        width: "90%",
        borderRadius: 999
    },
    slider: {
        marginBottom: 40
    },
    textTitle: {
        fontSize: 27,
        fontWeight: 'bold',
        color: Colors.DARK,
        marginBottom: 15
    },
    description: {
        fontSize: 14,
        textAlign: "center",
        letterSpacing: 1.2,
        lineHeight: 23,
        color: "#7c7c7c",
        marginBottom: 40
    }
})