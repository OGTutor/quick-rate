import { HTMLAttributes } from 'react';

export interface IReviewFormProps extends HTMLAttributes<HTMLDivElement> {
	productId: string;
}

export interface IReviewForm {
	name: string;
	title: string;
	description: string;
	rating: number;
}
