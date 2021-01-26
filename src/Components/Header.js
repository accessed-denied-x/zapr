import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useStyles } from '../Styles/HeaderStyles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
	Search,
	Notifications,
	AccountCircle,
	PostAdd,
} from '@material-ui/icons';
import {
	AppBar,
	Toolbar,
	IconButton,
	InputBase,
	Typography,
	Badge,
} from '@material-ui/core';

export default function Header() {
	const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
	} = useAuth0();
	
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const menuId = 'primary-search-account-menu';

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
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
							<Typography
								variant="h4"
								color="secondary"
								className={classes.title}
							>
								<Link to="/">Zapr</Link>
							</Typography>
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
						/>
					</div>
					{isAuthenticated && (
						<div className={classes.usernav}>
							<IconButton
								component={Link}
								to="/newBlog"
								color="inherit"
								className={classes.userButton}
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
								<ExitToAppIcon
									onClick={() => logout({ returnTo: window.location.origin })}
								/>
							</IconButton>
						</div>
					)}
				</Toolbar>
			</AppBar>
			<div className={classes.space}></div>
		</div>
	);
}
