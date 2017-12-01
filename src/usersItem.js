import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const UserItem = (props) =>
  <TouchableOpacity
  style={{margin:5,padding:5}}
  onPress={()=>props.onSelectUser(props.user, true)}>
    <Text style={{fontWeight:'500'}}>{props.user}</Text>
  </TouchableOpacity>

export default UserItem;
