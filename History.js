import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function History({ route, navigation }) {
    
   const {history} = route.params;
  
  return (
  
    <View style={styles.container}>
        <View style={{height: '50%'}}>
      <FlatList data={history} renderItem={({ item }) => (
        <Text>{item.text}</Text>
      )} />  
      </View>
      <Button title="Calculator" onPress={() => navigation.navigate('Home')}></Button>
      </View>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#ffff",
    alignItems: 'center',
    justifyContent: 'center'
  }
});