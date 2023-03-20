import { useAuthStore } from '@/modules/Authorization/store/AuthStore';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['cyrillic', 'latin'] });

export default function App({ Component, pageProps }: AppProps) {
	const checkAuth = useAuthStore((state) => state.checkAuth);
	const setLoading = useAuthStore((state) => state.setLoading);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			checkAuth();
		} else {
			setLoading(false);
		}
		// eslint-disable-next-line
  }, [])

	return (
		<>
			<Head>
				<title>Onegia management</title>
				<meta name='description' content='command panel' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={inter.className}>
				<main>
					<Component {...pageProps} />
				</main>
			</div>
		</>
	);
}
