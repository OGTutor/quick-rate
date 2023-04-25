import cn from 'classnames';
import { motion } from 'framer-motion';
import { declOfNum, priceEn } from 'helpers/helpers';
import Image from 'next/image';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';

import Button from '../button/Button';
import Card from '../card/Card';
import Divider from '../divider/Divider';
import Rating from '../rating/Rating';
import ReviewForm from '../review-form/ReviewForm';
import Review from '../review/Review';
import Tag from '../tag/Tag';

import { IProductCard } from './Product.interface';
import styles from './Product.module.css';

const Product = motion<IProductCard>(
	forwardRef(
		(
			{ className, product, ...rest },
			ref: ForwardedRef<HTMLDivElement>
		) => {
			const [isReviewOpened, setIsReviewOpened] = useState(false);
			const reviewRef = useRef<null | HTMLDivElement>(null);

			const scrollToReview = () => {
				setIsReviewOpened(true);
				reviewRef.current?.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			};

			return (
				<div className={className} {...rest} ref={ref}>
					<Card className={styles.product}>
						<div className={styles.logo}>
							<Image
								src={product.image}
								alt={product.title}
								width={70}
								height={70}
							/>
						</div>
						<div className={styles.title}>{product.title}</div>
						<div className={styles.price}>
							{priceEn(product.price)}
							{product.oldPrice && (
								<Tag className={styles.oldPrice} color="green">
									{priceEn(product.price - product.oldPrice)}
								</Tag>
							)}
						</div>
						<div className={styles.credit}>
							{priceEn(product.credit)}
							<span className={styles.month}>/mo.</span>
						</div>
						<div className={styles.rating}>
							<Rating
								rating={
									product.reviewAvg ?? product.initialRating
								}
							/>
						</div>
						<div className={styles.tags}>
							{product.categories.map((category) => (
								<Tag
									key={category}
									className={styles.category}
									color="ghost"
									text={category}
								/>
							))}
						</div>
						<div className={styles.priceTitle}>price</div>
						<div className={styles.creditTitle}>credit</div>
						<div className={styles.ratingTitle}>
							<a href="#ref" onClick={scrollToReview}>
								{product.reviewCount}
								{declOfNum(product.reviewCount, [
									' reviews',
									' review',
								])}
							</a>
						</div>
						<Divider className={styles.hr} />
						<div className={styles.description}>
							{product.description}
						</div>
						<div className={styles.feature}>
							{product.characteristics.map((characteristic) => (
								<div
									className={styles.characteristics}
									key={characteristic.name}
								>
									<span
										className={styles.characteristicsName}
									>
										{characteristic.name}
									</span>
									<span
										className={styles.characteristicsDots}
									></span>
									<span
										className={styles.characteristicsValue}
									>
										{characteristic.value}
									</span>
								</div>
							))}
						</div>
						<div className={styles.advBlock}>
							{product.advantages && (
								<div className={styles.advantages}>
									<div className={styles.advTitle}>
										Advantages
									</div>
									{product.advantages}
								</div>
							)}
							{product.disadvantages && (
								<div className={styles.disadvantages}>
									<div className={styles.advTitle}>
										Disadvantages
									</div>
									{product.disadvantages}
								</div>
							)}
						</div>
						<Divider className={cn(styles.hr, styles.hr2)} />
						<div className={styles.actions}>
							<Button appearance="primary">Learn more</Button>
							<Button
								appearance="ghost"
								arrow={isReviewOpened ? 'down' : 'right'}
								className={styles.reviewButton}
								onClick={() =>
									setIsReviewOpened(!isReviewOpened)
								}
							>
								{product.reviews.length > 0
									? 'Read reviews'
									: 'Add review'}
							</Button>
						</div>
					</Card>
					<Card
						color="blue"
						className={cn(styles.reviews, {
							[styles.opened]: isReviewOpened,
							[styles.closed]: !isReviewOpened,
						})}
						ref={reviewRef}
					>
						{product.reviews.map((review) => (
							<div key={review._id}>
								<Review review={review} />
								<Divider />
							</div>
						))}
						<ReviewForm productId={product._id} />
					</Card>
				</div>
			);
		}
	)
);

export default Product;
