import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import React from 'react';
import Carousel from 'pinar';
import Constants from 'expo-constants';

const images = [
  {
    name: 'exterior',
    img: require('../assets/images/local-market/aeon-mall-01.jpg'),
  },
  {
    name: 'kitchen',
    img: require('../assets/images/local-market/boeng-keng-kang-market-02.jpg'),
  },
  {
    name: 'living area',
    img: require('../assets/images/local-market/central-market-01.jpg'),
  },
  {
    name: 'bathroom',
    img: require('../assets/images/local-market/eden-garden-mall-01.jpg'),
  },
  {
    name: 'bedroom',
    img: require('../assets/images/local-market/eden-garden-mall-02.jpg'),
  },
  {
    name: 'dining room',
    img: require('../assets/images/local-market/old-market-01.jpg'),
  },
];

const height = Dimensions.get('window').height;
const marginTop = Constants.statusBarHeight;
export default function CarouselView() {
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        style={styles.carousel}
        showsControls={false}
        dotStyle={styles.dotStyle}
        activeDotStyle={[styles.dotStyle, { backgroundColor: 'white' }]}
      >
        {images.map((img) => (
          <Image style={styles.image} source={img.img} key={img.name} />
        ))}
      </Carousel>
    </View>
  );
}

const styles = StyleSheet.create({
  dotStyle: {
    width: 30,
    height: 3,
    backgroundColor: 'silver',
    marginHorizontal: 3,
    borderRadius: 3,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  carousel: {
    height: '100%',
    width: '100%',
  },
  carouselContainer: {
    height: (height - marginTop) / 1.9,
    marginHorizontal: 10,
    marginTop,
  },
});