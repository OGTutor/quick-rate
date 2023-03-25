import { HTMLAttributes } from 'react';

export interface IRating extends HTMLAttributes<HTMLDivElement> {
	isEditable?: boolean;
	rating: number;
	setRating?: (rating: number) => void;
}
