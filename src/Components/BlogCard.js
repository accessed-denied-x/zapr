import React from 'react';
import '../Styles/BlogCard.css';
import { Link } from "react-router-dom";

export default function BlogCard( {transaction} ) {
	return (
		<Link to="/blog/600a4cc1d3898876b076f74f">
			<li>
				<p>{transaction.title}</p>
				<p>{transaction.description}</p>
				<p>{transaction.timestamp}</p>
			</li>
		</Link>
	);
}
