import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [result, setResult] = useState('');
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const increment = () => {
    setResult(parseInt(firstNum) + parseInt(secondNum));
  }
  const decrement = () => {
    setResult(parseInt(firstNum) - parseInt(secondNum));
  }
  
  return (
  
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput keyboardType='numeric' style={{width:200, borderColor: 'black', borderWidth: 1}} onChangeText={firstNum => setFirstNum(firstNum)} value={firstNum} />
      <TextInput keyboardType='numeric' style={{width:200, borderColor: 'black', borderWidth: 1}} onChangeText={secondNum => setSecondNum(secondNum)} value={secondNum} />
    <View style={{
      flexDirection: 'row'
    }}>
      <Button onPress={increment} title="+"></Button>
      <Button onPress={decrement} title="-"></Button>
      </View>
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
