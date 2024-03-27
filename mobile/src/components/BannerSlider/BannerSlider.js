import React from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet } from 'react-native';
import Slider from '../SliderDot/Slider';

const BannerSlider = ({ images }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Image source={item} style={styles.image} resizeMode='cover' />
                )}

            />
            <Slider count={images.length} currentIndex={0} />
        </View>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    image: {
        width: width - 40,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        overflow: 'hidden'
    },
});

export default BannerSlider;
