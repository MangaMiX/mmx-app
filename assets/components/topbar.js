import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TopBar = () => {
    return (
      <View style={styles.topbarview}>
          <Text style={styles.title}>MangaMiX</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    topbarview: {
      backgroundColor: '#000',
      height: 90,
      paddingBottom: 4,
      justifyContent: 'center',
    //   flexDirection: 'row',
    },
    title: {
        color: '#fff',
        paddingLeft: 10,
        fontSize: 30,
        textAlign: 'center'
,    },
  });

export default TopBar;