import { firstLevelMenu } from 'helpers/helpers';
import { GetStaticProps, NextPage } from 'next';

import { withLayout } from '@/components/layout/Layout';
import Home from '@/components/screens/home/Home';
import { IHome } from '@/components/screens/home/home.interface';

import { TopPageService } from '@/services/top-page/top-page.service';

const HomePage: NextPage<IHome> = ({ menu, firstCategory }) => {
	return <Home menu={menu} firstCategory={firstCategory} />;
};

export default withLayout(HomePage);

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const firstCategoryItem = firstLevelMenu.find(
			(menu) => menu.route === params?.type
		);
		const { menu } = await TopPageService.getMenu(firstCategoryItem?.id);

		return {
			props: {
				menu,
				firstCategory: firstCategoryItem?.id,
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
