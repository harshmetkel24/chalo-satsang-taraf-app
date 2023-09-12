import { View, Text, Image } from "react-native";
import React from "react";

import { images } from "../../constants";
import styles from "./HomeBody.style";

const HomeBody = () => {
  return (
    <View style={styles.container}>
      <View style={styles.vallabhContainer}>
        <Image
          style={styles.vallabhImg}
          source={images.shreeVallabh}
          alt="Shreemad Vallabhacharyaji Mahaprabhuji"
        />
        <Text style={styles.vallabhText}>શ્રીમદ્ વલ્લાચાર્યજી મહાપ્રભુજી</Text>
      </View>

      <View style={styles.introContainer}>
        <Text style={styles.introTitle}>
          Shree Vallabhacharya: Founder of Pushtimarg
        </Text>
        <Text style={styles.introText}>
          Discover the visionary behind Pushtimarg, Shree Vallabhacharya. Born
          in 1479, he dedicated his life to devotion and scholarship. His
          teachings revolve around unwavering love for Lord Krishna, emphasizing
          pure non-dualism. Experience his legacy through Pushtimarg's
          devotional practices and immerse yourself in the divine grace he
          cherished. Explore more to deepen your spiritual journey.
        </Text>
      </View>
    </View>
  );
};

export default HomeBody;
