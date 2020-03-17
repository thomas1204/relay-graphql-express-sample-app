import React, {Component} from 'react';

import {graphql, QueryRenderer} from 'react-relay';
import RelayEnvironment from "../../relay.environment";

import ArticleComponent from './ArticleComponent';
import LoaderComponent from './LoaderComponent';


class ArticleListComponent extends Component {
	render() {
		const SELECTED_CATEGORY = this.props.CategoryList.edges[this.props.selectedCategory].node.id;
		return (
			<QueryRenderer
				environment={RelayEnvironment}
				variables={{SELECTED_CATEGORY}}
				query={
					graphql`
						query ArticleListComponentQuery($SELECTED_CATEGORY: ID) {
							ArticleList(first: 100, searchByCategory: $SELECTED_CATEGORY) @connection(key: "Article_ArticleList", filters: []) {
						    edges{
						      node {
						        id
						        ...ArticleComponent_article
						      }
						      cursor
						    }
						  }
						}
					`
				}
				render={
					({error, props}) => {
						if (error) {
							return <div>Error!</div>;
						}
						if (!props) {
							return <LoaderComponent/>;
						}
						return (
							<div className="articlesList">
								{
									props.ArticleList.edges.map((edge, index) => (
										<ArticleComponent
											key={index}
											index={index}
											article={edge.node}
											HandleArticleChange={this.props.SelectArticle}
										/>
									))
								}
							</div>
						)
					}
				}
			/>
		);
	}
}

export default ArticleListComponent;