/**
 * @flow
 * @relayHash f47e10c1d5662a72ce4964458a661148
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ArticleListComponentQueryVariables = {|
  SELECTED_CATEGORY?: ?string
|};
export type ArticleListComponentQueryResponse = {|
  +ArticleList: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string
      |},
      +cursor: string,
    |}>
  |}
|};
export type ArticleListComponentQuery = {|
  variables: ArticleListComponentQueryVariables,
  response: ArticleListComponentQueryResponse,
|};
*/


/*
query ArticleListComponentQuery(
  $SELECTED_CATEGORY: ID
) {
  ArticleList(searchByCategory: $SELECTED_CATEGORY) {
    edges {
      node {
        id
      }
      cursor
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "SELECTED_CATEGORY",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "ArticleList",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "searchByCategory",
        "variableName": "SELECTED_CATEGORY"
      }
    ],
    "concreteType": "articlesConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "articlesEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Article",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "cursor",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ArticleListComponentQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ArticleListComponentQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ArticleListComponentQuery",
    "id": null,
    "text": "query ArticleListComponentQuery(\n  $SELECTED_CATEGORY: ID\n) {\n  ArticleList(searchByCategory: $SELECTED_CATEGORY) {\n    edges {\n      node {\n        id\n      }\n      cursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e0bb62c8fff01f930c00a7b1a51d49ea';

module.exports = node;
