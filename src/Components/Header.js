import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useStyles } from '../Styles/HeaderStyles';
import NewBlog from './NewBlog';
import {
	Search,
	Notifications,
	AccountCircle,
	PostAdd,
	ExitToApp,
} from '@material-ui/icons';
import {
	AppBar,
	Toolbar,
	IconButton,
	InputBase,
	Typography,
	Badge,
	Dialog,
	Slide,
} from '@material-ui/core';
import { UserContext } from '../Context/UserContext';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

export default function Header() {
	const classes = useStyles();
	const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
	// eslint-disable-next-line
	const { search, setSearch } = useContext(UserContext);
	// eslint-disable-next-line
	const [anchorEl, setAnchorEl] = React.useState(null);
	const menuId = 'primary-search-account-menu';
	const [open, setOpen] = useState(false);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.header}>
			<AppBar color="primary">
				<Toolbar>
					<img
						src="https://i.pinimg.com/originals/cc/11/7f/cc117f49be98a60dcf1c3e380cbb86b9.gif"
						alt="logo"
						className={classes.logo}
					/>
					<Router>
						<IconButton component={Link} to="/">
							<Link to="/" color="#31707d">
								<Typography
									variant="h4"
									color="secondary"
									className={classes.title}
								>
									Zapr
								</Typography>
							</Link>
						</IconButton>
					</Router>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<Search />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
					<Dialog
						open={open}
						TransitionComponent={Transition}
						keepMounted
						onClose={handleClose}
					>
						<NewBlog setOpen={setOpen} />
					</Dialog>
					{isAuthenticated ? (
						<div className={classes.usernav}>
							<IconButton
								color="inherit"
								className={classes.userButton}
								onClick={handleClickOpen}
							>
								<PostAdd />
							</IconButton>
							<IconButton
								aria-label="show 17 new notifications"
								color="inherit"
								className={classes.userButton}
							>
								<Badge /**badgeContent={17}*/ color="secondary">
									<Notifications />
								</Badge>
							</IconButton>
							<IconButton
								aria-label="account of current user"
								aria-controls={menuId}
								aria-haspopup="true"
								onClick={handleProfileMenuOpen}
								color="inherit"
								className={classes.userButton}
							>
								<AccountCircle />
							</IconButton>
							<IconButton color="inherit" className={classes.userButton}>
								<ExitToApp
									onClick={() => logout({ returnTo: window.location.origin })}
								/>
							</IconButton>
						</div>
					) : (
						<IconButton color="inherit" className={classes.userButton}>
							<ExitToApp onClick={() => loginWithRedirect()} />
						</IconButton>
					)}
				</Toolbar>
			</AppBar>
			<div className={classes.space}></div>
		</div>
	);
}
