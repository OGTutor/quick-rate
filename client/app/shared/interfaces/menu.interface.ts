import { TopLevelCategory } from './page.interface';

export interface IPageItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
}

export interface IMenu {
	_id: { secondCategory: string };
	isOpened?: boolean;
	pages: IPageItem[];
}

export interface IFirstLevelMenu {
	route: string;
	name: string;
	icon: JSX.Element;
	id: TopLevelCategory;
}
