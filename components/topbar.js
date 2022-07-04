import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';

const TopBar = () => {
    return (
      <View>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={""}
          lightTheme={true}
          containerStyle={styles.topbarview}
        />
      </View>
    );
  }

  const searchFilterFunction = (text) => {
    alert(text)
  };

  const styles = StyleSheet.create({
    topbarview: {
      backgroundColor: '#212121',
      borderTopWidth: 0,
      borderBottomWidth: 0,
    },
    title: {
        color: '#fff',
        paddingLeft: 10,
        fontSize: 30,
        textAlign: 'center'
,    },
  });

export default TopBar;