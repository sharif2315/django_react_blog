import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';

export default function Header() {
	return (
	  <Box sx={{ flexGrow: 1 }}>
		<AppBar position="static">
		  <Toolbar>

			<IconButton
			  size="large"
			  edge="start"
			  color="inherit"
			  aria-label="menu"
			  sx={{ mr: 2 }}
			>
			  <MenuIcon />

			</IconButton>

			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
			  My First Django React Blog
			</Typography>

			<Stack spacing={2} direction="row">
				<Button 
					color="secondary"
					variant="contained"
					component={NavLink}
					to="/"
				>
					Blog
				</Button>

				<Button 
					color="success"
					variant="contained"
					component={NavLink}
					to="/login"
				>
					Login
				</Button>

				<Button 
					color="warning"
					variant="contained"
					component={NavLink}
					to="/logout"
				>
					Logout
				</Button>
			</Stack>

		  </Toolbar>
		</AppBar>
	  </Box>
	);
  }