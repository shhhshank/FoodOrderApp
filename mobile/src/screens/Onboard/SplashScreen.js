import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    runOnJS
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constants/Colors';

const SplashScreen = (props) => {
    const opacity = useSharedValue(0);
    const scale = useSharedValue(0.9);
    const navigation = useNavigation()

    const onAnimationFinished = () => {
        navigation.replace('slider')
    }

    useEffect(() => {
        opacity.value = withTiming(1, { duration: 1500 });
        scale.value = withTiming(1, { duration: 1500 }, () => {
            runOnJS(onAnimationFinished)()
        });

    }, []);


    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [{ scale: scale.value }],
        };
    });

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../../../assets/pizza-logo.png')}
                style={[styles.logo, animatedStyle]}
                resizeMode='contain'
            />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.PRIMARY
    },
    logo: {
        height: '50%',
        width: '50%'
    }
})