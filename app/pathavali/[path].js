import { ScrollView, View, Text, SafeAreaView } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import React from "react";

import { PathLists, HorizontalNav, Footer } from "../../components";

const pathScreen = () => {
  // use this path to fetch data from api
  const { path } = useLocalSearchParams();

  const list = [
    {
      id: 1,
      pathName: "શ્રી કૃષ્ણાય નમઃ",
    },
    {
      id: 2,
      pathName: " મંગલાચરણમ્",
    },
    {
      id: 3,
      pathName: "શ્રી સર્વો્તમસ્ત્રોત્રમ",
    },
    {
      id: 4,
      pathName: "શ્રી યમુનાષ્ટકમ્",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />
      <HorizontalNav />
      <ScrollView>
        {path === "nitya-niyam" && (
          <PathLists title="નિત્ય નિયમના પાઠ" paths={list} />
        )}
        {path !== "nitya-niyam" && (
          <View>
            <Text> {path} </Text>
          </View>
        )}
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default pathScreen;
