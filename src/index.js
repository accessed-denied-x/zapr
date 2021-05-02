import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Auth0Provider
		domain="kito0.us.auth0.com"
		clientId="ZcMjaUtV1COyXj6D78AT6s6ZJCpcmcIr"
		redirectUri={window.location.origin}
	>
		<Provider store={store}>
			<App />
		</Provider>
	</Auth0Provider>,
	document.getElementById('root')
);

reportWebVitals();
