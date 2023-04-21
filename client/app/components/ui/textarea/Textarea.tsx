import cn from 'classnames';
import { forwardRef } from 'react';

import { ITextarea } from './Textarea.interface';
import styles from './Textarea.module.css';

const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
	({ className, ...rest }, ref) => {
		return (
			<textarea
				className={cn(className, styles.textarea)}
				ref={ref}
				{...rest}
			/>
		);
	}
);

export default Textarea;
