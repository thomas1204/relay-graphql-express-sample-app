import React, {Component} from 'react';
import LoaderComponent from './LoaderComponent';
import {graphql, QueryRenderer} from 'react-relay';
import RelayEnvironment from "../../relay.environment";
import ArticleDetailsComponent from "./ArticleDetailsComponent";

class MainComponent extends Component {
	
	
	render() {
		const SELECTED_ARTICLE = this.props.selectedArticle;
		return (
			<QueryRenderer
				environment={RelayEnvironment}
				variables={{SELECTED_ARTICLE}}
				query={
					graphql`
						query MainComponentQuery($SELECTED_ARTICLE: ID!){
							node(id: $SELECTED_ARTICLE) {
								...on Article {
									id
									title
									content
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
						return <ArticleDetailsComponent articleDetails={props}/>
					}
				}
			/>
		)
	}
}


export default MainComponent;