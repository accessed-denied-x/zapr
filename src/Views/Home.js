import React, { useContext, useEffect } from 'react';
import BlogCard from '../Components/BlogCard';
import '../Styles/Home.css';
import { GlobalContext } from '../Context/GlobalState';

export default function Home() {
	const { transactions, getTransactions } = useContext(GlobalContext);

	useEffect(() => {
		getTransactions();
	}, [])
	
	console.log(transactions);

	return (
		<div id="home-div">
			<div id="blogcard-container">
				<ul>
					{transactions.map(transaction => (
						<BlogCard key={transaction._id} transaction={transaction} />
					))}
				</ul>
			</div>
			<div id="button-container">
				<button type="button" id="new-blog-button">
					+
				</button>
			</div>
		</div>
	);
}
