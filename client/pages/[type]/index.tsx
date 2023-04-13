import { firstLevelMenu } from 'helpers/helpers';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { withLayout } from '@/components/layout/Layout';

import { ITypePage } from '@/shared/interfaces/type.interface';

import { TopPageService } from '@/services/top-page/top-page.service';

const TypePage: NextPage<ITypePage> = ({ firstCategory, menu }) => {
	return <div>Type: {firstCategory}</div>;
};

export default withLayout(TypePage);

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		return {
			paths: firstLevelMenu.map((m) => `/${m.route}`),
			fallback: 'blocking',
		};
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		};
	}
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const firstCategoryItem = firstLevelMenu.find(
			(menu) => menu.route === params?.type
		);
		const { menu } = await TopPageService.getMenu(firstCategoryItem?.id);
		if (menu.length === 0) {
			return {
				notFound: true,
			};
		}

		return {
			props: {
				menu,
				firstCategory: firstCategoryItem?.id,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};
