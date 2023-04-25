import cn from 'classnames';
import { AppContext } from 'context/app.context';
import { motion } from 'framer-motion';
import { firstLevelMenu } from 'helpers/helpers';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useContext } from 'react';

import styles from './Menu.module.css';

const Menu: FC = () => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();

	const variants = {
		visible: {
			marginBottom: 20,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1,
			},
		},
		hidden: { marginBottom: 0 },
	};

	const variantsChildren = {
		visible: {
			opacity: 1,
			height: 29,
		},
		hidden: { opacity: 0, height: 0 },
	};

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
											<motion.div
												layout
												variants={variants}
												initial={
													menuSecond.isOpened
														? 'visible'
														: 'hidden'
												}
												animate={
													menuSecond.isOpened
														? 'visible'
														: 'hidden'
												}
												className={cn(
													styles.secondLevelBlock
												)}
											>
												{/* ThirdLevelMenu */}
												{menuSecond.pages.map(
													(page) => (
														<motion.div
															variants={
																variantsChildren
															}
															key={page._id}
														>
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
															>
																{page.category}
															</Link>
														</motion.div>
													)
												)}
											</motion.div>
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
