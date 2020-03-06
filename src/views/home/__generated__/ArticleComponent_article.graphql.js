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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '36672c14f4f35fdf27fcb975a9f2ce80';

module.exports = node;
