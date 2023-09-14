import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import styles from "./PathLists.style";
import { icons } from "../../constants";

const PathLists = ({ title, paths }) => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      <View style={styles.pathsContainer}>
        <FlatList
          data={paths}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.path}>
              <Text >
                {" "}
                {item.id} {item.pathName}{" "}
              </Text>
              <Image source={icons.playBtn} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.pathName}
        />
      </View>
    </ScrollView>
  );
};

export default PathLists;
