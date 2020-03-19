import React, {Component} from 'react';
import $ from "jquery";
import ArticleMutation from './mutations/UpdateArticleMutation';
import RelayEnvironment from "../../relay.environment";


class ArticleDetailsComponent extends Component {
	
	ToggleEditArticleModal = (event) => {
		$('#editCategoryModal').modal(event)
	};
	
	UpdateArticleTitle = () => {
		const title = document.getElementById('articleTitleUpdateField').value;
		const content = document.getElementById('articleContentUpdateField').value;
		const ARTICLE_DETAILS = this.props.articleDetails.node;
		ArticleMutation.commit(RelayEnvironment, {
			id: ARTICLE_DETAILS.id,
			title,
			content
		});
		this.ToggleEditArticleModal("hide");
	};
	
	
	render() {
		const ARTICLE_DETAILS = this.props.articleDetails.node;
		return (
			<div id="main" className="h-100">
				<div className="articleTitleSection">
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
					<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
						<div className="modal-content">
							
							<div className="head">
								<div className="titleSection">
									Edit Article
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
										id="articleTitleUpdateField"
										defaultValue={ARTICLE_DETAILS.title}
									/>
								</div>
								
								
								<div className="mt-3">
									<textarea
										className="form-control"
										id="articleContentUpdateField"
										rows={15}
										defaultValue={ARTICLE_DETAILS.content}
									/>
								</div>
								
								
								<div className="mt-3">
									<button type="button" className="btn btn-dark btn-block" onClick={() => this.UpdateArticleTitle()}>
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


export default ArticleDetailsComponent;