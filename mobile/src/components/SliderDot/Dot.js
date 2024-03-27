import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';
import Colors from '../../constants/Colors';

const Dot = ({ active }) => {
    const activeSize = 20
    const size = 10
    const width = useSharedValue(size);


    React.useEffect(() => {
        width.value = withSpring(active ? activeSize : size);
    }, [active]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: width.value,
            height: size,
            borderRadius: active ? activeSize / 2 : size / 2,
            backgroundColor: active ? Colors.PRIMARY : '#C1C1C1',
            marginHorizontal: 5,
        };
    });

    return <Animated.View style={[styles.dot, animatedStyle]} />;
};

const styles = StyleSheet.create({
    dot: {

    },
});

export default Dot;
