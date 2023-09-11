import { View, Text, Image } from "react-native";
import React from "react";

import { images } from "../../constants";
import styles from "./HomeBody.style";

const HomeBody = () => {
  return (
    <View style={styles.container}>
      <View style={styles.vallabhContainer}>
        <Image
          source={images.shreeVallabh}
          alt="Shreemad Vallabhacharyaji Mahaprabhuji"
        />
        <Text style = {styles.vallabhText}>શ્રીમદ્ વલ્લાચાર્યજી મહાપ્રભુજી</Text>
      </View>
    </View>
  );
};

export default HomeBody;
