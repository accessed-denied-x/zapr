import React from 'react';
import { useStyles } from '../Styles/Styles';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';

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

	return (
		<div className={classes.header}>
			<AppBar position="static" >
				<Toolbar>
					<img src="https://i.pinimg.com/736x/c5/1e/5b/c51e5b2f43fc57ec2aa106db09f2ff62.jpg" alt="logo" id="logo" />
					<Router><IconButton component={Link} to='/' >
						Zapr
					</IconButton></Router>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
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
					<div>
						Logged in as: 
						{/* {user.name} */}
						<IconButton color="primary">
							<ExitToAppIcon onClick={() => logout({ returnTo: window.location.origin })}  />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</div>

	);
}
