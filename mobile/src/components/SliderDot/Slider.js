import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Dot from './Dot';

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';

const Slider = ({ count, currentIndex, style }) => {



    return (
        <View style={[styles.container, style]}>
            <View style={styles.slider}>
                {[...Array(count)].map((_, index) => (
                    <Dot key={index} active={index === currentIndex} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    slider: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
});

export default Slider;
