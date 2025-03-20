import { View, Text, SafeAreaView, Pressable, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { router, Link } from "expo-router";

export default function create() {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const goBack = () => {
    setTitle("");
    setBody("");
    router.back();
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1, paddingHorizontal: 10 }}>

      {/* HEADER */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign name="close" size={30} color="#000" onPress={() => goBack()}/>
        <Pressable
          style={{ marginLeft: "auto" }}
          onPress={() => console.error("pressed")}
        >
          <Text style={styles.postText}>Post</Text>
        </Pressable>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "ios"? "padding" : undefined} style={{ flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 10}}>

        {/* COMMUNITY SELECTOR */}
        <Link href={"groupSelector"} asChild>
          <Pressable style={styles.communityContainer}>
            <Text style={ styles.rStyles}>r/</Text>
            <Text style={{ fontWeight: 600}}>Select a community</Text>
          </Pressable>
        </Link>

        {/* INPUTS */}
        <TextInput scrollEnabled={false} multiline value={title} placeholder="Title" onChangeText={(text) => setTitle(text)} style={{ fontSize: 20, fontWeight: "bold", paddingVertical: 20}}/>
        <TextInput scrollEnabled={false} multiline value={body} placeholder="Body text (optional)" onChangeText={(text) => setBody(text)}/>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  postText: {
    color: "#fff",
    backgroundColor: "#115BCA",
    fontWeight: "bold",
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  communityContainer: {
    flexDirection: "row",
    backgroundColor: "#EDEDED",
    borderRadius: 20,
    padding: 10,
    alignSelf: "flex-start",
    marginVertical: 10

  },
  rStyles: {
    backgroundColor: "#000",
    color: "#fff",
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
    fontWeight: "bold",
    marginRight: 5
  }
});
