import { FC } from 'react';

import { IHeader } from './Header.interface';

const Header: FC<IHeader> = ({ ...rest }) => {
	return <div {...rest}>Header</div>;
};

export default Header;
