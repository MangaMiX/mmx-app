import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
import { images } from '../constants';
import mockData from '../mockData/data';

const Category = ({ dataset, genre }) => {
  const dataArray = Object.values(mockData[dataset]);

  return (
    <View style={{paddingBottom: 15}}>
      <Text style={styles.genre}>{genre}</Text>
      <FlatList
        contentContainerStyle={ {paddingHorizontal: 10}}
        data={dataArray}
        horizontal
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => {
          let renderItem = <View style={styles.rectangle} />;

          if (item.image) {
            renderItem = (
              <Image source={images[item.image]} style={styles.rectangleImage} />
            );
          }

          return renderItem;
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

Category.defaultProps = {
  dataset: 'myList',
  genre: 'Category'
};

Category.propTypes = {
  // optional
  dataset: PropTypes.string,
  genre: PropTypes.string
};

const styles = StyleSheet.create({
  genre: {
    paddingHorizontal: 10,
    color: '#fff',
    paddingBottom: 4,
    fontSize: 16,
  },
  rectangle: {
    backgroundColor: '#a4a4a4',
    height: 131,
    marginRight: 8,
    width: 91
  },
  rectangleImage: {
    height: 131,
    marginRight: 8,
    borderRadius: 5,
    width: 91
  },
});

export default Category;