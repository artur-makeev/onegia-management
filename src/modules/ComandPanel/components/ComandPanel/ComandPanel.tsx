import * as React from 'react';

import { OrdersList } from '../OrdersList/OrdersList';
import styles from './ComandPanel.module.css';

export const ComandPanel = () => {
	return (
		<div className={styles.container}>
			<OrdersList />
		</div>
	);
};
