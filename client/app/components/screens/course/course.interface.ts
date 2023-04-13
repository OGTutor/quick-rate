import { IMenu } from '@/shared/interfaces/menu.interface';
import { IPage, TopLevelCategory } from '@/shared/interfaces/page.interface';
import { IProduct } from '@/shared/interfaces/product.interface';

export interface ICoursePage extends Record<string, unknown> {
	menu: IMenu[];
	firstCategory: TopLevelCategory;
	page: IPage;
	products: IProduct[];
}
