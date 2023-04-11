import { createContext } from 'react';

import { TopLevelCategory } from '@/shared/interfaces/page.interface';

import { IAppContext } from './context.interface';

export const AppContext = createContext<IAppContext>({
	menu: [],
	firstCategory: TopLevelCategory.Courses,
});
