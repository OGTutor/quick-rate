import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	error?: FieldError;
	typeOfInput: 'search' | 'default';
}
