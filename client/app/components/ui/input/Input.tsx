import cn from 'classnames';
import { FC } from 'react';

import { IInput } from './Input.interface';
import styles from './Input.module.css';

const Input: FC<IInput> = ({ className, ...rest }) => {
	return <input className={cn(className, styles.input)} {...rest} />;
};

export default Input;
