import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    margin: "5%",
    paddingTop: SIZES.large,
    backgroundColor: COLORS.white2,
    borderRadius: SIZES.small / 1.25,
  },
  pathContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: COLORS.black1,
    padding: SIZES.small,
    height: 72,
    marginHorizontal: SIZES.medium,
    backgroundColor: COLORS.white3,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    marginBottom: SIZES.large,
  },
  pathText: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    fontFamily: "RobotoMedium",
    textAlign: "center",
  },
});
