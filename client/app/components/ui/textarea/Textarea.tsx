import cn from 'classnames';
import { forwardRef } from 'react';

import { ITextarea } from './Textarea.interface';
import styles from './Textarea.module.css';

const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
	({ className, error, ...rest }, ref) => {
		return (
			<div className={cn(styles.textareaWrapper, className)}>
				<textarea
					className={cn(styles.textarea, {
						[styles.error]: error,
					})}
					ref={ref}
					{...rest}
				/>
				{error && (
					<span className={styles.errorMessage}>{error.message}</span>
				)}
			</div>
		);
	}
);

export default Textarea;
