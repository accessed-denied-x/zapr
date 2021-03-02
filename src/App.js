import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import theme from './Styles/theme';
import './App.css';
import Header from './Components/Header';
import Home from './Views/Home';
import { GlobalProvider } from './Context/GlobalState';
import { ThemeProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { UserContext } from './Context/UserContext';

export default function App() {
	const { isLoading, error } = useAuth0();
	const [search, setSearch] = useState('');

	if (isLoading) return <CircularProgress color="primary" size="100" />;
	if (error) return <div>Oops... {error.message}</div>;
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<GlobalProvider>
					<UserContext.Provider value={{ search, setSearch }}>
						<Header />
						<Home />
					</UserContext.Provider>
				</GlobalProvider>
			</Router>
		</ThemeProvider>
	);
}
