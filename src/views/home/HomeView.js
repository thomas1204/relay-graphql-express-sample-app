import React, {Component} from 'react';
import './HomeViewStyle.css'


// Components
import NavbarComponent from './NavbarComponent';
import CategorySelector from './CategorySelectorComponent';
import ArticleList from './ArticleListComponent';
import Main from './MainComponent';
import LoaderComponent from './LoaderComponent';

// Relay
import {graphql, QueryRenderer} from 'react-relay';
import RelayEnvironment from "../../relay.environment";


class HomeView extends Component {
	
	state = {
		selectedCategory: "0",
		selectedArticle: null
	};
	
	SelectCategory = (selectedCategory) => {
		this.setState({
			selectedCategory,
			selectedArticle: null
		})
	};
	
	SelectArticle = (selectedArticle) => {
		this.setState({selectedArticle})
	};
	
	render() {
		return (
			<div id="homeView" className="h-100">
				
				{/* NavBar */}
				<NavbarComponent/>
				
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
											CategoryList {
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
											return <LoaderComponent/>
										}
										return (
											<div className="row h-100">
												<div className="col-lg-4 h-100">
													<div id="sidebar" className="h-100">
														
														{/* Category select box*/}
														<CategorySelector
															CategoryList={props.CategoryList}
															SelectCategory={this.SelectCategory}
															selectedCategory={this.state.selectedCategory}
														/>
														
														{
															(props.CategoryList.edges.length > 0) && <ArticleList
																selectedCategory={this.state.selectedCategory}
																CategoryList={props.CategoryList}
																SelectArticle={this.SelectArticle}
															/>
														}
														
														
													</div>
												</div>
												<div className="col-lg-8 h-100">
													{
														(this.state.selectedArticle) && <Main
															selectedArticle={this.state.selectedArticle}
														/>
													}
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
