import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { friends } from "../../data/friends";

friends;
export default function stories() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        //style={styles.scrolContainer}
      >
        {friends.map((user, index) => (
          <View style={{ alignItems: "center" }} key={user.id}>
            <Image
              source={{
                uri: user.image,
              }}
              style={styles.icon}
            />
            <Text style={styles.textStory}>
              {user.name.length > 11
                ? user.name.slice(0, 10).toLowerCase() + "..."
                : user.name}
            </Text>
          </View>
        ))}
      </ScrollView>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 13,
  },
  textStory: {
    fontSize: 10,
    color: "white",
  },
  icon: {
    borderRadius: 50,
    justifyContent: "space-between",
    width: 70,
    height: 70,
    borderWidth: 1,
    marginLeft: 7,
    borderColor: "#ff8501",
  },
});
