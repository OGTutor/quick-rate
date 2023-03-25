import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import { ITag } from './Tag.interface';
import styles from './Tag.module.css';

const Tag: FC<ITag> = ({
	text,
	size = 'small',
	color = 'ghost',
	href,
	className,
	...rest
}) => {
	return (
		<div
			className={cn(styles.tag, className, {
				[styles.small]: size === 'small',
				[styles.medium]: size === 'medium',
				[styles.ghost]: color === 'ghost',
				[styles.red]: color === 'red',
				[styles.gray]: color === 'gray',
				[styles.green]: color === 'green',
				[styles.primary]: color === 'primary',
			})}
			{...rest}
		>
			{href ? <Link href={href}>{text}</Link> : <>{text}</>}
		</div>
	);
};

export default Tag;
