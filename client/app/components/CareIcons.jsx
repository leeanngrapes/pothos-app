import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../theme/colors";

function CareIcons(props) {
  return (
    <View style={styles.iconBar}>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="water-outline"
          size={30}
          color={colors.white}
        />
      </View>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="weather-sunny"
          size={30}
          color={colors.white}
        />
      </View>
      <View style={styles.icon}>
        <MaterialCommunityIcons name="leaf" size={25} color={colors.white} />
      </View>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="content-cut"
          size={25}
          color={colors.white}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconBar: {
    //flex: 1,
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
    marginTop: 50,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CareIcons;
