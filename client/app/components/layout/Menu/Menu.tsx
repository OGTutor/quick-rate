import cn from 'classnames';
import { AppContext } from 'context/app.context';
import { FC, useContext } from 'react';

import { IFirstLevelMenu } from '@/shared/interfaces/menu.interface';
import { TopLevelCategory } from '@/shared/interfaces/page.interface';

import BooksIcon from '@/assets/images/MenuIcons/books.svg';
import CoursesIcon from '@/assets/images/MenuIcons/courses.svg';
import ProductsIcon from '@/assets/images/MenuIcons/products.svg';
import ServicesIcon from '@/assets/images/MenuIcons/services.svg';

import styles from './Menu.module.css';

const firstLevelMenu: IFirstLevelMenu[] = [
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

const Menu: FC = () => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	return (
		<nav className={styles.menu}>
			{firstLevelMenu.map((menuFirst) => (
				<div key={menuFirst.route}>
					<a href={`/${menuFirst.route}`}>
						<div
							className={cn(styles.firstLevel, {
								[styles.firstLevelActive]:
									menuFirst.id === firstCategory,
							})}
						>
							{menuFirst.icon}
							<span>{menuFirst.name}</span>
						</div>
					</a>
					{menuFirst.id === firstCategory && (
						<div className={styles.secondBlock}>
							{menu.map((menuSecond) => (
								<div key={menuSecond._id.secondCategory}>
									<div className={styles.secondLevel}>
										{menuSecond._id.secondCategory}
										<div
											className={cn(
												styles.secondLevelBlock,
												{
													[styles.secondLevelBlockOpened]:
														menuSecond.isOpened,
												}
											)}
										>
											{menuSecond.pages.map((page) => (
												<a
													href={`/${menuFirst.route}/${page.alias}`}
													className={cn(
														styles.thirdLevel,
														{
															[styles.thirdLevelActive]:
																false,
														}
													)}
													key={page._id}
												>
													{page.category}
												</a>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			))}
		</nav>
	);
};

export default Menu;
