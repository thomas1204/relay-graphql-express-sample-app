import React, {Component} from 'react';


class AddArticleButton extends Component {
	render() {
		const CATEGORY_ID = this.props.categoryId;
		return (
			<button type="button" className="btn btn-dark btn-block">
				Add
			</button>
		)
	}
}

export default AddArticleButton;