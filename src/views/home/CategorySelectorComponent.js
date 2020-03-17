import React, {Component} from 'react';
import AddArticleButton from './AddArticleButton';

class CategorySelector extends Component {
	
	HandleCategoryChange = (event) => {
		this.props.SelectCategory(event.target.value);
	};
	
	render() {
		const CATEGORY_LIST = this.props.CategoryList;
		const SELECTED_CATEGORY = this.props.CategoryList.edges[this.props.selectedCategory].node.id;
		return (
			<div className="categorySelector mb-3">
				<div className="row">
					<div className="col-lg-8">
						<select className="form-control" value={this.props.selectedCategory}
						        onChange={e => this.HandleCategoryChange(e)}>
							{
								CATEGORY_LIST.edges.map((category, index) => (
									<option value={index} key={index}>
										{category.node.title}
									</option>
								))
							}
						</select>
					</div>
					<div className="col-lg-4">
						<AddArticleButton
							categoryId={SELECTED_CATEGORY}
						/>
					</div>
				</div>
			</div>
		)
	}
}


export default CategorySelector;
