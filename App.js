import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MenuScreen from './src/screens/MenuScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <MenuScreen />
    </SafeAreaProvider>
  );
}
