import cn from 'classnames';
import { forwardRef } from 'react';

import { IInput } from './Input.interface';
import styles from './Input.module.css';

const Input = forwardRef<HTMLInputElement, IInput>(
	({ className, type = 'text', typeOfInput, error, ...rest }, ref) => {
		if (typeOfInput === 'search') {
			return (
				<input
					className={cn(styles.input)}
					type={type}
					ref={ref}
					{...rest}
				/>
			);
		} else {
			return (
				<div className={cn(styles.inputWrapper, className)}>
					<input
						className={cn(styles.input, {
							[styles.error]: error,
						})}
						type={type}
						ref={ref}
						{...rest}
					/>
					{error && (
						<span className={styles.errorMessage}>
							{error.message}
						</span>
					)}
				</div>
			);
		}
	}
);

export default Input;
