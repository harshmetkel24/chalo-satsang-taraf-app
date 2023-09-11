import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../constants";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white3,
    height: 72,
    paddingVertical: SIZES.small / 2,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    ...SHADOWS.small,
  },
});
