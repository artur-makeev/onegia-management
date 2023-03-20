import $api from '@/api';
import { AxiosResponse } from 'axios';
import { Order } from '../models/models';

export interface UpdateOrderStatusDto {
	id: number;
	status: string;
}

export type Filter = 'active';

export default class OrdersData {
	static async fetchOrders(filter?: Filter): Promise<AxiosResponse<Order[]>> {
		return $api.get('/management/orders', { params: { filter } });
	}

	static async changeOrderStatus(
		body: UpdateOrderStatusDto
	): Promise<AxiosResponse<string>> {
		return $api.post('management/order/status', body);
	}
}
