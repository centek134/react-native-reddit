import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import posts from "../../../../assets/data/posts.json";
import PostListItem from "../../../components/PostListItem";
import { formatDistanceToNowStrict } from "date-fns";
export default function HomeScreen (){
    const post = posts[0]
    return(
        <View style={{ paddingHorizontal: 15, paddingVertical: 10}}>
            <View style={{ flexDirection: "row", gap: 10 }}>
                <Image style={styles.groupImage} source={{ uri: post.group.image }} />
                <Text style={{ fontWeight: "bold" }} >{post.group.name}</Text>
                <Text style={{ color: "#808080" }}>{formatDistanceToNowStrict(new Date(post.created_at))}</Text>
                <View style={{ marginLeft: "auto"}}>
                    <Text style={styles.joinButton}>Join</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    groupImage: {
        width:20,
        height: 20,
        borderRadius: 20
    },
    joinButton: {
        backgroundColor: "#0d469b",
        color: "#fff",
        paddingVertical: 2,
        paddingHorizontal: 7,
        borderRadius: 10,
        fontWeight: "bold"
    },
})