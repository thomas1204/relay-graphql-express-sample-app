import React, {Component} from 'react';
import LoaderComponent from './LoaderComponent';
import {graphql, QueryRenderer} from 'react-relay';
import RelayEnvironment from "../../relay.environment";
import $ from "jquery";


class MainComponent extends Component {
	
	ToggleEditArticleModal = (event) => {
		$('#editCategoryModal').modal(event)
	};
	
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
						const ARTICLE_DETAILS = props.node;
						return (
							<div id="main" className="h-100">
								<div className="titleSection">
									<div className="title">
										{ARTICLE_DETAILS.title}
									</div>
									<div className="titleEditButton">
										<button onClick={() => this.ToggleEditArticleModal('show')}>
											<i className="far fa-edit"/>
										</button>
									</div>
								</div>
								
								<div className="contentSection">
									<div className="content">
										{ARTICLE_DETAILS.content}
									</div>
								</div>
								
								<div className="modal customModal" id="editCategoryModal" tabIndex="-1" role="dialog" aria-hidden="true">
									<div className="modal-dialog modal-dialog-centered" role="document">
										<div className="modal-content">
											
											<div className="head">
												<div className="titleSection">
													Add Article
												</div>
												<div className="closeSection">
													<button onClick={() => this.ToggleEditArticleModal('hide')}>
														<i className="fas fa-times"/>
													</button>
												</div>
											</div>
											
											<div className="body">
												<div>
													<input
														type="text"
														className="form-control"
														placeholder="Article title"
														id="articleTitle"
														value={ARTICLE_DETAILS.title}
													/>
												</div>
												<div className="mt-3">
													<button type="button" className="btn btn-dark btn-block" onClick={() => this.AddArticle()}>
														Update
													</button>
												</div>
											</div>
										
										</div>
									</div>
								</div>
								
							</div>
						)
					}
				}
			/>
		)
	}
}


export default MainComponent;