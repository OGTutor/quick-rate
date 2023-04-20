import cn from 'classnames';
import { FC } from 'react';

import { IDivider } from './Divider.interface';
import styles from './Divider.module.css';

const Divider: FC<IDivider> = ({ className, ...rest }) => {
	return <hr className={cn(className, styles.hr)} {...rest} />;
};

export default Divider;
