import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Card } from '@material-ui/core';
import { useStyles } from '../Styles/BlogStyles';

export default function Blog() {
	const classes = useStyles();
	const { blog, getBlog } = useContext(GlobalContext);
	const { user } = useAuth0();
	const { id } = useParams();

	console.log('BLOG RENDERED');

	useEffect(() => {
		getBlog(id);
		// eslint-disable-next-line
	}, [getBlog && id]);

	return (
		<div className={classes.blog}>
			<Card className={classes.card}>
				<div className={classes.content}>
					<h1>{transaction.title}</h1>
					<p>
						<small>{'Author: ' + transaction.user}</small>
					</p>
					<p>{transaction.description}</p> <br />
					<p>{transaction.body}</p>
				</div>
			</Card>
		</div>
	);
}
