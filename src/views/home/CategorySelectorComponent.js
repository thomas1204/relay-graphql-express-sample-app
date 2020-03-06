import React, {Component} from 'react';


class CategorySelector extends Component {
	render() {
		const CATEGORY_LIST = this.props.CategoryList.edges;
		return (
			<div className="categorySelector mb-3">
				<select className="form-control">
					<option value="-1"> Select Category </option>
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
