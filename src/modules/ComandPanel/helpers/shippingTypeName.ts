// displays shipping type name in user friendly format

export const shippingTypeName = (type: string) => {
	let shippingTypeName = '';
	switch (type) {
		case 'yandex':
			shippingTypeName = 'Яндекс Доставка';
			break;
		case 'cdek':
			shippingTypeName = 'СДЭК';
			break;
		case 'pickup':
			shippingTypeName = 'самовывоз';
			break;
		default:
			shippingTypeName = 'Ошибка!';
			break;
	}

	return shippingTypeName;
};
