import React, {Component} from 'react';

import {graphql, QueryRenderer} from 'react-relay';
import RelayEnvironment from "../../relay.environment";


class ArticleListComponent extends Component {
	render() {
		// const SELECTED_CATEGORY = this.props.selectedCategory;
		return (
			
			
			<QueryRenderer
				environment={RelayEnvironment}
				variables={{}}
				query={
					graphql`
						query ArticleListComponentQuery {
							ArticleList{
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
								<div className="article">
									<button>
										Tyke
									</button>
								</div>
							</div>
						)
					}
				}
			/>
		);
	}
}

export default ArticleListComponent;