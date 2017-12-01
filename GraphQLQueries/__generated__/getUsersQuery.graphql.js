/**
 * @flow
 * @relayHash 8ba923ad7dc671fefcdbabc43c0f55a2
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type getUsersQueryResponse = {|
  +search: {| |};
|};
*/


/*
query getUsersQuery(
  $query: String!
  $first: Int
) {
  search(type: USER, first: $first, query: $query) {
    ...usersBox_viewer
  }
}

fragment usersBox_viewer on SearchResultItemConnection {
  edges {
    node {
      ... on User {
        name
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "query",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "first",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "getUsersQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "query",
            "variableName": "query",
            "type": "String!"
          },
          {
            "kind": "Literal",
            "name": "type",
            "value": "USER",
            "type": "SearchType!"
          }
        ],
        "concreteType": "SearchResultItemConnection",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "usersBox_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Root"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "getUsersQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "query",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "first",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "getUsersQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "query",
            "variableName": "query",
            "type": "String!"
          },
          {
            "kind": "Literal",
            "name": "type",
            "value": "USER",
            "type": "SearchType!"
          }
        ],
        "concreteType": "SearchResultItemConnection",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "SearchResultItemConnection",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "SearchResultItemEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "SearchResultItem",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "name",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query getUsersQuery(\n  $query: String!\n  $first: Int\n) {\n  search(type: USER, first: $first, query: $query) {\n    ...usersBox_viewer\n  }\n}\n\nfragment usersBox_viewer on SearchResultItemConnection {\n  edges {\n    node {\n      ... on User {\n        name\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
