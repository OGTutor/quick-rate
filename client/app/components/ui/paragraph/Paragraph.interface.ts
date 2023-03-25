import { HTMLAttributes } from 'react';

export interface IParagraph extends HTMLAttributes<HTMLParagraphElement> {
	size?: 'small' | 'medium' | 'large';
}
