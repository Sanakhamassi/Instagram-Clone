import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

export const IconsBottom = [
  {
    id: 1,
    name: "Home",
    active: "https://cdn-icons-png.flaticon.com/512/1946/1946436.png",
    unactive: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
  },
  {
    id: 2,
    name: "Search",
    active: "https://cdn-icons-png.flaticon.com/512/49/49116.png",
    unactive:
      "https://cdn-icons.flaticon.com/png/512/2811/premium/2811806.png?token=exp=1642946597~hmac=9b105064876ea58000e7870f1933f818",
  },
  {
    id: 3,
    name: "Watch",
    active: "https://cdn-icons-png.flaticon.com/512/92/92353.png",
    unactive:
      "https://cdn-icons.flaticon.com/png/512/2767/premium/2767208.png?token=exp=1642946519~hmac=55b7886fca68f39b5a84202f7d339d12",
  },
  {
    id: 4,
    name: "Shop",
    active: "https://cdn-icons-png.flaticon.com/512/95/95175.png",
    unactive:
      "https://cdn-icons.flaticon.com/png/512/5948/premium/5948550.png?token=exp=1642946417~hmac=99a78b9d367734e2854a15736f499317",
  },
  {
    id: 5,
    name: "Profile",
    active:
      "https://cdn-icons.flaticon.com/png/512/552/premium/552721.png?token=exp=1642946725~hmac=18319fb33bca50a72cef6a22d80a39eb",
    unactive: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
  },
];
const BottomTap = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const Icon = ({ icon }) => (
    <TouchableOpacity
      onPress={() => {
        setActiveTab(icon.name);
      }}
    >
      <Image
        style={styles.icon}
        source={{ uri: activeTab == icon.name ? icon.active : icon.unactive }}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider orientation="vertical" width={1} />
      <View style={styles.iconContainer}>
        {IconsBottom.map((icon, index) => (
          <Icon icon={icon} key={icon.id} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "3%",
    zIndex: 999,
    backgroundColor: "#000",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 5,
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "white",
  },
});
export default BottomTap;
