import cn from 'classnames';
import { format } from 'date-fns';
import en from 'date-fns/locale/en-US';
import { FC } from 'react';

import UserIcon from '@/assets/images/user.svg';

import Rating from '../rating/Rating';

import { IReview } from './Review.interface';
import styles from './Review.module.css';

const Review: FC<IReview> = ({ review, className, ...rest }) => {
	const { description, name, rating, title, createdAt } = review;

	return (
		<div className={cn(styles.review, className)} {...rest}>
			<UserIcon className={styles.user} />
			<div className={styles.title}>
				<span className={styles.name}>{name}:</span>&nbsp;&nbsp;
				<span>{title}</span>
			</div>
			<div className={styles.date}>
				{format(new Date(createdAt), 'dd MMMM yyyy', { locale: en })}
			</div>
			<div className={styles.rating}>
				<Rating rating={rating} />
			</div>
			<div className={styles.description}>{description}</div>
		</div>
	);
};

export default Review;
