import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    margin: "5%",
    padding: SIZES.small,
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: "RobotoBlack",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  pathsContainer: {
    flex: 1,
    borderRadius: SIZES.small / 1.25,
    padding: SIZES.small,
    marginVertical: SIZES.small,
    backgroundColor: COLORS.white2,
  },
  path: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: SIZES.medium,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black1,
    borderRadius: SIZES.small / 1.25,
    marginBottom: SIZES.small,
  },
});
