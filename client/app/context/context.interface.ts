import { IMenu } from '@/shared/interfaces/menu.interface';
import { TopLevelCategory } from '@/shared/interfaces/page.interface';

export interface IAppContext {
	menu: IMenu[];
	firstCategory: TopLevelCategory;
	setMenu?: (newMenu: IMenu[]) => void;
}
