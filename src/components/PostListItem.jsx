import { View, Text } from "react-native";

export default function PostListItem({ post }) {
  return (
    <View>
      <Text>{post.title}</Text>
      <Text>By {post.user.name} in {post.group.name}</Text>
      <Text>{post.description}</Text>
    </View>
  );
}