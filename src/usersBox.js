import React from 'react';
import {View, Text} from 'react-native';
import {createFragmentContainer} from 'react-relay';

import UserItem from './usersItem';

class UsersBox extends React.Component {
  render() {
    return (
      <View>
        {this.renderUsers(this.props.viewer)}
      </View>
    )
  }
  renderUsers(users) {
    console.log(users)
    if(users.edges.length<1) {return <Text>User not found</Text>;}
    let key = 0;
    return users.edges.map(user => {
      return (
        <UserItem
          key={key++}
          onSelectUser={this.props.setValues}
          user={user.node.name}/>
      )
    })
  }
}

module.exports = createFragmentContainer(
  UsersBox,
  graphql`
  fragment usersBox_viewer on SearchResultItemConnection {
    edges {
      node {
        ... on User {
          name
        }
      }
    }
  }
  `,
);
