import cn from 'classnames';
import { FC } from 'react';

import ArrowIcon from '@/assets/images/arrow.svg';

import { IButton } from './Button.interface';
import styles from './Button.module.css';

const Button: FC<IButton> = ({
	children,
	appearance,
	arrow = 'none',
	className,
	...rest
}) => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...rest}
		>
			{children}
			{arrow !== 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow === 'down',
					})}
				>
					<ArrowIcon />
				</span>
			)}
		</button>
	);
};

export default Button;
