import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter, Link } from 'react-router-dom';
import BlogCard from '../Components/BlogCard';
import '../Styles/Home.css';
import { GlobalContext } from '../Context/GlobalState';
import Blog from './Blog';
import NewBlog from './NewBlog';

function Home() {
	const { transactions, getTransactions } = useContext(GlobalContext);

	useEffect(() => {
		getTransactions();
	}, [])

	return (
		<div id="placeholder">
			<div id="blogcard-container">
				<ul>
					{transactions.map(transaction => (
						<BlogCard key={transaction._id} transaction={transaction} />
					))}
				</ul>
				<Link to="/newBlog">
					<div id="button-container">
							<button type="button" id="new-blog-button">
								+
							</button>
					</div>
				</Link>
			</div>
			
			
			<div className="view">
				<Switch>
					<Route path='/blog/:id'>
						<Blog />
					</Route>
					<Route path="/newBlog">
						<NewBlog />
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default withRouter(Home);