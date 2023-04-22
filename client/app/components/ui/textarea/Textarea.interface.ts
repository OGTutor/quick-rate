import { TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: FieldError;
}
