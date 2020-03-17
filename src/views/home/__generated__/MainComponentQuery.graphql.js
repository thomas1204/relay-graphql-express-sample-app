/**
 * @flow
 * @relayHash 1381c5d7f8d568ac893c077a587acf86
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MainComponentQueryVariables = {|
  SELECTED_ARTICLE: string
|};
export type MainComponentQueryResponse = {|
  +node: ?{|
    +id?: string,
    +title?: ?string,
    +content?: ?string,
  |}
|};
export type MainComponentQuery = {|
  variables: MainComponentQueryVariables,
  response: MainComponentQueryResponse,
|};
*/


/*
query MainComponentQuery(
  $SELECTED_ARTICLE: ID!
) {
  node(id: $SELECTED_ARTICLE) {
    __typename
    ... on Article {
      id
      title
      content
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "SELECTED_ARTICLE",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "SELECTED_ARTICLE"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "content",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MainComponentQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Article",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MainComponentQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "Article",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "MainComponentQuery",
    "id": null,
    "text": "query MainComponentQuery(\n  $SELECTED_ARTICLE: ID!\n) {\n  node(id: $SELECTED_ARTICLE) {\n    __typename\n    ... on Article {\n      id\n      title\n      content\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '414c43f10eaa805979690e5ab36fa3fc';

module.exports = node;
