/**
 * @flow
 * @relayHash 20390372bdfe5d268ed8988f2b82ed45
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddArticleInput = {|
  title: string,
  content?: ?string,
  category: string,
  clientMutationId?: ?string,
|};
export type AddArticleMutationVariables = {|
  input: AddArticleInput
|};
export type AddArticleMutationResponse = {|
  +AddArticle: ?{|
    +article: ?{|
      +node: ?{|
        +id: string,
        +title: ?string,
        +content: ?string,
      |},
      +cursor: string,
    |}
  |}
|};
export type AddArticleMutation = {|
  variables: AddArticleMutationVariables,
  response: AddArticleMutationResponse,
|};
*/


/*
mutation AddArticleMutation(
  $input: AddArticleInput!
) {
  AddArticle(input: $input) {
    article {
      node {
        id
        title
        content
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
    "name": "input",
    "type": "AddArticleInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "AddArticle",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddArticlePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "article",
        "storageKey": null,
        "args": null,
        "concreteType": "articlesEdge",
        "plural": false,
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "content",
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
    "name": "AddArticleMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddArticleMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddArticleMutation",
    "id": null,
    "text": "mutation AddArticleMutation(\n  $input: AddArticleInput!\n) {\n  AddArticle(input: $input) {\n    article {\n      node {\n        id\n        title\n        content\n      }\n      cursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a0c10d8382c7aedc0cd44d0122dea890';

module.exports = node;
