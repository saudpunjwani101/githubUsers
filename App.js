import React, { Component } from 'react';
import {QueryRenderer} from 'react-relay';
import usersQuery from './GraphQLQueries/getUsers';
import environment from './environment';

import {View} from 'react-native';

import SearchBar from './src/searchBar';
import UsersBox from './src/usersBox';

export default class App extends Component {
  constructor() {
    super();
    this.state = {searchQuery:'', selected: false}
    this.setValues = this.setValues.bind(this);
  }

  async setValues(value, selected=false) {
    if(this.state.selected) {
      await this.setState({searchQuery:'', selected:false});
      return;
    }
    if(selected) {
      await this.setState({selected});
    }
    
    await this.setState({searchQuery:value});
  }

  render() {
    return (
      <View style={{marginTop:30}}>
        <SearchBar
        searchQuery={this.state.searchQuery}
        setValues={this.setValues} />
        {this.state.searchQuery && this.state.searchQuery.charAt(0)=='@' ?
          <QueryRenderer
          environment={environment}
          query={usersQuery}
          variables={{query: this.state.searchQuery.replace('@',''), first:10}}
          render={({error, props}) => {
            console.log(error)
              if(props) {
                return (
                  <UsersBox
                  setValues={this.setValues}
                  searchQuery={this.state.searchQuery}
                  viewer={props.search} />
                )
              } else return null
            }}
          />
          :null
        }
      </View>
    )
  }
}
