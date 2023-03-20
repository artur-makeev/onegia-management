import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import React, { FC } from 'react';

export const Navbar: FC = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<h4>Onegia Managment</h4>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
