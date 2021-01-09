import React, { useState } from 'react';
import Header from './Components/Header';
import Home from './Views/Home';
import Blog from './Views/Blog';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
	const [token, setToken] = useState();

	return (
		<div>
			<Header />
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/blog">
						<Blog />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
