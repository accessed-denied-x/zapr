import React from 'react';
import '../Styles/Searchbar.css';

export default function Searchbar() {
	return (
		<div id="search-div">
			<form>
				<label>
					<input type="text" placeholder="Search" />
				</label>
			</form>
		</div>
	);
}
