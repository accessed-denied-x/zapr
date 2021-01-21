import React from 'react';
import Header from './Components/Header';
import Home from './Views/Home';
import Blog from './Views/Blog';
import Login from './Views/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
	return (
		<div>
			<Header />
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/blog">
						<Blog />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
