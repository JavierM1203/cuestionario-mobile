import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function Login({navigation}) {
    const [username, setUserName] = useState('');
    const [showError,setShowError] = useState(false);

    const handleLogin = () => {
      if(username == ''){
        setShowError(true);
      }
      else{
        setShowError(false);
        navigation.navigate('Questionaries');
      }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenido a CuestionariosMobile</Text>
        <View style={styles.loginbox}>
          <TextInput style={styles.input} placeholder='Usuario' onChangeText={setUserName}/>
          {showError && (<Text style={styles.errorText}>Ingresa un nombre de usuario</Text>)}
          <TouchableOpacity style={styles.button} onPress={handleLogin}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginbox: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
    width: 250,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red'
  },
});
