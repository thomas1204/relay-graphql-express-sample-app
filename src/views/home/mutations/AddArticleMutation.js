import {graphql, commitMutation} from 'react-relay';
import {ConnectionHandler} from 'relay-runtime';
import RelayEnvironment from "../../../relay.environment";

const mutation = graphql`
    mutation AddArticleMutation($input: AddArticleInput!) {
        AddArticle(input: $input) {
            article{
                node{
                    id
                    title
                    content
                }
                cursor
            }
        }
    }
`;


const SharedUpdater = (proxyStore, NEW_NODE) => {
	const STORE_ROOT = proxyStore.getRoot();
	const CONNECTION = ConnectionHandler.getConnection(STORE_ROOT, "Article_ArticleList");
	ConnectionHandler.insertEdgeAfter(CONNECTION, NEW_NODE);
};


function commit(article) {
	return commitMutation(
		RelayEnvironment,
		{
			mutation,
			variables: {
				input: {
					title: article.title,
					category: article.category
				}
			},
			updater: (proxyStore) => {
				const ROOT_FIELD = proxyStore.getRootField('AddArticle');
				const LINKED_RECORD = ROOT_FIELD.getLinkedRecord('article');
				SharedUpdater(proxyStore, LINKED_RECORD);
			},
			
			onError: err => console.error(err),
		}
	);
}

export default {commit};