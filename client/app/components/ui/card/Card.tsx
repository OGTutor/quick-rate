import cn from 'classnames';
import { FC } from 'react';

import { ICard } from './Card.interface';
import styles from './Card.module.css';

const Card: FC<ICard> = ({ color = 'white', children, className, ...rest }) => {
	return (
		<div
			className={cn(styles.card, className, {
				[styles.blue]: color === 'blue',
			})}
			{...rest}
		>
			{children}
		</div>
	);
};

export default Card;
