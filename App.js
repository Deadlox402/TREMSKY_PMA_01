import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
     <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput  style= {styles.Input} placeholder='Zadaj úlohu ...'/>
      <Button title = "ADD"/>

      </View>

      <View style={styles.taskContainer}>
        <Text>UDALOSTI :::::</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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