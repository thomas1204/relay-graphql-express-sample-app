/**
 * @flow
 * @relayHash bb616337a3908b00940037b38bc1674f
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
  ArticleList(first: 100, searchByCategory: $SELECTED_CATEGORY) {
    edges {
      node {
        id
        ...ArticleComponent_article
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    }
  ]
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  },
  {
    "kind": "Variable",
    "name": "searchByCategory",
    "variableName": "SELECTED_CATEGORY"
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
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "ArticleList",
        "name": "__Article_ArticleList_connection",
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
                  (v1/*: any*/),
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
          },
          (v4/*: any*/)
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
        "args": (v5/*: any*/),
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
                  (v1/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ]
              },
              (v3/*: any*/)
            ]
          },
          (v4/*: any*/)
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "ArticleList",
        "args": (v5/*: any*/),
        "handle": "connection",
        "key": "Article_ArticleList",
        "filters": []
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ArticleListComponentQuery",
    "id": null,
    "text": "query ArticleListComponentQuery(\n  $SELECTED_CATEGORY: ID\n) {\n  ArticleList(first: 100, searchByCategory: $SELECTED_CATEGORY) {\n    edges {\n      node {\n        id\n        ...ArticleComponent_article\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ArticleComponent_article on Article {\n  id\n  title\n}\n",
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "ArticleList"
          ]
        }
      ]
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '68c2b3dde52d2261ff670f0f019e3797';

module.exports = node;
