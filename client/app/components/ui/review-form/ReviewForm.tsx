import cn from 'classnames';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

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
	const { register, control, handleSubmit } = useForm<IReviewForm>();

	const onSubmit: SubmitHandler<IReviewForm> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...rest}>
				<Input {...register('name')} placeholder="Name" />
				<Input
					{...register('title')}
					placeholder="Review title"
					className={styles.title}
				/>
				<div className={styles.rating}>
					<span>Rate:</span>
					<Controller
						control={control}
						name="rating"
						render={({ field }) => (
							<Rating
								isEditable
								rating={field.value}
								ref={field.ref}
								setRating={field.onChange}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description')}
					placeholder="Review text"
					className={styles.description}
				/>
				<div className={styles.submit}>
					<Button appearance="primary">Submit</Button>
					<span className={styles.info}>
						* Before publication, your review will be pre-moderated
						and checked.
					</span>
				</div>
			</div>
			<div className={styles.success}>
				<div className={styles.successTitle}>
					Your review has been sent
				</div>
				<div>
					Thank you your review will be published after verification
				</div>
				<CloseIcon className={styles.close} />
			</div>
		</form>
	);
};

export default ReviewForm;
