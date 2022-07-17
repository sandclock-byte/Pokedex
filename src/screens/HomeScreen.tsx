import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export const HomeScreen = () => {
  return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text>HomeScreen</Text>
          <Icon name="md-home" size={100} color="red" />
      </View>
  )
}


const styles = StyleSheet.create({

});