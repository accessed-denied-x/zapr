import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

async function loginUser(credentials) {
	return fetch('http://localhost:9000', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	}).then((data) => data.json());
}

export default function Login({ setToken }) {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = await loginUser({
			username,
			password,
		});
		setToken(token);
	};

	return (
		<Grid container>
			<Grid item sm />
			<Grid item sm>
				<h2>Login</h2>
				<form onSubmit={handleSubmit}>
					<label>
						<p>Username</p>
						<input type="text" onChange={(e) => setUserName(e.target.value)} />
					</label>
					<label>
						<p>Password</p>
						<input
							type="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
					<br />
					<div>
						<button type="submit">Submit</button>
					</div>
				</form>
			</Grid>
			<Grid item sm />
		</Grid>
	);
}

Login.propTypes = {
	setToken: PropTypes.func.isRequired,
};
