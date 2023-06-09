import { IFirstLevelMenu } from '@/shared/interfaces/menu.interface';
import { TopLevelCategory } from '@/shared/interfaces/page.interface';

import BooksIcon from '@/assets/images/MenuIcons/books.svg';
import CoursesIcon from '@/assets/images/MenuIcons/courses.svg';
import ProductsIcon from '@/assets/images/MenuIcons/products.svg';
import ServicesIcon from '@/assets/images/MenuIcons/services.svg';

export const firstLevelMenu: IFirstLevelMenu[] = [
	{
		route: 'courses',
		name: 'Courses',
		icon: <CoursesIcon />,
		id: TopLevelCategory.Courses,
	},
	{
		route: 'services',
		name: 'Services',
		icon: <ServicesIcon />,
		id: TopLevelCategory.Services,
	},
	{
		route: 'books',
		name: 'Books',
		icon: <BooksIcon />,
		id: TopLevelCategory.Books,
	},
	{
		route: 'products',
		name: 'Products',
		icon: <ProductsIcon />,
		id: TopLevelCategory.Products,
	},
];

export const priceEn = (price: number | undefined) =>
	price
		?.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		.concat(' $');

export const declOfNum = (number: number, titles: [string, string]) => {
	return titles[number > 1 ? 0 : number === 1 ? 1 : 0];
};
