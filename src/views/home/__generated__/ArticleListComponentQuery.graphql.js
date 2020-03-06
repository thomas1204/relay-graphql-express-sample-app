/**
 * @flow
 * @relayHash 183283127ccaf4ff3c2727a6705ccf69
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ArticleListComponentQueryVariables = {||};
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
query ArticleListComponentQuery {
  ArticleList {
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
    "kind": "LinkedField",
    "alias": null,
    "name": "ArticleList",
    "storageKey": null,
    "args": null,
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
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ArticleListComponentQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ArticleListComponentQuery",
    "id": null,
    "text": "query ArticleListComponentQuery {\n  ArticleList {\n    edges {\n      node {\n        id\n      }\n      cursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6ce24e2b2d09182ba7641cad1066c2fc';

module.exports = node;
