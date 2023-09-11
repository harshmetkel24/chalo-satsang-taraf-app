import { useCallback } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { icons, images } from "../constants";
import { TextBtn, ImageBtn } from "../components";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    RobotoBlack: require("../assets/fonts/Roboto/Roboto-Black.ttf"),
    RobotoBold: require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
    RobotoLight: require("../assets/fonts/Roboto/Roboto-Light.ttf"),
    RobotoMedium: require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
    RobotoRegular: require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    RobotoThin: require("../assets/fonts/Roboto/Roboto-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // only show the homescreen if fonts are loaded
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Stack
      onLayout={onLayoutRootView}
      screenOptions={{
        headerTitle: "",
        headerLeft: () => (
          <ImageBtn
            alt={"Chalo Satsang Taraf"}
            source={images.logo}
            handlePress={() => router.push("/")}
          />
        ),
        headerRight: () => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ImageBtn
              alt={"notifications"}
              source={icons.notification}
              handlePress={() => {
                console.log("Notifications clicked");
              }}
            />
            <TextBtn
              text={"Login"}
              handlePress={() => {
                console.log("Login button clicked");
              }}
            />
          </View>
        ),
      }}
    />
  );
}
