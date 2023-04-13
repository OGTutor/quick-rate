import { IPage, TopLevelCategory } from '@/shared/interfaces/page.interface';
import { IProduct } from '@/shared/interfaces/product.interface';

export interface ITopPageComponent {
	firstCategory: TopLevelCategory;
	page: IPage;
	products: IProduct[];
}
