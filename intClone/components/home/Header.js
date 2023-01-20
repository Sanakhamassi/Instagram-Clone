import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Header({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("../../assets/logo.png")}
          />
        </TouchableOpacity>
        <View style={styles.iconcontainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.push("NewPostScreen");
            }}
          >
            <Image
              style={styles.icon}
              source={require("../../assets/more.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require("../../assets/heart.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>11</Text>
            </View>
            <Image
              style={styles.icon}
              source={require("../../assets/messenger.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
    left: 2,
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  iconcontainer: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 30,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "red",
    //absolute position to put it when ether we want
    position: "absolute",
    left: 40,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    //to put my unreadBadge on top the icon with zIndex
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});
