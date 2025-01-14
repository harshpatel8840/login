import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, Animated } from 'react-native';

const img1 = require('../../assets/images/taxpartnerlogo.jpg'); 

const SplashScreen = () => {
  const fadeAnim = new Animated.Value(0); 

  useEffect(() => {
  
    Animated.timing(fadeAnim, { 
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image 
        source={img1}
        style={[styles.logo, { opacity: fadeAnim }]} 
      />
      <Text style={styles.text}>Welcome to TaxPartner</Text>
    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // White text color
  },
});

export default SplashScreen;
