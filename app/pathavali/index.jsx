import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack } from "expo-router";
import React from "react";

import { Footer, HorizontalNav, PathavaliBody } from "../../components";
import { COLORS } from "../../constants";

const Pathavali = () => {
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
        <View>
          <PathavaliBody />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pathavali;
