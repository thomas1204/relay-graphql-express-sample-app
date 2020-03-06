/**
 * @flow
 * @relayHash bb51c2e7758f71628ff9b1b82d9aa36d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ArticleComponent_article$ref = any;
export type ArticleListComponentQueryVariables = {|
  SELECTED_CATEGORY?: ?string
|};
export type ArticleListComponentQueryResponse = {|
  +ArticleList: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: ArticleComponent_article$ref,
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
        ...ArticleComponent_article
      }
      cursor
    }
  }
}

fragment ArticleComponent_article on Article {
  id
  title
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
    "kind": "Variable",
    "name": "searchByCategory",
    "variableName": "SELECTED_CATEGORY"
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
  "name": "cursor",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ArticleListComponentQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ArticleList",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  {
                    "kind": "FragmentSpread",
                    "name": "ArticleComponent_article",
                    "args": null
                  }
                ]
              },
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArticleListComponentQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ArticleList",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ArticleListComponentQuery",
    "id": null,
    "text": "query ArticleListComponentQuery(\n  $SELECTED_CATEGORY: ID\n) {\n  ArticleList(searchByCategory: $SELECTED_CATEGORY) {\n    edges {\n      node {\n        id\n        ...ArticleComponent_article\n      }\n      cursor\n    }\n  }\n}\n\nfragment ArticleComponent_article on Article {\n  id\n  title\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cbafe3d4294670d14d47aea5213ff581';

module.exports = node;
