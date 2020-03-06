import React, {Component} from 'react';
import './home.view.style.css'


// Components
import Navbar from './navbar.component';
import CategorySelector from './CategorySelectorComponent';
import ArticleList from './articleList.component';
import Main from './main.component';

// Relay
import {graphql, QueryRenderer} from 'react-relay';
import RelayEnvironment from "../../relay.environment";


class HomeView extends Component {
	
	state = {
		selectedCategory: null
	};
	
	render() {
		return (
			<div id="homeView" className="h-100">
				
				{/* NavBar */}
				<Navbar/>
				
				{/*	wrapper */}
				<div id="wrapper" className="h-100">
					<div className="container">
						<div id="content" className="h-100">
							
							{/* Parent query renderer */}
							<QueryRenderer
								environment={RelayEnvironment}
								variables={{}}
								query={
									graphql`
										query HomeViewQuery {
											CategoryList{
												edges{
										      node{
										        id
										        title
										      }
										      cursor
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
											return <div>Loading</div>;
										}
										return (
											<div className="row h-100">
												<div className="col-lg-4 h-100">
													<div id="sidebar" className="h-100">
														<CategorySelector CategoryList = {props.CategoryList} />
														<ArticleList/>
													</div>
												</div>
												<div className="col-lg-8 h-100">
													<Main/>
												</div>
											</div>
										)
									}
								}
							/>
							{/* Parent query renderer */}
							
						</div>
					</div>
				</div>
			
			</div>
		)
	}
}

export default HomeView;
