import React, {Component} from 'react';
import './home.view.style.css'


// Components
import Navbar from './navbar.component';
import CategorySelector from './categorySelector.component';
import ArticleList from './articleList.component';
import Main from './main.component';


class HomeView extends Component {
	render() {
		return (
			<div id="homeView" className="h-100">
				
				{/* Navbar */}
				<Navbar />
				
				{/*	wrapper */}
				<div id="wrapper" className="h-100">
					<div className="container">
						<div id="content" className="h-100">
							
							<div className="row h-100">
								<div className="col-lg-4 h-100">
									<div id="sidebar" className="h-100">
										<CategorySelector />
										<ArticleList />
									</div>
								</div>
								<div className="col-lg-8 h-100">
									<Main />
								</div>
							</div>
							
						</div>
					</div>
				</div>
			
			</div>
		)
	}
}

export default HomeView;
