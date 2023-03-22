import { ButtonHTMLAttributes } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	appearance: 'primary' | 'ghost';
	arrow?: 'right' | 'down' | 'none';
}
