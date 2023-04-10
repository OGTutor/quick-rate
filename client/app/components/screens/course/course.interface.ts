import { IMenu } from '@/shared/interfaces/menu.interface';
import { IPage } from '@/shared/interfaces/page.interface';
import { IProduct } from '@/shared/interfaces/product.interface';

export interface ICoursePage {
	menu: IMenu[];
	firstCategory: number;
	page: IPage;
	products: IProduct[];
}
