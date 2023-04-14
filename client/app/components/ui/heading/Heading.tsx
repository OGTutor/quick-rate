import cn from 'classnames';
import { FC } from 'react';

import { IHeading } from './Heading.interface';
import styles from './Heading.module.css';

const Heading: FC<IHeading> = ({ tag, title, className }) => {
	return (
		<>
			{tag === 'h1' && (
				<h1 className={cn(styles.h1, className)}>{title}</h1>
			)}
			{tag === 'h2' && (
				<h2 className={cn(styles.h2, className)}>{title}</h2>
			)}
			{tag === 'h3' && (
				<h3 className={cn(styles.h3, className)}>{title}</h3>
			)}
		</>
	);
};

export default Heading;
