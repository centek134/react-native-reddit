import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import posts from "../../../../assets/data/posts.json";
import PostListItem from "../../../components/PostListItem";


export default function DetailedPost() {
    const {id} = useLocalSearchParams();
    const detailedPost = posts.find((post) => post.id === id);

  return (
    <View>
      {detailedPost?
      <PostListItem post={detailedPost} isDetailedPost/> :
      <Text style={{fontSize: 24, textAlign:"center"}}>Post not found!</Text>}
    </View>
  );
};