import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

import { SIZES, COLORS, SHADOWS } from "../../constants";

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SIZES.xxLarge,
  },
  btn: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.small / 1.25,
    padding: SIZES.small,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: COLORS.white2,
    borderColor: COLORS.black0,
    ...SHADOWS.medium,
  },
  img: {
    resizeMode: "contain",
    height: 20,
    width: 20,
  },
  text: {
    textAlign: "center",
    fontFamily: "RobotoBlack",
    fontSize: SIZES.xSmall,
  },
});

const NavButton = ({ source, alt, text, route }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={myStyles.container}
      onPress={() => router.push(route)}
    >
      <View style={myStyles.btn}>
        <Image style={myStyles.img} source={source} alt={alt} />
      </View>
      <Text style={myStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default NavButton;
