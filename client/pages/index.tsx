import { GetStaticProps, NextPage } from 'next';

import { withLayout } from '@/components/layout/Layout';
import Home from '@/components/screens/home/Home';
import { IHome } from '@/components/screens/home/home.interface';

import { TopPageService } from '@/services/top-page/top-page.service';

const HomePage: NextPage<IHome> = ({ menu, firstCategory }) => {
	return <Home menu={menu} firstCategory={firstCategory} />;
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { menu, firstCategory } = await TopPageService.getMenu();

		return {
			props: {
				menu,
				firstCategory,
			} as IHome,
		};
	} catch (error) {
		return {
			props: {
				menu: [],
				firstCategory: 0,
			},
		};
	}
};

export default withLayout(HomePage);
