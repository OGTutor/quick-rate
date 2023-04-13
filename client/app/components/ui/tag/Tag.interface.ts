import { HTMLAttributes } from 'react';

export interface ITag extends HTMLAttributes<HTMLDivElement> {
	size?: 'small' | 'medium';
	text: string | number;
	color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
	href?: string;
}
