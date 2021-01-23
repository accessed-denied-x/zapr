import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import clsx from 'clsx';
import { useStyles } from '../Styles/Styles';
import { Favorite, Share, ExpandMore, MoreVert } from '@material-ui/icons';
import {
	Avatar,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	IconButton,
	Typography,
} from '@material-ui/core';

export default function BlogCard({ transaction }) {
	const {
		isLoading,
		isAuthenticated,
		error,
		user,
		loginWithRedirect,
		logout,
	} = useAuth0();
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		//<Link to="/blog/600a4cc1d3898876b076f74f">
		<li>
			<div className={classes.blogcard}>
				<Card className={classes.card}>
					<CardHeader
						avatar={
							<Avatar aria-label="user" className={classes.avatar}>
								AS
							</Avatar>
						}
						action={
							<IconButton aria-label="settings" color="secondary">
								<MoreVert />
							</IconButton>
						}
						title={transaction.title}
						subheader={transaction.timestamp}
					/>
					<CardMedia
						className={classes.media}
						image="https://www.ilac.com/wp-content/uploads/2019/06/placeholder-600x400.png"
						title="img title"
					/>
					<CardContent>
						<Typography variant="body2" component="p">
							{transaction.description}
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton aria-label="add to favorites" color="secondary">
							<Favorite />
						</IconButton>
						<IconButton aria-label="share" color="secondary">
							<Share />
						</IconButton>
						<IconButton
							className={clsx(classes.expand, {
								[classes.expandOpen]: expanded,
							})}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label="show more"
							color="secondary"
						>
							<ExpandMore />
						</IconButton>
					</CardActions>
					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<CardContent>
							<Typography>{transaction.description}</Typography>
						</CardContent>
					</Collapse>
				</Card>
			</div>
		</li>
		//</Link>
	);
}
