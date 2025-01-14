import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ toggleScreen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      return;
    }
  
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }
  
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      Alert.alert("Invalid Password", "Password should have at least one uppercase letter, one special character, and one digit.");
      return;
    }
  
    console.log('Logging in with:', email, password);
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeBackText}>Welcome Back</Text>
        <Text style={styles.signInText}>Sign in to your account</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Icon name={showPassword ? "eye-slash" : "eye"} size={20} color="#333" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => toggleScreen('signup')}>
            <Text style={styles.signupTextOrange}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalLine}>
          <View style={styles.line}></View> 
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line}></View>
        </View>

        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require('../../assets/images/google.jpg')}
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.appleButton}>
          <Icon name="apple" size={20} color="black" />
          <Text style={styles.appleButtonText}>Sign in with Apple</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.backButton}
          onPress={toggleScreen}
        >
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: 20,
  },
  welcomeBackText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  signInText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: 'rgba(245,245,245,1)',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    paddingBottom: 20,
    padding: 5,
  },
  forgotPassword: {
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#F7600F',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#F7600F',
    borderRadius: 8,
    paddingVertical: 7,
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signupText: {
    color: '#666',
  },
  signupTouchable: {
    marginLeft: 5,
  },
  signupTextOrange: {
    color: '#F7600F', 
    fontWeight: 'bold',
  },
  horizontalLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  googleButton: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 7,
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  googleButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginLeft: 10,
  },
  googleIcon: {
    width: 25,
    height: 22,
  },
  appleButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 7,
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  appleButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginLeft: 10,
  },
  backButton: {
    marginTop: 50,
    right: 10,
    marginHorizontal: 14
  },
  backButtonText: {
    color: '#F7600F',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
