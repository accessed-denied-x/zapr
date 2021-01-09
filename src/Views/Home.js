import React from 'react';
import Searchbar from '../Components/Searchbar';
import BlogCard from '../Components/BlogCard';
import '../Styles/Home.css';

export default function Home() {
	return (
		<div id="home-div">
			<Searchbar />
			<div id="blogcard-container">
				<BlogCard />
			</div>
			<div id="button-container">
				<button type="button" id="new-blog-button">
					+
				</button>
			</div>
		</div>
	);
}
