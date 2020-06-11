import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Draggable from './components/Draggable';

export default function App() {
  return (
    <View style={styles.container}>    
      <Text style={styles.paragraph}>
        This is a cube, Dragg it around!
      </Text>
      <Image style={styles.image} source={require('./assets/downArrow.png')}/>
      <Draggable/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    color: '#cccccc',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    height: 50,
    width: 50,
    marginTop: 10,
    marginBottom: 25,
  },
});
