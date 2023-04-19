import cn from 'classnames';
import { FC } from 'react';

import Search from '@/components/ui/search/Search';

import Logo from '@/assets/images/logo.svg';

import Menu from '../Menu/Menu';

import { ISidebar } from './Sidebar.interface';
import styles from './Sidebar.module.css';

const Sidebar: FC<ISidebar> = ({ className, ...rest }) => {
	return (
		<div className={cn(className, styles.sidebar)} {...rest}>
			<Logo />
			<Search />
			<Menu />
		</div>
	);
};

export default Sidebar;
