import { FC } from 'react';

import { IHeading } from './Heading.interface';
import styles from './Heading.module.css';

const Heading: FC<IHeading> = ({ tag, title }) => {
	return (
		<>
			{tag === 'h1' && <h1 className={styles.h1}>{title}</h1>}
			{tag === 'h2' && <h2 className={styles.h2}>{title}</h2>}
			{tag === 'h3' && <h3 className={styles.h3}>{title}</h3>}
		</>
	);
};

export default Heading;
