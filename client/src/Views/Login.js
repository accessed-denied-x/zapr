import React from 'react';
import { Link } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme) => ({
	...theme.formStyle,
});

export default function Login() {
	return (
		<Grid container>
			<Grid item sm />
			<Grid item sm>
				<h2>Login</h2>
				<form>
					<label>
						<p>Username</p>
						<input type="text" />
					</label>
					<label>
						<p>Password</p>
						<input type="password" />
					</label>
					<div>
						<button type="submit">Submit</button>
					</div>
				</form>
			</Grid>
			<Grid item sm />
		</Grid>
	);
}
