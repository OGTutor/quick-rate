import { IAppContext } from 'context/context.interface';
import { NextPage } from 'next';
import { AppContextProvider } from 'providers/AppContextProvider/AppContextProvider';
import { FC, PropsWithChildren } from 'react';

import { ICoursePage } from '../screens/course/course.interface';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './Layout.module.css';
import Sidebar from './Sidebar/Sidebar';

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer} />
		</div>
	);
};

export const withLayout = <T extends NextPage & IAppContext & ICoursePage>(
	Component: FC<T>
) => {
	return function withLayoutComponent(props: T) {
		return (
			<AppContextProvider
				menu={props.menu}
				firstCategory={props.firstCategory}
			>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		);
	};
};
