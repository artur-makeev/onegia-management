import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import type { FC } from 'react';
import type { Order } from '../../models/models';
import OrdersData from '../../services/orders';
import { OrderInfo } from '../Order/OrderInfo';

export const OrdersList: FC = () => {
	const [orders, setOrders] = useState<Order[]>([]);

	const fetchAllOrders = () => {
		OrdersData.fetchOrders().then((res) => {
			setOrders(res.data);
		});
	};

	useEffect(() => {
		OrdersData.fetchOrders('active').then((res) => {
			setOrders(res.data);
		});
		//eslist-disable-next-line
	}, []);

	return (
		<>
			<Button onClick={() => fetchAllOrders()}>Архив заказов</Button>
			{orders.map((order) => (
				<OrderInfo key={order.id} order={order} />
			))}
		</>
	);
};
