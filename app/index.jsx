import { Stack } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";
import React from "react";

import { HorizontalNav, HomeHeader, HomeBody, Footer } from "../components";
import { COLORS } from "../constants";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />
      <HorizontalNav />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: COLORS.white0,
        }}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <HomeBody />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}
