import { HTMLAttributes } from 'react';

export interface ICard extends HTMLAttributes<HTMLDivElement> {
	color?: 'white' | 'blue';
}
