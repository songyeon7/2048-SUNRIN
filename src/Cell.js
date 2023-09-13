import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";

// 이미지 가져오기
import number2 from "../assets/2.png";
import number4 from "../assets/4.png";
import number8 from "../assets/8.png";
import number16 from "../assets/16.png";
import number32 from "../assets/32.png";
import number64 from "../assets/64.png";
import number128 from "../assets/128.png";
import number256 from "../assets/256.png";
import number512 from "../assets/512.png";
import number1024 from "../assets/1024.png";
import number2048 from "../assets/2048.png";

const Cell = ({ value }) => {
  // 이미지 대신 숫자에 해당하는 이미지를 가져오도록 설정
  let cellImage = null;

  if (value === 2) {
    cellImage = number2;
  } else if (value === 4) {
    cellImage = number4;
  } else if (value === 8) {
    cellImage = number8;
  } else if (value === 16) {
    cellImage = number16;
  } else if (value === 32) {
    cellImage = number32;
  } else if (value === 64) {
    cellImage = number64;
  } else if (value === 128) {
    cellImage = number128;
  } else if (value === 256) {
    cellImage = number256;
  } else if (value === 512) {
    cellImage = number512;
  } else if (value === 1024) {
    cellImage = number1024;
  } else if (value === 2048) {
    cellImage = number2048;
  }

  return (
    <View style={[styles.cellStyle, styles[`cell${value}`]]}>
      {/* 이미지 표시 */}
      {cellImage && <Image source={cellImage} style={styles.imageStyle} />}
    </View>
  );
};

const styles = StyleSheet.create({
  cellStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.99)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 0,
  },
  // ... (다른 스타일)
  imageStyle: {
    width: 80, // 이미지의 가로 크기 조절
    height: 80, // 이미지의 세로 크기 조절
  },
});

export default Cell;
