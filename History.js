import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function History({ route, navigation }) {
    
   const {data} = route.params;
    const {text} = route.params;
    console.log(data);
  return (
  
    <View style={styles.container}>
      <FlatList data={data} renderItem={({ item }) => (
        <Text>{item.key}</Text>
      )} />  
      <Button title="Calculator" onPress={() => navigation.navigate('Home')}></Button>
      </View>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:200,
    justifyContent: 'center'
  }
});