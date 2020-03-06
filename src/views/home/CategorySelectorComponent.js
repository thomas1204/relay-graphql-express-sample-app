import React, {Component} from 'react';


class CategorySelector extends Component {
	
	componentDidMount() {
		const FIRST_CATEGORY_ID = this.props.CategoryList.edges[0].node.id;
		this.props.SelectCategory(FIRST_CATEGORY_ID);
	}
	
	HandleCategoryChange = (event) => {
		this.props.SelectCategory(event.target.value);
	};
	
	render() {
		const CATEGORY_LIST = this.props.CategoryList.edges;
		return (
			<div className="categorySelector mb-3">
				<select className="form-control" value={this.props.selectedCategory} onChange={e => this.HandleCategoryChange(e)}>
					{
						CATEGORY_LIST.map((category, index) => (
							<option value={category.node.id} key={index}>
								{category.node.title}
							</option>
						))
					}
				</select>
			</div>
		)
	}
}


export default CategorySelector;