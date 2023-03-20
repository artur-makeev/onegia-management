// verifies if the order was paid

export const paymentStatus = (
	price: number,
	shipping_price: number,
	client_paid: number
): string => {
	let paymentStatus = 'Не оплачен';

	if (price + shipping_price - client_paid === 0) {
		paymentStatus = 'Оплачен';
	}

	return paymentStatus;
};
