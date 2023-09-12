import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import { COLORS, SIZES, images, SHADOWS, icons } from "../../constants";
import LinkBtn from "./LinkBtn";
import ImageBtn from "./ImageBtn";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black1,
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.small,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.white4,
  },
  title: {
    fontFamily: "RobotoBold",
    fontSize: SIZES.large,
    color: COLORS.white1,
    textAlign: "center",
    marginVertical: SIZES.medium,
  },
  website: {
    fontFamily: "RobotoRegular",
    fontSize: SIZES.medium,
    color: COLORS.white1,
    textAlign: "center",
    marginVertical: SIZES.medium,
  },
  statics: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: SIZES.medium,
  },
  staticLink: {
    textAlign: "center",
    fontFamily: "RobotoRegular",
    textDecorationLine: "underline",
    color: COLORS.white1,
  },
});

const StaticLink = ({ text, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.website}>{text}</Text>
    </TouchableOpacity>
  );
};

const Footer = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={images.CSTLogo}
        alt="Chalo Satsang Taraf Logo"
        style={styles.logo}
      />
      <Text style={styles.title}>જય શ્રી રાધેક્રિષ્ના</Text>

      <LinkBtn
        text={"chalo-satsang-taraf@web"}
        color={COLORS.white1}
        handlePress={() =>
          Linking.openURL("https://chalo-satsang-taraf.onrender.com/")
        }
      />

      <View style={styles.statics}>
        <StaticLink
          text={"Contact"}
          handlePress={() => router.push("/static/contact")}
        />
        <StaticLink
          style={styles.staticLink}
          text={"About Us"}
          handlePress={() => router.push("/static/about")}
        />
        <StaticLink
          text={"FaQ's"}
          handlePress={() => router.push("/static/faq")}
        />
      </View>

      <ImageBtn
        source={icons.copyright}
        handlePress={() => router.push("/static/copyright")}
      />
    </View>
  );
};

export default Footer;
