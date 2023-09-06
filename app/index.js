import { Stack } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />
      <View style={{ flex: 1 }}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}
