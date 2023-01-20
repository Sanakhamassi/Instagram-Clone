import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import FormikPostUploader from "./FormikPostUploader.";
//{navigation} means distract the navigation object
export default function AddPost({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormikPostUploader />
    </View>
  );
}
const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        style={{ tintColor: "white", height: 20, width: 20 }}
        source={require("../../assets/arrow.png")}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>New Post</Text>
    {/* bsh ndiiz new post f blastha */}
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontWeight: "700",
    fontSize: 24,
    marginRight: 23,
  },
});
