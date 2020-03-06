import React, {Component} from 'react';
import {graphql, createFragmentContainer} from 'react-relay'


class ArticleComponent extends Component {
	render() {
		const ARTICLE = this.props.article;
		return (
			<div className="article">
				<button>
					{ARTICLE.title}
				</button>
			</div>
		);
	}
}

export default createFragmentContainer(
	ArticleComponent,
	{
		article: graphql`
      fragment ArticleComponent_article on Article {
		      id
          title
      }
		`
	}
)