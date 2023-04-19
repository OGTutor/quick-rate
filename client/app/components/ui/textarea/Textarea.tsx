import cn from 'classnames';
import { FC } from 'react';

import { ITextarea } from './Textarea.interface';
import styles from './Textarea.module.css';

const Textarea: FC<ITextarea> = ({ className, ...rest }) => {
	return <textarea className={cn(className, styles.textarea)} {...rest} />;
};

export default Textarea;
