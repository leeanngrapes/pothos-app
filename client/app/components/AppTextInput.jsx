import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler"; //should be from RN?

import defaultStyles from "../theme/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.warmWhite,
    borderRadius: 40,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    paddingLeft: 20,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
