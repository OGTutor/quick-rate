import { FC } from 'react';

import { ISidebar } from './Sidebar.interface';

const Sidebar: FC<ISidebar> = ({ ...rest }) => {
	return <div {...rest}>Sidebar</div>;
};

export default Sidebar;
