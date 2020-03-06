import React, {Component} from 'react';

import {graphql, QueryRenderer} from 'react-relay';
import RelayEnvironment from "../../relay.environment";


class ArticleListComponent extends Component {
	
	// componentDidMount() {
	// 	const FIRST_CATEGORY_ID = this.props.CategoryList.edges[0].node.id;
	// 	this.props.SelectCategory(FIRST_CATEGORY_ID);
	// }
	
	HandleArticleChange = (event) => {
		this.props.SelectCategory(event.target.value);
	};
	
	
	render() {
		const SELECTED_CATEGORY = this.props.selectedCategory;
		return (
			<QueryRenderer
				environment={RelayEnvironment}
				variables={{SELECTED_CATEGORY}}
				query={
					graphql`
						query ArticleListComponentQuery($SELECTED_CATEGORY: ID) {
							ArticleList(searchByCategory: $SELECTED_CATEGORY){
						    edges{
						      node {
						        id
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
							return <div>Loading</div>;
						}
						return (
							<div className="articlesList">
								{
									props.ArticleList.edges.map((node, index) => (
										<div className="article" key={index}>
											<button>
												Tyke
											</button>
										</div>
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