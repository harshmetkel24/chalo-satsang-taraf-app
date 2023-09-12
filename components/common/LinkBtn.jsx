import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import { SIZES, COLORS, SHADOWS } from "../../constants";

const myStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: SIZES.small,
  },
  text: (color) => ({
    fontSize: SIZES.medium,
    fontFamily: "RobotoRegular",
    color: color,
    textDecorationLine: "underline",
  }),
});

const LinkBtn = ({ text, handlePress, color }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={myStyles.container}>
      <Text style={myStyles.text(color)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LinkBtn;
