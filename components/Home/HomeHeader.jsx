import { View, Text } from "react-native";
import React from "react";

import styles from './HomeHeader.style'

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.line}>
        "તુજ સંગ કોઈ વૈષ્ણવ થાય તો તુ વૈષ્ણવ સાચો,
      </Text>
      <Text style={styles.line}>
        અને તારા સંગ નો રંગ ન લાગે તો તુ વૈષ્ણવ કાચો."
      </Text>
    </View>
  );
};

export default HomeHeader;
