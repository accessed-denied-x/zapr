import React, { useContext, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	withRouter,
	Link,
} from 'react-router-dom';
import BlogCard from '../Components/BlogCard';
import { useStyles } from '../Styles/Styles';
import { GlobalContext } from '../Context/GlobalState';
import Blog from './Blog';
import NewBlog from './NewBlog';

function Home() {
	const { transactions, getTransactions } = useContext(GlobalContext);
	const classes = useStyles();

	useEffect(() => {
		getTransactions();
	}, []);

	console.log(transactions);

	return (
		<div className={classes.home}>
			<div>
				<ul>
					{transactions.map((transaction) => (
						<BlogCard key={transaction._id} transaction={transaction} />
					))}
				</ul>
			</div>
			<div className={classes.view}>
				<Switch>
					<Route path="/blog/600a4cc1d3898876b076f74f">
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

export default Home;
