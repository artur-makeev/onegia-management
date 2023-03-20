import $api from '@/api';
import { AxiosError } from 'axios';
import { create } from 'zustand';
import { AuthResponse } from '../models/AuthResponse';
import AuthService from '../services/AuthService';

interface OrderState {
	isAuth: boolean;
	loading: boolean;
	setIsAuth: (auth: boolean) => void;
	setLoading: (authChecked: boolean) => void;
	login: (email: string, password: string) => Promise<0 | 1>;
	checkAuth: () => void;
}

export const useAuthStore = create<OrderState>()((set) => ({
	isAuth: false,
	loading: true,

	setIsAuth: (auth) => set(() => ({ isAuth: auth })),

	setLoading: (authInProgress) => set(() => ({ loading: authInProgress })),

	login: async (email, password) => {
		try {
			const response = await AuthService.login(email, password);
			localStorage.setItem('token', response.data.access_token);
			set({ isAuth: true });
			return 0;
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log(error.response?.data?.message);
			}
			return 1;
		}
	},

	checkAuth: async () => {
		try {
			await $api.get<AuthResponse>(
				`${process.env.NEXT_PUBLIC_API_URL}/auth/check`
			);
			set({ isAuth: true, loading: false });
		} catch (error) {
			set({ isAuth: false, loading: false });
			if (error instanceof AxiosError) {
				console.log(error.response?.data?.message);
			}
		}
	},
}));
