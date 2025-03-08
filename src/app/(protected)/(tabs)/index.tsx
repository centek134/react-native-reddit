import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import posts from "../../../../assets/data/posts.json";
import PostListItem from "../../../components/PostListItem";
import { formatDistanceToNowStrict } from "date-fns";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
export default function HomeScreen (){
    const post = posts[0]
    return(
        <View>
            <FlatList data={posts} renderItem={({item}) => <PostListItem post={item}/>}/>
        </View>
    )
};