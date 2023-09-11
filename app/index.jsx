import { Stack } from "expo-router";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { HorizontalNav, HomeHeader, HomeBody } from "../components";

import { COLORS, SIZES } from "../constants";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />
      <HorizontalNav />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: COLORS.white0,
          padding: SIZES.medium,
        }}
      >
        <HomeHeader />
        <HomeBody />
      </ScrollView>
    </SafeAreaView>
  );
}
