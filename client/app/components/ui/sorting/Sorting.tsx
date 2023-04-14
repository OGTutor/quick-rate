import cn from 'classnames';
import { FC } from 'react';

import SortIcon from '@/assets/images/sort.svg';

import { ISorting, SortEnum } from './Sorting.interface';
import styles from './Sorting.module.css';

const Sorting: FC<ISorting> = ({ sort, setSort, className, ...rest }) => {
	return (
		<div className={cn(styles.sort, className)} {...rest}>
			<span
				onClick={() => setSort(SortEnum.Rating)}
				className={cn({ [styles.active]: sort === SortEnum.Rating })}
			>
				<SortIcon className={styles.sortIcon} />
				By rating
			</span>
			<span
				onClick={() => setSort(SortEnum.Price)}
				className={cn({ [styles.active]: sort === SortEnum.Price })}
			>
				<SortIcon className={styles.sortIcon} />
				By price
			</span>
		</div>
	);
};

export default Sorting;
