import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { Link } from 'expo-router';
import React, { useState } from 'react';

import PracticeTextInput from '../components/PracticeTextInput';
import Button from '../components/Button';

const header = ['Missing Bus', 'Substitution'];
const data = [];

function createRow(userInput){
  data.push([userInput,userInput]);
}

export default function substitutionBus(navigation){
  const [text, setText] = useState('');

  const handleInputChange = (input) => {
    setText(input);
  };

  return(
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 4, borderColor: '#F8F8F8' }}>
        <Row data={header} style={styles.head} textStyle={styles.text} />
        <Rows data={data} textStyle={styles.text} editable={true}/>
      </Table>
      <TextInput
        style={styles.textInput}
        onChangeText={handleInputChange}
        value={text}
      />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => createRow(text)}>
            <Text style={styles.buttonLabel}>Input the bus being replaced's number, and then the substitution bus number after a space. Click this button to input that data.</Text>
        </Pressable>
      </View>
      <View style={styles.footerContainer}>
        <Link href="/" asChild>
          <Pressable style={styles.link}>
            <Text style={styles.linkLabel}>Bus Loop Screen</Text>
          </Pressable>
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    height: 78,
    marginHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 20,
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
      paddingRight: 8,
  },
  buttonLabel: {
      color: '#E3B04B',
      fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#2B2B28',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 58,
    fontSize: 40,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
  head: {
    width: 400,
    padding: 3,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  linkContainer: {
    width: 200,
    height: 78,
    marginHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  link: {
    borderRadius: 20,
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  linkIcon: {
    paddingRight: 8,
  },
  linkLabel: {
    color: '#E3B04B',
    fontSize: 16,
  },
  text: {
    color: "#E3B04B",
    fontSize: 20,
  },
  textInput: {
    height: 40, 
    width: 200,
    borderColor: '#F1D6AB', 
    borderWidth: 3, 
    color: "#F1D6AB" 
  }
});