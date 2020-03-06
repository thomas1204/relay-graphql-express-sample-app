import {graphql, commitMutation} from 'react-relay';


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

function commit(environment, article) {
	return commitMutation(
		environment,
		{
			mutation,
			variables: {
				input: {
					title: article.title,
					content: article.content,
					category: article.category
				}
			},
		}
	);
}

export default {commit};