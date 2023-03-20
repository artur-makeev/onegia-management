import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FC, useState } from 'react';
import { Button, MenuItem, TextField } from '@mui/material';
import styles from './OrderStatusModal.module.css';
import OrdersData from '../../services/orders';

type Props = {
	orderId: number,
	orderStatus: string,
	open: boolean,
	setOpen: React.Dispatch<React.SetStateAction<boolean>>,
	setOrderStatus: React.Dispatch<React.SetStateAction<string>>,
};

export const OrderStatusModal: FC<Props> = (Props) => {
	const { orderId, orderStatus, open, setOpen, setOrderStatus } = Props;
	const handleClose = () => setOpen(false);
	const [status, setStatus] = useState<string>(orderStatus);

	const applyStatus = async () => {
		const response = await OrdersData.changeOrderStatus({
			id: orderId,
			status: status,
		});
		setOrderStatus(response.data);
		handleClose();
	};

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box className={styles.container}>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						Изменить статус заказа
					</Typography>
					<TextField
						required
						variant='outlined'
						value={status}
						onChange={(e) => setStatus(e.target.value)}
						select
					>
						<MenuItem value={'created'}>Оформлен</MenuItem>
						<MenuItem value={'complete'}>Выполнен</MenuItem>
						<MenuItem value={'sent'}>Отправлен</MenuItem>
						<MenuItem value={'cancelled'}>Отменен</MenuItem>
					</TextField>
					<Button onClick={applyStatus}>Применить</Button>
				</Box>
			</Modal>
		</div>
	);
};
