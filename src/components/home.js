import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';



function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome !</Text>
        <Button
          title="Scan My QR Code"
          onPress={() => navigation.navigate('ScannerScreen')}
        />
      </View>
    );
}

export default HomeScreen
