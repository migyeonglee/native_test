import React, {Component} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import TabComponent from './TabComponent';

class MainComponent extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.addBox} />
        <View style={styles.box2}>
          <View style={styles.pointBox} />
          <View style={styles.levelBox} />
        </View>
        <View style={styles.simpleBox} />
        <View style={styles.cgBox} />
        <Text>왜 안됌</Text>
        <TabComponent />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addBox: {
    height: 50,
    backgroundColor: 'red',
  },
  box2: {
    height: 120,
    display: 'flex',
    flexDirection: 'row',
  },
  pointBox: {
    width: '50%',
    backgroundColor: 'orange',
  },
  levelBox: {
    width: '50%',
    backgroundColor: 'yellow',
  },
  simpleBox: {
    height: 40,
    backgroundColor: 'green',
  },
  cgBox: {
    height: 400,
    backgroundColor: 'skyblue',
  },
  menuBox: {
    bottom: 0,
    height: 56,
    backgroundColor: '#8977AD',
  },
});

export default MainComponent;
