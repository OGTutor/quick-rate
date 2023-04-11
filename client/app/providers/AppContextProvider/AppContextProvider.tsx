import { AppContext } from 'context/app.context';
import { IAppContext } from 'context/context.interface';
import { FC, PropsWithChildren, useState } from 'react';

import { IMenu } from '@/shared/interfaces/menu.interface';

export const AppContextProvider: FC<PropsWithChildren<IAppContext>> = ({
	menu,
	firstCategory,
	children,
}) => {
	const [menuState, setMenuState] = useState<IMenu[]>(menu);

	const setMenu = (newMenu: IMenu[]) => {
		setMenuState(newMenu);
	};

	return (
		<AppContext.Provider
			value={{ menu: menuState, firstCategory, setMenu }}
		>
			{children}
		</AppContext.Provider>
	);
};
