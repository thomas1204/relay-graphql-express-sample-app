import {graphql, commitMutation} from 'react-relay';


const mutation = graphql`
    mutation UpdateArticleMutation($input: UpdateArticleInput!) {
        UpdateArticle(input: $input) {
            article {
                id
                title
                content
            }
        }
    }
`;


function getOptimisticResponse(article) {
	return {
		UpdateArticle: {
			article: {
				...article
			}
		}
	}
}

function commit(environment, article) {
	return commitMutation(
		environment,
		{
			mutation,
			variables: {
				input: {
					...article
				}
			},
			optimisticResponse: getOptimisticResponse(article)
		}
	)
}

export default {commit}