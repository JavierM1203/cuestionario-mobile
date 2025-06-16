import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
    return (
      <View>
        <Text>Login</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    marginTop: 10,
    textAlign: 'left',
    fontSize: 40
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 20,

  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  }
});
