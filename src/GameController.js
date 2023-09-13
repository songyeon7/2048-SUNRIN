import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";

import {
  generateRandom,
  getEmptyBoard,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  checkWin,
  isOver,
} from "./GameBoard";

import Cell from "./Cell";

var width = Dimensions.get("window").width;

const GameController = () => {
  const [board, updateBoard] = useState(generateRandom(getEmptyBoard()));

  const checkEndGame = () => {
    if (checkWin(board)) {
      // console.log("You win!");
      alert("You win!");
    } else if (isOver(board)) {
      // console.log("Game over!");
      alert("Game over!");
    }
  };

  const left = () => {
    const newBoard = moveLeft(board);
    updateBoard(generateRandom(newBoard));
    checkEndGame();
  };

  const right = () => {
    const newBoard = moveRight(board);
    updateBoard(generateRandom(newBoard));
    checkEndGame();
  };

  const up = () => {
    const newBoard = moveUp(board);
    updateBoard(generateRandom(newBoard));
    checkEndGame();
  };

  const down = () => {
    const newBoard = moveDown(board);
    updateBoard(generateRandom(newBoard));
    checkEndGame();
  };

  return (
    <GestureRecognizer
      style={styles.screenStyle}
      onSwipeLeft={left}
      onSwipeRight={right}
      onSwipeUp={up}
      onSwipeDown={down}
    >
      <Text style={styles.headerStyle}>IWOP</Text>
      <Text style={styles.header2Style}>make a whale</Text>
      <View style={styles.boardStyle}>
        {board.map((row, rowIndex) =>
          <View key={`cell-${rowIndex}`} style={styles.rowStyle}>
            {row.map((value, cellIndex) =>
              <Cell key={`cell-${cellIndex}`} value={value} />
            )}
          </View>
        )}
      </View>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    paddingTop: 90,
    fontSize: 50,
    textAlign: "center",
    color: "blue",
    fontWeight: "bold"
  },
  header2Style: {
    paddingBottom: 90,
    fontSize: 30,
    textAlign: "center",
    color: "blue",
    fontWeight: "bold"
  },
  boardStyle: {
    width: width,
    padding: 5,
    backgroundColor: "cornflowerblue"
  },
  rowStyle: {
    flexDirection: "row",
    height: width / 4
  }
});

export default GameController;
