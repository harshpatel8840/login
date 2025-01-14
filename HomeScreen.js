import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = ({ toggleScreen }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/images/taxpartnerlogo.jpg')} style={styles.logo} />
      <Image source={require('../../assets/images/Group.png')} style={styles.groupImage} />
      <Text style={styles.welcomeText}>Welcome to Taxpartner!</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={toggleScreen} 
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signInButton} 
        onPress={toggleScreen} 
      >
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  groupImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 15,
    lineHeight: 24,
  },
  getStartedButton: {
    backgroundColor: '#F7600F',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 105,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  signInButton: {
    borderWidth: 2,
    borderColor: '#FFA500',
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 120,
    backgroundColor: 'rgba(247, 96, 15, 0.08)',
  },
  signInButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFA500',
  },
});

export default HomeScreen;
