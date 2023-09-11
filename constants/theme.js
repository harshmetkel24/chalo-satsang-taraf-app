const COLORS = {
  // white colors
  white0: "#ffffff", // main text color
  white1: "#f8f8f8", // secondary text color
  white2: "#f2f2f2", // main background color
  white3: "#e6e6e6", // secondary background color
  white4: "#cccccc", // border color

  // gray colors
  gray0: "#d9d9d9", // main background color

  // black colors
  black0: "#000000",
  black1: "#262626", // image background color
};

const FONTS = {};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2, // For Android
  },
  medium: {
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 4, // For Android
  },
  large: {
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 6, // For Android
  },
};

export { COLORS, FONTS, SIZES, SHADOWS };
