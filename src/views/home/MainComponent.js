import React, {Component} from 'react';


class MainComponent extends Component {
	render() {
		const ARTICLE = this.props.selectedArticle;
		return (
			<div id="main" className="h-100">
				
				<div className="titleSection">
					<div className="title">
						{ARTICLE.title}
					</div>
					<div className="titleEditButton">
						<button>
							<i className="far fa-edit" />
						</button>
					</div>
				</div>
			</div>
		)
	}
}


export default MainComponent;