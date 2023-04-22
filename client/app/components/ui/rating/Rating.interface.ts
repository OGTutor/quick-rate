import { HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface IRating extends HTMLAttributes<HTMLDivElement> {
	isEditable?: boolean;
	error?: FieldError;
	rating: number;
	setRating?: (rating: number) => void;
}
