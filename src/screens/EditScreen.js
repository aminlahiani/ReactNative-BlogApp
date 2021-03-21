import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput , Button } from 'react-native';
import { Context } from '../context/BlogContext';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import BlogPostForm from '../components/BlogPostForm';


const EditScreen = ( ) => {
    const navigation = useNavigation()

    const { state, editBlogPost } = useContext(Context);
  const route = useRoute();
  
  const id = route.params.id
  const blogPost = state.find(
    blogPost => blogPost.id === id
  );
  return (
    <BlogPostForm
    initialValues={{ title: blogPost.title, content: blogPost.content }}
    onSubmit={(title, content) => {
    
      editBlogPost(id, title, content , () => navigation.pop());
       
    }}
  />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;