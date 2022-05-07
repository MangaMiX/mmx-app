import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, ScrollView } from 'react-native';
import TopBar from './assets/components/topbar';

import Category from './components/category';

const ShowScroller = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <TopBar></TopBar>
      <ScrollView>
        <Category genre='Drame'></Category>
        <Category genre='Aventure'></Category>
        <Category genre='Action'></Category>
        <Category genre='Comédie'></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121'
  },
});

export default ShowScroller;