import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/home'
import ScannerScreen from './components/scanner'

const Stack = createStackNavigator();

function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="QR Code Scanner" component={HomeScreen} />
        <Stack.Screen name="ScannerScreen" component={ScannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;
