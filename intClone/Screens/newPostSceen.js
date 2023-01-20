import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AddPost from "../components/NewPost/AddPost";
export default function NewPostSceen() {
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <AddPost />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
