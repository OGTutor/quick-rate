import cn from 'classnames';
import { forwardRef } from 'react';

import { IInput } from './Input.interface';
import styles from './Input.module.css';

const Input = forwardRef<HTMLInputElement, IInput>(
	({ className, type = 'text', ...rest }, ref) => {
		return (
			<input
				className={cn(className, styles.input)}
				type={type}
				ref={ref}
				{...rest}
			/>
		);
	}
);

export default Input;
