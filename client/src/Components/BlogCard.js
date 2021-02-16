import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import clsx from 'clsx';
import { useStyles } from '../Styles/BlogCardStyles';
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
	Menu,
	MenuItem,
} from '@material-ui/core';
import { GlobalContext } from '../Context/GlobalState';

export default function BlogCard({ transaction }) {
	const { user } = useAuth0();
	const classes = useStyles();
	const { deleteTransaction } = useContext(GlobalContext);
	const [anchorEl, setAnchorEl] = useState(null);
	const [expanded, setExpanded] = React.useState(false);

	const userStr = user.name;
	const strArr = userStr.split(' ');
	let initialsIcon = '';
	try {
		initialsIcon = initialsIcon + strArr[0].charAt(0) + strArr[1].charAt(0);
	} catch (err) {
		initialsIcon = initialsIcon + strArr[0].charAt(0); //Incase they have no last name or something idk
	}

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.blogcard}>
			<Card className={classes.card}>
				<CardHeader
					avatar={
						<Avatar aria-label="user" className={classes.avatar}>
							{initialsIcon}
						</Avatar>
					}
					action={
						<>
							<IconButton
								aria-label="settings"
								aria-haspopup="true"
								color="secondary"
								onClick={handleClick}
							>
								<MoreVert />
							</IconButton>
							<Menu
								id="simple-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem
									onClick={() => {
										handleClose();
										deleteTransaction(transaction._id);
									}}
								>
									Delete
								</MenuItem>
							</Menu>
						</>
					}
					title={transaction.title}
					subheader={transaction.timestamp}
				/>
				<Link to={'/blog/' + transaction._id}>
					<CardMedia
						className={classes.media}
						image="https://www.ilac.com/wp-content/uploads/2019/06/placeholder-600x400.png"
						title="img title"
					/>
				</Link>
				<div className={classes.footer}>
					<CardContent>
						<Typography variant="body2" component="p">
							{transaction.description}
							<br />
							<br />
							{transaction.createdAt.slice(0, 10)}
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton aria-label="add to favorites" color="secondary">
							<Favorite />
						</IconButton>
						<IconButton aria-label="share" color="secondary">
							<Share />
						</IconButton>
						<div className={classes.exp}>
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
						</div>
					</CardActions>
					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<CardContent>
							<Typography>{transaction.body}</Typography>
						</CardContent>
					</Collapse>
				</div>
			</Card>
		</div>
	);
}
