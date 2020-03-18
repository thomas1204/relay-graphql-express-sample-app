import {graphql, commitMutation} from 'react-relay';


const mutation = graphql`
    mutation UpdateArticleTitleMutation($input: UpdateArticleTitleInput!) {
        UpdateArticleTitle(input: $input) {
            article {
                id
                title
            }
        }
    }
`;


function getOptimisticResponse(article) {
	return {
  UpdateArticleTitle: {
			article: {
				id: article.id,
				title: article.title,
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
					id: article.id,
					title: article.title
				}
			},
			optimisticResponse: getOptimisticResponse(article)
		}
	)
}

export default {commit}