import { HTMLAttributes } from 'react';

import { Review } from '@/shared/interfaces/product.interface';

export interface IReview extends HTMLAttributes<HTMLDivElement> {
	review: Review;
}
