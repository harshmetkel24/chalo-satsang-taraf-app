import { StyleSheet } from "react-native";

import { SIZES, COLORS, SHADOWS } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.small,
  },
  vallabhContainer: {
    backgroundColor: COLORS.black1,
    padding: SIZES.small,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "space-between",
    alignItems: "center",
  },
  vallabhText: {
    color: COLORS.white0,
    fontSize: SIZES.medium,
    fontWeight: "bold",
    paddingVertical: SIZES.xSmall,
  },
});
