import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/core';

const IndexScreen = (props) => {
console.log(props)
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  console.log(state);
  const navigation = useNavigation()
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />

      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <TouchableOpacity  onPress={() => navigation.navigate('Show' ,{ id :item.id} ) }>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
