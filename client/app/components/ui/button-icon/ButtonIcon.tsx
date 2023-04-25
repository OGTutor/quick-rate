import cn from 'classnames';
import { FC } from 'react';

import { IButtonIcon, icons } from './ButtonIcon.interface';
import styles from './ButtonIcon.module.css';

const ButtonIcon: FC<IButtonIcon> = ({
	appearance,
	icon,
	className,
	...rest
}) => {
	const IconComponent = icons[icon];

	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.white]: appearance === 'white',
			})}
			{...rest}
		>
			<IconComponent />
		</button>
	);
};

export default ButtonIcon;
