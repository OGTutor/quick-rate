import cn from 'classnames';
import { FC, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { ReviewService } from '@/services/review/review.service';

import CloseIcon from '@/assets/images/close.svg';

import Button from '../button/Button';
import Input from '../input/Input';
import Rating from '../rating/Rating';
import Textarea from '../textarea/Textarea';

import { IReviewForm, IReviewFormProps } from './ReviewForm.interface';
import styles from './ReviewForm.module.css';

const ReviewForm: FC<IReviewFormProps> = ({
	className,
	productId,
	...rest
}) => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState('');

	const onSubmit: SubmitHandler<IReviewForm> = async (data: IReviewForm) => {
		try {
			const review = await ReviewService.create(data, productId);
			if (review._id) {
				setIsSuccess(true);
				reset();
			}
		} catch (error) {
			setError('Something went wrong, try refreshing the page');
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...rest}>
				<Input
					{...register('name', {
						required: { value: true, message: 'Name is required' },
					})}
					placeholder="Name"
					typeOfInput="default"
					error={errors.name}
				/>
				<Input
					{...register('title', {
						required: { value: true, message: 'Title is required' },
					})}
					placeholder="Review title"
					typeOfInput="default"
					className={styles.title}
					error={errors.title}
				/>
				<div className={styles.rating}>
					<span>Rate:</span>
					<Controller
						control={control}
						name="rating"
						rules={{
							required: {
								value: true,
								message: 'Rating is required',
							},
						}}
						render={({ field }) => (
							<Rating
								isEditable
								rating={field.value}
								ref={field.ref}
								setRating={field.onChange}
								error={errors.rating}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description', {
						required: {
							value: true,
							message: 'Review text is required',
						},
					})}
					placeholder="Review text"
					className={styles.description}
					error={errors.description}
				/>
				<div className={styles.submit}>
					<Button appearance="primary">Submit</Button>
					<span className={styles.info}>
						* Before publication, your review will be pre-moderated
						and checked.
					</span>
				</div>
			</div>
			{isSuccess && (
				<div className={cn(styles.success, styles.panel)}>
					<div className={styles.successTitle}>
						Your review has been sent
					</div>
					<div>
						Thank you! Your review will be published after
						verification!
					</div>
					<CloseIcon
						className={styles.close}
						onClick={() => setIsSuccess(false)}
					/>
				</div>
			)}
			{error && (
				<div className={cn(styles.error, styles.panel)}>
					{error}
					<CloseIcon
						className={styles.close}
						onClick={() => setError('')}
					/>
				</div>
			)}
		</form>
	);
};

export default ReviewForm;
