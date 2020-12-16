import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert, FlatList } from "react-native";

import colors from "../theme/colors";
import Heading from "../components/Heading";
import AppButton from "../components/AppButton";
import SillItem from "../components/SillItem";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import axios from "axios";

const numColumns = 3;

function YourSillScreen({ navigation }) {
  const [sill, setSill] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/sill")
      .then((res) => res.json())
      .then((jsonRes) => {
        console.log("Fetched the sill");
        setSill(jsonRes);
      });
    console.log("Made it through use effect and fetch");
  }, []);

  return (
    <Screen style={styles.background}>
      <Heading>Your Sill</Heading>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Add A Plant"
            onPress={() => navigation.navigate(routes.SEARCH)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Filter"
            color="accent"
            onPress={() => Alert.alert("Filter button pressed")}
          />
        </View>
      </View>
      <View style={styles.sill}>
        <FlatList
          data={sill}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({ item }) => (
            <SillItem
              key={item.id}
              name={item.nickname}
              location={item.location.label}
              imageUri={item.imageUri}
              commonName={item.commonName}
              onPress={() =>
                navigation.navigate(routes.VIEW_PLANT, {
                  nickname: item.nickname,
                  location: item.location.label,
                  note: item.note,
                  imageUri: item.imageUri,
                  commonName: item.commonName,
                  scientificName: item.scientificName,
                  waterInfo: item.waterInfo,
                  lightInfo: item.lightInfo,
                  fertilizerInfo: item.fertilizerInfo,
                  pruningInfo: item.pruningInfo,
                })
              }
            />
          )}
          refreshing={refreshing}
          onRefresh={
            //setSill with new array from back end
            //useEffect( //<--this was causing massive overload!
            () => {
              fetch("http://localhost:5000/sill")
                .then((res) => res.json())
                .then((jsonRes) => {
                  //console.log(jsonRes);
                  setSill(jsonRes);
                });
              console.log("Fetched the refreshed sill");
              //})
            }
          }
          numColumns={numColumns}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 60,
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  sill: {
    paddingHorizontal: 20,
    flex: 1,
  },
});

export default YourSillScreen;
