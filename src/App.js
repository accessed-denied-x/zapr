import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import theme from './Styles/theme';
import './App.css';
import Header from './Components/Header';
import Home from './Views/Home';
import { GlobalProvider } from './Context/GlobalState';
import { ThemeProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function App() {
	const { isLoading, isAuthenticated, error, loginWithRedirect } = useAuth0();

	if (isLoading) {
		return (
			<div>
				<CircularProgress color="primary" size="100" />
			</div>
		);
	}
	if (error) {
		return <div>Oops... {error.message}</div>;
	}

	return isAuthenticated ? (
		<ThemeProvider theme={theme}>
			<Router>
				<GlobalProvider>
					<Header />
					<Home />
				</GlobalProvider>
			</Router>
		</ThemeProvider>
	) : (
		loginWithRedirect()
	);
}
