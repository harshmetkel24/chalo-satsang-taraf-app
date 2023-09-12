import { StyleSheet } from "react-native";

import { SIZES, COLORS } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.small,
    width: "90%",
    alignItems: "center",
    marginHorizontal: "5%",
  },
  vallabhContainer: {
    backgroundColor: COLORS.black1,
    padding: SIZES.small,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "space-between",
    alignItems: "center",
  },
  vallabhImg: {
    resizeMode: "contain",
  },
  vallabhText: {
    color: COLORS.white0,
    fontSize: SIZES.medium,
    fontWeight: "bold",
    paddingVertical: SIZES.xSmall,
  },
  introContainer: {
    padding: SIZES.small,
  },
  introTitle: {
    fontSize: SIZES.large,
    fontFamily: "RobotoBlack",
    textAlign: "center",
  },
  introText: {
    fontFamily: "RobotoRegular",
    fontSize: SIZES.medium,
    color: COLORS.black1,
  },
});
