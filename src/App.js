import React from 'react';
import Header from './Components/Header';
import Home from './Views/Home';
import Blog from './Views/Blog';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ThemeProvider } from '@material-ui/core/styles';
import { GlobalProvider } from './Context/GlobalState';
import theme from './Styles/theme'

export default function App() {
	const {
		isLoading,
		isAuthenticated,
		error,
		user,
		loginWithRedirect,
		logout,
	} = useAuth0();

	if (isLoading) {
		return <div>
			<CircularProgress />
		</div>;
	}
	if (error) {
		return <div>Oops... {error.message}</div>;
	}

	return !isAuthenticated ? (
		<ThemeProvider theme={theme}>
			<GlobalProvider>
			<Header />
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/blog/600a4cc1d3898876b076f74f">
						<Blog />
					</Route>
				</Switch>
			</Router>
		</GlobalProvider>
		</ThemeProvider>
	) : (
		loginWithRedirect()
	);
}
