import cn from 'classnames';
import { AppContext } from 'context/app.context';
import { firstLevelMenu } from 'helpers/helpers';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useContext } from 'react';

import styles from './Menu.module.css';

const Menu: FC = () => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();

	const openSecondLevel = (secondCategory: string) => {
		setMenu &&
			setMenu(
				menu.map((m) => {
					if (m._id.secondCategory === secondCategory) {
						m.isOpened = !m.isOpened;
					}
					return m;
				})
			);
	};

	return (
		<nav className={styles.menu}>
			{/* FirstLevelMenu */}
			{firstLevelMenu.map((menuFirst) => (
				<div key={menuFirst.route}>
					<Link href={`/${menuFirst.route}`}>
						<div
							className={cn(styles.firstLevel, {
								[styles.firstLevelActive]:
									menuFirst.id === firstCategory,
							})}
						>
							{menuFirst.icon}
							<span>{menuFirst.name}</span>
						</div>
					</Link>
					{menuFirst.id === firstCategory && (
						// SecondLevelMenu
						<div className={styles.secondBlock}>
							{menu.map((menuSecond) => {
								if (
									menuSecond.pages
										.map((page) => page.alias)
										.includes(router.asPath.split('/')[2])
								) {
									menuSecond.isOpened = true;
								}
								return (
									<div key={menuSecond._id.secondCategory}>
										<div
											className={styles.secondLevel}
											onClick={() =>
												openSecondLevel(
													menuSecond._id
														.secondCategory
												)
											}
										>
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
												{/* ThirdLevelMenu */}
												{menuSecond.pages.map(
													(page) => (
														<Link
															href={`/${menuFirst.route}/${page.alias}`}
															className={cn(
																styles.thirdLevel,
																{
																	[styles.thirdLevelActive]:
																		`/${menuFirst.route}/${page.alias}` ===
																		router.asPath,
																}
															)}
															key={page._id}
														>
															{page.category}
														</Link>
													)
												)}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					)}
				</div>
			))}
		</nav>
	);
};

export default Menu;
