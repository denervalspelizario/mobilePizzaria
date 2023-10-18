import React,{ useState } from 'react'
import {  Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';


export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // função de login
  function handlelogin(){

    if(email === '' || password === ''){
      return
    }

    console.log("Email digitado: " + email + " - Senha digitada: " + password)
  }

  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../../public/images/logoPizza.png')}
      />

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder='Digite seu email'
          placeholderTextColor='#FFF'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput 
          style={styles.input}
          placeholder='Sua senha'
          placeholderTextColor='#FFF'
          secureTextEntry={true} // escondendo a senha
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      
        <TouchableOpacity 
          style={styles.button}
          onPress={handlelogin}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D1D2e'
  },
  logo: {
    width: 150,
    height: 150
  },
  inputContainer: {
    width: '95%',
    alignContent: 'center',
    justifyContent: 'center', 
    paddingVertical: 32,
    paddingHorizontal: 14,
    
  },
  input: {
    width: '95%',
    height: 40,
    backgroundColor: '#101026',
    marginBottom:12,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: '#FFF'
  },
  button: {
    width: '95%',
    height: 40,
    backgroundColor: '#3FFFA3',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#101026'
  }

})
