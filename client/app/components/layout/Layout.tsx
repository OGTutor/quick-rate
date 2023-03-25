import { FC, PropsWithChildren } from 'react';

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

export default Layout;
