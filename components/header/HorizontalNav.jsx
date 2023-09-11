import { View, Text, FlatList } from "react-native";
import React from "react";

import styles from "./HorizontalNav.style";
import NavButton from "./NavButton";
import { icons } from "../../constants";

const HorizontalNav = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={[
          { key: "Home", source: icons.home, alt: "Home", route: "/" },
          {
            key: "Pathavali",
            source: icons.paths,
            alt: "Pathavali",
            route: "/pathavali",
          },
          {
            key: "Events",
            source: icons.calendar,
            alt: "Events",
            route: "/events",
          },
          {
            key: "Community",
            source: icons.community,
            alt: "Community",
            route: "/community",
          },
        ]}
        renderItem={({ item }) => (
          <NavButton
            source={item.source}
            text={item.key}
            alt={item.alt}
            route={item.route}
          />
        )}
      />
    </View>
  );
};

export default HorizontalNav;
