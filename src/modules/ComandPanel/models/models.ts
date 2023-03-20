export interface User {
	userId: number;
	email: string;
}

export interface OrderAddress {
	last_name: string;
	first_name: string;
	father_name: string;
	email: string;
	phone: string;
	address: string;
	shipping_type: string;
	contact: string;
}

export interface OrderPrice {
	price: number;
	shipping_price: number;
	client_paid: number;
}

export interface OrderProduct {
	product_name: string;
	aroma_name: string;
	count: number;
}

export interface Order {
	id: number;
	status: string;
	created_at: string;
	order_addreess: OrderAddress;
	order_price: OrderPrice;
	order_products: OrderProduct[];
}
