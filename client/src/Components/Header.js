import React from 'react';
import '../Styles/Header.css';
import UserCard from './UserCard';

export default function Header() {
	return (
		<div id="header-div">
			<div id="logo">Logo Placeholder</div>
			<UserCard />
		</div>
	);
}
