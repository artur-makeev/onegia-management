// displays order status name in user friendly format

export const orderStatusName = (status: string) => {
	let orderStatusName = '';

	switch (status) {
		case 'created':
			orderStatusName = 'Оформлен';
			break;
		case 'complete':
			orderStatusName = 'Выполнен';
			break;
		case 'cancelled':
			orderStatusName = 'Отменен';
			break;
		case 'sent':
			orderStatusName = 'Отправлен';
			break;
		default:
			orderStatusName = 'Ошибка!';
			break;
	}

	return orderStatusName;
};
