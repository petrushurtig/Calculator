import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [result, setResult] = useState(0);
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [text, setText] = useState(firstNum + secondNum + result);
  const [data, setData] = useState([])
  const increment = () => {
    setResult(parseInt(firstNum) + parseInt(secondNum));
    history()
  }
  const decrement = () => {
    setResult(parseInt(firstNum) - parseInt(secondNum));
  }
  const history = () => {
    setData([...data, {key: text}]);
  setText(firstNum + ' + ' + secondNum + ' = ' +result)
  }
  return (
  
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput keyboardType='numeric' style={{width:200, borderColor: 'black', borderWidth: 1}} onChangeText={firstNum => setFirstNum(firstNum)} value={firstNum} />
      <TextInput keyboardType='numeric' style={{width:200, borderColor: 'black', borderWidth: 1}} onChangeText={secondNum => setSecondNum(secondNum)} value={secondNum} />
    <View style={{
      flexDirection: 'row',
      margin:40
    }}>
      <Button onPress={increment} title="+"></Button>
      <Button  onPress={decrement} title="-"></Button>
      </View>
      <Text style={{margin:40}}>History</Text>
      <FlatList data={data} renderItem={({ item }) => (
        <Text>{item.key}</Text>
      )} />  
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
