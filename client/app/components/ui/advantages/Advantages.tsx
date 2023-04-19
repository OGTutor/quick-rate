import { FC } from 'react';

import CheckIcon from '@/assets/images/check.svg';

import { IAdvantages } from './Advantages.interface';
import styles from './Advantages.module.css';

const Advantages: FC<IAdvantages> = ({ advantages }) => {
	return (
		<>
			{advantages.map((advantage) => (
				<div key={advantage.title} className={styles.advantage}>
					<CheckIcon />
					<div className={styles.title}>{advantage.title}</div>
					<hr className={styles.verticalLine} />
					<div>{advantage.description}</div>
				</div>
			))}
		</>
	);
};

export default Advantages;
