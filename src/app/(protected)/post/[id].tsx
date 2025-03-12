import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import posts from "../../../../assets/data/posts.json";

export default function DetailedPost() {
    const {id} = useLocalSearchParams();

    const detailedPost = posts.find((post) => post.id === id)
  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}