import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter, Link } from "expo-router";

import styles from "./PathvaliBody.style";

const pathList = [
  {
    path: "Intro to Shreeji, Mahaprabhuji and Yamunaji",
    route: "intro",
  },
  {
    path: "Nitya Niyam na path",
    route: "nitya-niyam",
  },
  {
    path: "8 Sama na Darshan",
    route: "8-sama",
  },
  {
    path: "Kirtans",
    route: "kirtans",
  },
  {
    path: "Bhajans",
    route: "bhajans",
  },
  {
    path: "84 Vaishnav Varta",
    route: "84-vaishnav-varta",
  },
];

const PathButton = ({ path }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.pathContainer}
      onPress={() => router.push("/pathavali/" + path.route)}
    >
      <Text style={styles.pathText}>{path.path}</Text>
    </TouchableOpacity>
  );
};

const PathavaliBody = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={pathList}
        renderItem={({ item }) => <PathButton path={item} />}
        keyExtractor={(item) => item.path}
      />
    </View>
  );
};

export default PathavaliBody;
