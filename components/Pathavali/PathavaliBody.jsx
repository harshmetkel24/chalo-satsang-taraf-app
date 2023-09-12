import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./PathvaliBody.style";

const pathList = [
  {
    path: "Intro to Shreeji, Mahaprabhuji and Yamunaji",
  },
  {
    path: "Nitya Niyam na path",
  },
  {
    path: "8 Sama na Darshan",
  },
  {
    path: "Kirtans",
  },
  {
    path: "Bhajans",
  },
  {
    path: "84 Vaishnav Varta",
  },
];

const PathButton = ({ path }) => {
  return (
    <TouchableOpacity style={styles.pathContainer} onPress={() => {}}>
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
