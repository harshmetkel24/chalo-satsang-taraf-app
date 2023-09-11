import { TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

import { SIZES, COLORS } from "../../constants";

const myStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.small / 1.25,
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
  },
});

const ImageBtn = ({ source, alt, styles, handlePress }) => {
  return (
    <TouchableOpacity style={myStyles.container} onPress={handlePress}>
      <Image source={source} alt={alt} style={styles} />
    </TouchableOpacity>
  );
};

export default ImageBtn;
