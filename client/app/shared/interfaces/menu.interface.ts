export interface IPageItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
}

export interface IMenu {
	_id: { secondCategory: string };
	pages: IPageItem[];
}
