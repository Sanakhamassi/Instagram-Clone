import React, { Component } from "react";
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from "react-native";
import BottomTap from "../components/home/BottomTap";
import { IconsBottom } from "../components/home/BottomTap";
import Header from "../components/home/Header";
import Post from "../components/home/post";
import Stories from "../components/home/stories";
import { posts } from "../data/posts";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <SafeAreaView>
        <BottomTap icons={IconsBottom} />
      </SafeAreaView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
export default HomeScreen;
