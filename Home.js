import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Calculator({navigation}) {
  const [result, setResult] = useState(0);
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [history, setHistory] = useState([]);

  const initialFocus = useRef(null);

  const calculate = operator => {
      const[number1, number2] =[Number(firstNum), Number(secondNum)];
      let result;
      switch (operator) {
          case '+':
              result = number1 + number2;
              break;
        case '-':
            result = number1 - number2;
            break;
      }
      setResult(result);
      setHistory([...history, { key: String(history.length), text: `${number1} ${operator} ${number2} = ${result}` }]);
      setFirstNum('');
      setSecondNum('');
      initialFocus.current.focus();
  }

  return (
  
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput ref={initialFocus} keyboardType='numeric' style={{width:200, borderColor: 'black', borderWidth: 1, padding: 5, margin: 5}} onChangeText={val => setFirstNum(val)} value={firstNum} />
      <TextInput keyboardType='numeric' style={{width:200, borderColor: 'black', borderWidth: 1, padding: 5,margin: 5}} onChangeText={val => setSecondNum(val)} value={secondNum} />
      
    <View style={{
      flexDirection: 'row',
      width: '50%',
      justifyContent: 'space-between'
    }}><View style={{width:'20%'}}>
      <Button onPress={() => calculate('+')} title="+"></Button>
      </View>
      <View style={{width:'20%'}}>
      <Button  onPress={() => calculate('-')} title="-"></Button>
      </View>
      <Button title="History" onPress={() => navigation.navigate('History', { history })}></Button>
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