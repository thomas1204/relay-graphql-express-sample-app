/**
 * @flow
 * @relayHash 4376f71d8b5027eb442345dcb4dbaa6a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateArticleTitleInput = {|
  id: string,
  title: string,
  clientMutationId?: ?string,
|};
export type UpdateArticleTitleMutationVariables = {|
  input: UpdateArticleTitleInput
|};
export type UpdateArticleTitleMutationResponse = {|
  +UpdateArticleTitle: ?{|
    +article: ?{|
      +id: string,
      +title: ?string,
    |}
  |}
|};
export type UpdateArticleTitleMutation = {|
  variables: UpdateArticleTitleMutationVariables,
  response: UpdateArticleTitleMutationResponse,
|};
*/


/*
mutation UpdateArticleTitleMutation(
  $input: UpdateArticleTitleInput!
) {
  UpdateArticleTitle(input: $input) {
    article {
      id
      title
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateArticleTitleInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "UpdateArticleTitle",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateArticleTitlePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "article",
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
    "name": "UpdateArticleTitleMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateArticleTitleMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateArticleTitleMutation",
    "id": null,
    "text": "mutation UpdateArticleTitleMutation(\n  $input: UpdateArticleTitleInput!\n) {\n  UpdateArticleTitle(input: $input) {\n    article {\n      id\n      title\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '91f18e417e07e10d103eb290957bbcf8';

module.exports = node;
