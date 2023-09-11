import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.small,
  },
  line: {
    textAlign: "center",
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
});
