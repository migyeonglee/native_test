import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
function HomeScreen() {
  return (
    <View style={styles.box1}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
const TabComponent = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="navigation" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabComponent;
