import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleAuth = async () => {
    const url = isLogin 
      ? 'https://reqres.in/api/login'     // Mock Login API
      : 'https://reqres.in/api/register'; // Mock Signup API

    // email eve.holt@reqres.in 
    //password cityslicka 

    if (!email || !password) { 
      Alert.alert('Error', 'Please fill in all fields');
      return;
    } 

    try {
      const response = await axios.post(url, { email, password });
      Alert.alert('Success', isLogin ? 'Login successful' : 'Signup successful', [
        { text: 'OK', onPress: () => console.log(response.data) }
      ]);
    } catch (error) {
      console.log(error.response.data);
      Alert.alert('Error', error.response.data.error || 'Something went wrong');
    } 
  }; 
 
  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address"
      /> 
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
      /> 
      
      <TouchableOpacity style={styles.button} onPress={handleAuth}>
        <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text style={styles.toggleText}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </Text> 
      </TouchableOpacity>
    </View>
  ); 
}; 

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#333' },
  input: { height: 50, borderColor: '#ddd', borderWidth: 1, borderRadius: 8, marginBottom: 15, paddingHorizontal: 10 },
  button: { backgroundColor: '#273778', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  toggleText: { textAlign: 'center', color: '#FF006E', marginTop: 15, fontSize: 14 },
});

export default AuthScreen;
