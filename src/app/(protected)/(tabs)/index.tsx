import { View, FlatList} from "react-native";
import posts from "../../../../assets/data/posts.json";
import PostListItem from "../../../components/PostListItem";

export default function HomeScreen (){
    return(
        <View>
            <FlatList data={posts} renderItem={({item}) => <PostListItem post={item}/>}/>
        </View>
    );
};