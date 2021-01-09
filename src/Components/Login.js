/*
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
		<Grid container className={classes.form}>
			<Grid item sm />
			<Grid item sm>
				<Typography variant="h2" className={pageTitle}>
					Login
				</Typography>
				<form noValidate>
					<TextField
						color="secondary"
						id="email"
						name="email"
						type="email"
						label="Email"
						helperText={errors.email}
						error={errors.email ? true : false}
						value={this.state.email}
						onChange={this.handleChange}
						fullWidth
						InputProps={{
							className: input,
							classes: {
								root: root,
								error: error,
								underline: underline,
							},
						}}
						FormHelperTextProps={{
							classes: {
								root: root,
								error: error,
							},
						}}
						InputLabelProps={{
							className: input,
							classes: {
								root: root,
								asterisk: asterisk,
								error: error,
							},
						}}
						defaultValue="color"
						className={root}
					/>
					<TextField
						color="secondary"
						id="password"
						name="password"
						type="password"
						label="Password"
						helperText={errors.password}
						error={errors.password ? true : false}
						value={this.state.password}
						onChange={this.handleChange}
						fullWidth
						InputProps={{
							className: input,
							classes: {
								root: root,
								error: error,
								underline: underline,
							},
						}}
						FormHelperTextProps={{
							classes: {
								root: root,
								error: error,
							},
						}}
						InputLabelProps={{
							className: input,
							classes: {
								root: root,
								asterisk: asterisk,
								error: error,
							},
						}}
						defaultValue="color"
						className="root"
					/>
					{errors.general && (
						<Typography variant="body2" className={customError}>
							{errors.general}
						</Typography>
					)}
					<Button
						type="submit"
						variant="contained"
						color="primary"
						className="button"
						disabled="loading"
					>
						LOGIN
						{loading && (
							<CircularProgress
								size={30}
								color="secondary"
								className="progress"
							/>
						)}
					</Button>
					<br />
					<small>
						Don't have an account? Sign up <Link to="/signup">here</Link>
					</small>
				</form>
			</Grid>
			<Grid item sm />
		</Grid>
	);
}
*/
