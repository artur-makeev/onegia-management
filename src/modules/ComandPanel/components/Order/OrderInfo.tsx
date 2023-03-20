import { Order } from '../../models/models';
import styles from './OrderInfo.module.css';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { FC, useEffect, useState } from 'react';
import { dateConvert } from '../../helpers/dateConvert';
import { paymentStatus } from '../../helpers/paymentStatus';
import EditIcon from '@mui/icons-material/Edit';
import { OrderStatusModal } from '../OrderStatusModal/OrderStatusModal';
import { orderStatusName } from '../../helpers/orderStatusName';
import { shippingTypeName } from '../../helpers/shippingTypeName';

type Props = {
	order: Order,
};

export const OrderInfo: FC<Props> = ({ order }): JSX.Element => {
	const [orderStatusModal, setOrderStatusModal] = useState<boolean>(false);
	const [orderStatus, setOrderStatus] = useState<string>('');

	useEffect(() => {
		if (orderStatus === '') {
			setOrderStatus(order.status);
		}
		//eslint-disable-next-line
	}, [])

	return (
		<>
			<Paper elevation={3} className={styles.paper}>
				<h2>Заказ № {order.id}</h2>
				<div className={styles.orderContainer}>
					<div className={`${styles.item} ${styles.tableHeading}`}>Дата</div>
					<div className={`${styles.item} ${styles.tableHeading}`}>Статус</div>
					<div className={`${styles.item} ${styles.tableHeading}`}>
						Тип доставки
					</div>
					<div className={`${styles.item} ${styles.tableHeading}`}>Оплата</div>
					<div className={`${styles.item} ${styles.tableHeading}`}>Данные</div>
					<div className={styles.item}>{dateConvert(order.created_at)}</div>
					<div className={styles.item}>
						{orderStatusName(orderStatus)}
						<EditIcon
							onClick={() => setOrderStatusModal(true)}
							fontSize='small'
							className={styles.icon}
						/>
					</div>
					<div className={styles.item}>
						{shippingTypeName(order.order_addreess.shipping_type)}
					</div>
					<div className={styles.item}>
						{paymentStatus(
							order.order_price.price,
							order.order_price.shipping_price,
							order.order_price.client_paid
						)}
					</div>
					<div className={styles.clientData}>
						<div>
							{order.order_addreess.last_name} {order.order_addreess.first_name}{' '}
							{order.order_addreess.father_name}
						</div>
						<div>{order.order_addreess.phone}</div>
						<div>{order.order_addreess.contact}</div>
						<div>{order.order_addreess.address}</div>
					</div>
					<div className={`${styles.item} ${styles.longItem}`}>
						<Divider />
						<div className={styles.products}>
							<div className={`${styles.item} ${styles.tableHeading}`}>
								Товар
							</div>
							<div className={`${styles.item} ${styles.tableHeading}`}>
								Аромат
							</div>
							<div className={`${styles.item} ${styles.tableHeading}`}>
								Количество
							</div>
							{order.order_products.map((product) => {
								return (
									<>
										<div className={styles.item}>{product.product_name}</div>
										<div className={styles.item}>{product.aroma_name}</div>
										<div className={styles.item}>{product.count}</div>
									</>
								);
							})}
						</div>
					</div>
				</div>
				<Divider className={styles.divider} />
				<div className={styles.orderSummary}>
					Итого: {order.order_price.price + order.order_price.shipping_price} ₽.
					В том числе доставка: {order.order_price.shipping_price} ₽.
				</div>
			</Paper>
			<OrderStatusModal
				orderId={order.id}
				orderStatus={order.status}
				open={orderStatusModal}
				setOpen={setOrderStatusModal}
				setOrderStatus={setOrderStatus}
			/>
		</>
	);
};
