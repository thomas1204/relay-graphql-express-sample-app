import React, {Component, Fragment} from 'react';
import $ from 'jquery';

class AddArticleButton extends Component {
	
	OpenAddArticleModal = () => {
		$('#addCategoryModal').modal('show')
	};
	
	render() {
		const CATEGORY_ID = this.props.categoryId;
		return (
			<Fragment>
				<button type="button" className="btn btn-dark btn-block" onClick={() => this.OpenAddArticleModal()}>
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
									<button>
										<i className="fas fa-times" />
									</button>
								</div>
							</div>
							<div className="body"></div>
						</div>
					</div>
				</div>
			
			
			</Fragment>
		)
	}
}

export default AddArticleButton;