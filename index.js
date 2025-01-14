// import React, { useState, useEffect } from 'react';
// import SplashScreen from './Screen/SplashScreen';
// import HomeScreen from './Screen/HomeScreen';
// import LoginScreen from './Screen/LoginScreen';
// import SignupScreen from './Screen/SignupScreen';

// const App = () => {
//   const [currentScreen, setCurrentScreen] = useState('splash');

//   const toggleScreen = (screen) => {
//     setCurrentScreen(screen); 
//   };

  
//   useEffect(() => {
//     if (currentScreen === 'splash') {
//       const timer = setTimeout(() => {
//         setCurrentScreen('home');
//       }, 1000);
//       return () => clearTimeout(timer);
//     } 
//   }, [currentScreen]);

//   return (
//     <>
//       {currentScreen === 'splash' && <SplashScreen />}
//       {currentScreen === 'home' && <HomeScreen toggleScreen={() => toggleScreen('login')} />}
//       {currentScreen === 'login' && (
//         <LoginScreen toggleScreen={() => toggleScreen('signup')} /> )}
//       {currentScreen === 'signup' && (
//         <SignupScreen toggleScreen={() => toggleScreen('login')} />
//       )}
//     </> 
//   );
// };

// export default App;
