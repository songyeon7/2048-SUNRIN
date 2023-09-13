import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

import GameController from "./src/GameController";

export default function App() {
  return (
    <View style={styles.container}>
      <GameController />
      {/* <Button
        title="How to play"
        color="blue"
      />
      <Button
        title="Restart Game"
        color="blue"
      /> */}
      {/* <Button>How to Play</Button>
      <Button>Restart Game</Button> */}
    </View>
  );
}

const onclick = () => {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  Button: {
    padding: 90,
    backgroundColor: "rgb(100, 149, 237)",
    // flexDirection: "row"
  }
});  