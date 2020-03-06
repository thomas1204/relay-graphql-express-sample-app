/**
 * @flow
 * @relayHash 1d19eac52aefc9412b1a8f505be05990
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HomeViewQueryVariables = {||};
export type HomeViewQueryResponse = {|
  +CategoryList: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +title: ?string,
      |},
      +cursor: string,
    |}>
  |}
|};
export type HomeViewQuery = {|
  variables: HomeViewQueryVariables,
  response: HomeViewQueryResponse,
|};
*/


/*
query HomeViewQuery {
  CategoryList {
    edges {
      node {
        id
        title
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
    "name": "CategoryList",
    "storageKey": null,
    "args": null,
    "concreteType": "categoriesConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "categoriesEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Category",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
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
    "name": "HomeViewQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeViewQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "HomeViewQuery",
    "id": null,
    "text": "query HomeViewQuery {\n  CategoryList {\n    edges {\n      node {\n        id\n        title\n      }\n      cursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9f105e12d83468f8445b957521385ad3';

module.exports = node;
