import React from 'react';
import {TextInput} from 'react-native';

const SearchBar = (props) =>
  <TextInput
  style={styles()}
  value={props.searchQuery}
  placeholder="Search for Users"
  clearButtonMode="while-editing"
  onChangeText={text=>props.setValues(text)} />

export default SearchBar;

function styles() {
  return {
    margin:5,
    backgroundColor:"#e4e4e4",
    padding:8,
    borderRadius:10
  }
}
