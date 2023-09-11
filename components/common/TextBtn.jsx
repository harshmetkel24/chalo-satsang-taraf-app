import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import { SIZES, COLORS, SHADOWS } from "../../constants";

const myStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.xSmall / 1.25,
    backgroundColor: COLORS.gray0,
    paddingVertical: SIZES.small / 2.5,
    paddingHorizontal: SIZES.small / 1.25,
    borderWidth: 1,
    borderColor: COLORS.black0,
    ...SHADOWS.small,
  },
  text: {
    fontSize: SIZES.medium,
    fontFamily: "RobotoBold",
    color: COLORS.black0,
  },
});

const TextBtn = ({ text, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={myStyles.container}>
      <Text style={myStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextBtn;
