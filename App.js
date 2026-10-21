import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import { useState } from 'react';
import Item from './src/components/Items';

export default function App() {
  const [text, setText] = useState("");
  const [taskList, setTaskList] = useState([]);
  function handleinputtext(text){
    setText(text);
  }
  function handleItems(){
    setTaskList([...taskList, text]);
  }

  return (
     <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput onChangeText={handleinputtext} style= {styles.input} placeholder='Zadaj úlohu ...'/>
      <Button onPress={handleItems} title = "ADD"/>

      </View>

   <FlatList
          data={taskList}
          renderItem={({item}) => <Item title={item} />}
          keyExtractor={item => item.id}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2372b7',
  },
input: { 
    borderWidth: 3, 
    borderColor: "#d30303", 
    borderRadius: 8,
    width: "80%", 
  },
  
  inputContainer:{
    paddingHorizontal: 10,
    flex:1 ,
    alignItems:"center", 
    justifyContent:"space-between", 
    backgroundColor:"#ffffff",
    flexDirection:"row",
  },

  taskContainer:{
    margin:4, 
    flex:3 ,
    backgroundColor:"#ffffff",
    borderTopWidth:3, 
    padding:24},
});