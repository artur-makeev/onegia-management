import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import React, { FC } from 'react';

export const Spinner: FC = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				minHeight: '95vh',
				alignItems: 'center',
			}}
		>
			<CircularProgress />
		</Box>
	);
};
