import {graphql} from 'react-relay';

export default graphql`
  query getUsersQuery($query: String!, $first: Int) {
    search(type: USER, first:$first, query:$query) {
      ...usersBox_viewer
    }
  }
`
