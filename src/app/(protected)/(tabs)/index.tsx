import { View, FlatList, ActivityIndicator} from "react-native";
import PostListItem from "../../../components/PostListItem";
import { Tables } from "../../../types/database.types";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../../services/postService";

type Post = Tables<"posts"> & {
    user: Tables<"users">;
    group: Tables<"groups">;
};

export default function HomeScreen (){
    const { data: posts, isLoading, error } = useQuery({
        queryKey: ["posts"],
        queryFn: () => fetchPosts(),
    });

    if (isLoading){
        return <ActivityIndicator/>;
    };
    if (error){
        console.log(error);
    }
    return(
        <View>
            <FlatList data={posts} renderItem={({item}) => <PostListItem post={item}/>}/>
        </View>
    );
};