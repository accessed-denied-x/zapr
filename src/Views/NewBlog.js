import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { useAuth0 } from '@auth0/auth0-react';
import { useStyles } from '../Styles/NewBlogStyles';
import { Card, TextField, Button } from '@material-ui/core';

export default function NewBlog() {
	const [title, setTitle] = useState('');
	const [description, setDesc] = useState('');
	const [body, setBodyText] = useState('');
	const { user, isAuthenticated } = useAuth0();
	const classes = useStyles();

	const { addTransaction } = useContext(GlobalContext);

	const onSubmit = (e) => {
		e.preventDefault();
		const newTransaction = {
			title,
			description,
			body,
			user: user.name,
			email: user.email,
		};
		addTransaction(newTransaction);
	};

	//console.log('NEW BLOG PAGE RENDERED');

	return (
		isAuthenticated && (
			<div className={classes.newblog}>
				<Card className={classes.card}>
					<div className={classes.box}>
						<form onSubmit={onSubmit}>
							<TextField
								variant="filled"
								label="Title"
								color="secondary"
								onChange={(e) => setTitle(e.target.value)}
								className={classes.textfield}
								required
								fullWidth
								InputProps={{
									className: classes.input,
								}}
								InputLabelProps={{
									className: classes.input,
								}}
							/>
							<TextField
								variant="filled"
								label="Description"
								color="secondary"
								onChange={(e) => setDesc(e.target.value)}
								className={classes.textfield}
								required
								fullWidth
								InputProps={{
									className: classes.input,
								}}
								InputLabelProps={{
									className: classes.input,
								}}
							/>
							<TextField
								variant="outlined"
								label="Body"
								color="secondary"
								onChange={(e) => setBodyText(e.target.value)}
								className={classes.textfield}
								required
								fullWidth
								multiline
								rows="10"
								InputProps={{
									className: classes.input,
								}}
								InputLabelProps={{
									className: classes.input,
								}}
							/>
							<Button
								variant="contained"
								type="submit"
								color="secondary"
								className={classes.button}
							>
								Post
							</Button>
						</form>
					</div>
				</Card>
			</div>
		)
	);
}
