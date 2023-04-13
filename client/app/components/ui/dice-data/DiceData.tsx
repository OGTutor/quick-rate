import { priceEn } from 'helpers/helpers';
import { FC } from 'react';

import RateIcon from '@/assets/images/rate.svg';

import Card from '../card/Card';

import { IDiceData } from './DiceData.interface';
import styles from './DiceData.module.css';

const DiceData: FC<IDiceData> = ({
	count,
	juniorSalary,
	middleSalary,
	seniorSalary,
}) => {
	return (
		<div className={styles.dice}>
			<Card className={styles.count}>
				<div className={styles.title}>Total vacancies</div>
				<div className={styles.countValue}>{count}</div>
			</Card>
			<Card className={styles.salary}>
				<div>
					<div className={styles.title}>
						Elementary / <span>Junior</span>
					</div>
					<div className={styles.salaryValue}>
						{priceEn(juniorSalary)}
					</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon />
						<RateIcon />
					</div>
				</div>
				<div>
					<div className={styles.title}>
						Medium / <span>Middle</span>
					</div>
					<div className={styles.salaryValue}>
						{priceEn(middleSalary)}
					</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon />
					</div>
				</div>
				<div>
					<div className={styles.title}>
						Professional / <span>Senior</span>
					</div>
					<div className={styles.salaryValue}>
						{priceEn(seniorSalary)}
					</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
					</div>
				</div>
			</Card>
		</div>
	);
};

export default DiceData;
