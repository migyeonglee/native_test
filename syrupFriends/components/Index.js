import React from 'react';
import {StyleSheet, View} from 'react-native';
import MainComponent from './MainComponent';
// import OrderMainComponent from './OrderMainComponent';
const Index = () => {
  return (
    <>
      <View>
        <MainComponent />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 50,
    marginTop: 100,
    color: 'orange',
  },
});

export default Index;
