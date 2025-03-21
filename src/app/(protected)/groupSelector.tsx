import { View, Text, SafeAreaView, TextInput, StyleSheet, FlatList, Pressable, Image } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import groups from "../../../assets/data/groups.json";
import { selectedGroup } from "../../atoms";
import { useSetAtom } from "jotai";
import { Group } from "../../types";

export default function GroupSelector() {

    const [searchValue, setSearchValue] = useState<string>("");
    const filteredGroups = groups.filter((group) => group.name.toLowerCase().includes(searchValue.toLowerCase()));
    const setGroup = useSetAtom(selectedGroup);

    const onGroupSelected = (group: Group) => {
      setGroup(group);
      router.back();
    }

  return (
    <SafeAreaView style={{ paddingHorizontal: 10, flex: 1}}>
      <View style={{ flexDirection: "row", alignItems: "center"}}>
        <AntDesign name="close" size={30} color="#000" onPress={() => router.back()}/>
        <Text style={styles.postText}>Post to</Text>
      </View>

      <View style={styles.searchContainter}>
        <AntDesign name="search1" size={24} color="#636363"/>
        <TextInput placeholder="Search for a community" placeholderTextColor="#636363"  style={{ paddingVertical: 10, flex: 1}} value={searchValue} onChangeText={(text) => setSearchValue(text)}/>
        {searchValue && (
            <AntDesign name="closecircle" size={15} color={"#E4E4E4"} onPress={() =>setSearchValue("")} />
        )}
      </View>
      <FlatList scrollEnabled data={filteredGroups} renderItem={({item}) => (
        <Pressable style={styles.groupContainer} onPress={() => onGroupSelected(item)}>
            <Image style={styles.groupImage} src={item.image}/>
            <Text>{item.name}</Text>
        </Pressable>
      )}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    postText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        flex: 1
    },
    searchContainter:{
        flexDirection: "row",
        backgroundColor: "#cdcfd1",
        alignItems: "center",
        marginVertical: 10,
        paddingHorizontal: 5
    },
    groupContainer: {
      flexDirection:"row",
      gap: 5,
      alignItems: "center",
      marginBottom: 20
    },
    groupImage: {
      width: 40,
      aspectRatio: 1,
      borderRadius: 20
    }
})