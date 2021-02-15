import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import BlogCard from '../Components/BlogCard';
import { useStyles } from '../Styles/HomeStyles';
import { GlobalContext } from '../Context/GlobalState';
import Blog from './Blog';
import NewBlog from './NewBlog';

export default function Home() {
	const { transactions, getTransactions } = useContext(GlobalContext);
	const classes = useStyles();

	useEffect(() => {
		getTransactions();
		// eslint-disable-next-line
	}, []);

	console.log('HOME RENDERED');

	return (
		<div className={classes.home}>
			<div className={classes.viewA}>
				{transactions
					.slice(0)
					.reverse()
					.map((transaction) => (
						<BlogCard key={transaction._id} transaction={transaction} />
					))}
			</div>
			<div className={classes.viewB}>
				<Switch>
					<Route path="/blog/:id">
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
