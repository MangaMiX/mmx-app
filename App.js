import * as React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { images } from './constants';

import mockData from './mockData/data';

const ShowScroller = ({ dataset }) => {
  const dataArray = Object.values(mockData[dataset]);

  return (
    <FlatList
      contentContainerStyle={ {paddingHorizontal: Math.ceil(8 / 2)}}
      data={dataArray}
      horizontal
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => {
        let renderItem = <View style={styles['rectangle']} />;

        if (item.image) {
          renderItem = (
            <Image source={images[item.image]} style={styles[`rectangleImage`]} />
          );
        }

        return renderItem;
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

ShowScroller.defaultProps = {
  dataset: 'myList'
};

ShowScroller.propTypes = {
  // optional
  dataset: PropTypes.string
};

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: '#a4a4a4',
    height: 131,
    marginRight: 8,
    width: 91
  },
  rectangleImage: {
    height: 131,
    marginRight: 8,
    resizeMode: 'contain',
    width: 91
  },
});

export default ShowScroller;