import React  , { useContext}from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Context } from '../context/BlogContext';
const ShowSreen = () => {
  const { state } = useContext(Context);
 
  const route = useRoute();
  const id = route.params.id
  const blogPost = state.find(
    blogPost => blogPost.id === id
  );
  console.log(id)
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowSreen;
