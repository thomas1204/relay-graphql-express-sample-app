import React, {Component, Fragment} from 'react';
import $ from 'jquery';
import AddArticleMutation from "./mutations/AddArticleMutation";

class AddArticleButton extends Component {
	
	ToggleArticleModal = (event) => {
		$('#addCategoryModal').modal(event)
	};
	
	AddArticle = () => {
		const CATEGORY_ID = this.props.categoryId;
		const ARTICLE_TITLE = document.getElementById('articleTitle').value;
		if (ARTICLE_TITLE !== "") {
			AddArticleMutation.commit({
				title: ARTICLE_TITLE,
				category: CATEGORY_ID
			});
			this.ToggleArticleModal('hide');
		}
	};
	
	render() {
		return (
			<Fragment>
				<button type="button" className="btn btn-dark btn-block" onClick={() => this.ToggleArticleModal('show')}>
					Add
				</button>
				
				
				<div className="modal" id="addCategoryModal" tabIndex="-1" role="dialog" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							
							<div className="head">
								<div className="titleSection">
									Add Article
								</div>
								<div className="closeSection">
									<button onClick={() => this.ToggleArticleModal('hide')}>
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
									/>
								</div>
								<div className="mt-3">
									<button type="button" className="btn btn-dark btn-block" onClick={() => this.AddArticle()}>
										Create
									</button>
								</div>
							</div>
						
						</div>
					</div>
				</div>
			
			
			</Fragment>
		)
	}
}

export default AddArticleButton;