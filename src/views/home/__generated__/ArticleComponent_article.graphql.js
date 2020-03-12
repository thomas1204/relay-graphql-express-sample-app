/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ArticleComponent_article$ref: FragmentReference;
declare export opaque type ArticleComponent_article$fragmentType: ArticleComponent_article$ref;
export type ArticleComponent_article = {|
  +id: string,
  +title: ?string,
  +content: ?string,
  +$refType: ArticleComponent_article$ref,
|};
export type ArticleComponent_article$data = ArticleComponent_article;
export type ArticleComponent_article$key = {
  +$data?: ArticleComponent_article$data,
  +$fragmentRefs: ArticleComponent_article$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ArticleComponent_article",
  "type": "Article",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = '9a12ebb4939ada55d64161f3b84f433a';

module.exports = node;
