import axios from 'api/interceptors';

import { IReviewForm } from '@/components/ui/review-form/ReviewForm.interface';

import { IReviewSentResponse } from '@/shared/interfaces/review.interface';

import { getCreateReviewUrl } from '@/config/api.config';

export const ReviewService = {
	async create(reviewData: IReviewForm, productId: string) {
		const { data: review } = await axios.post<IReviewSentResponse>(
			getCreateReviewUrl(),
			{
				...reviewData,
				productId,
			}
		);
		return review;
	},
};
