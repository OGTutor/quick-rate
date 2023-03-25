import cn from 'classnames';
import { FC, KeyboardEvent, useEffect, useState } from 'react';

import StarIcon from '@/assets/images/star.svg';

import { IRating } from './Rating.interface';
import styles from './Rating.module.css';

const Rating: FC<IRating> = ({
	rating,
	setRating,
	isEditable = false,
	...rest
}) => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
		new Array(5).fill(<></>)
	);

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedRating = ratingArray.map((rate: JSX.Element, idx) => {
			return (
				<span
					className={cn(styles.star, {
						[styles.filled]: idx < currentRating,
						[styles.editable]: isEditable,
					})}
					onMouseEnter={() => changeDisplay(idx + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => changeRating(idx + 1)}
				>
					<StarIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
							isEditable && handleSpace(idx + 1, e)
						}
					/>
				</span>
			);
		});
		setRatingArray(updatedRating);
	};

	const changeDisplay = (index: number) => {
		if (!isEditable) return;

		constructRating(index);
	};

	const changeRating = (index: number) => {
		if (!isEditable || !setRating) return;

		setRating(index);
	};

	const handleSpace = (index: number, event: KeyboardEvent<SVGAElement>) => {
		if (event.code !== 'Space' || !setRating) return;

		setRating(index);
	};

	return (
		<div {...rest}>
			{ratingArray.map((rating, idx) => (
				<span key={idx}>{rating}</span>
			))}
		</div>
	);
};

export default Rating;
