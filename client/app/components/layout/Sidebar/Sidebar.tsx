import { FC } from 'react';

import Menu from '../Menu/Menu';

import { ISidebar } from './Sidebar.interface';

const Sidebar: FC<ISidebar> = ({ ...rest }) => {
	return (
		<div {...rest}>
			<Menu />
		</div>
	);
};

export default Sidebar;
