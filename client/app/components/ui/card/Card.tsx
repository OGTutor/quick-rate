import cn from 'classnames';
import { forwardRef } from 'react';

import { ICard } from './Card.interface';
import styles from './Card.module.css';

const Card = forwardRef<HTMLDivElement, ICard>(
	({ color = 'white', children, className, ...rest }, ref) => {
		return (
			<div
				className={cn(styles.card, className, {
					[styles.blue]: color === 'blue',
				})}
				ref={ref}
				{...rest}
			>
				{children}
			</div>
		);
	}
);

export default Card;
