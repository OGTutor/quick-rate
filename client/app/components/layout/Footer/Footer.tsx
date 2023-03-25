import cn from 'classnames';
import { format } from 'date-fns';
import { FC } from 'react';

import { IFooter } from './Footer.interface';
import styles from './Footer.module.css';

const Footer: FC<IFooter> = ({ className, ...rest }) => {
	return (
		<footer className={cn(className, styles.footer)} {...rest}>
			<div>
				QRate © 2021 - {format(new Date(), 'yyyy')} All rights reserved
			</div>
			<a href="#" target="_blank">
				Terms of use
			</a>
			<a href="#" target="_blank">
				Privacy Policy
			</a>
		</footer>
	);
};

export default Footer;
