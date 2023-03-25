import cn from 'classnames';
import { FC } from 'react';

import { IParagraph } from './Paragraph.interface';
import styles from './Paragraph.module.css';

const Paragraph: FC<IParagraph> = ({
	size = 'small',
	children,
	className,
	...rest
}) => {
	return (
		<p
			className={cn(styles.paragraph, className, {
				[styles.small]: size === 'small',
				[styles.medium]: size === 'medium',
				[styles.large]: size === 'large',
			})}
			{...rest}
		>
			{children}
		</p>
	);
};

export default Paragraph;
