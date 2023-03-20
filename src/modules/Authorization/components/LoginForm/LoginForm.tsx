import React, { FC, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import styles from './LoginForm.module.css';
import { useAuthStore } from '../../store/AuthStore';
import Alert from '@mui/material/Alert';


export const LoginForm: FC = () => {
	const [authError, setAuthError] = useState('');
	const login = useAuthStore(state => state.login);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// eslint-disable-next-line prettier/prettier
		const target = e.target as typeof e.target & {
			email: { value: string };
			password: { value: string };
		};
		const email = target.email.value;
		const password = target.password.value;

		const auth = await login(email, password);

		if (auth === 1) {
			setAuthError('Ошибка авторизации');
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Image
					className={styles.logo}
					src='../images/logo.svg'
					alt='logo'
					width='200'
					height='100'
				/>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Пароль"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					{authError && <Alert severity="warning">{authError}</Alert>}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Войти
					</Button>
				</Box>
			</Box>
		</Container>
	);
};