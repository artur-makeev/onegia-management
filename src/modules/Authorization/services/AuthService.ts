import $api from '@/api';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/AuthResponse';

export default class AuthService {
	static async login(
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('auth/login', { email, password });
	}
}
