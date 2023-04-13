import { firstLevelMenu } from 'helpers/helpers';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { withLayout } from '@/components/layout/Layout';
import Course from '@/components/screens/course/Course';
import { ICoursePage } from '@/components/screens/course/course.interface';

import { ProductService } from '@/services/product/product.service';
import { TopPageService } from '@/services/top-page/top-page.service';

const CoursePage: NextPage<ICoursePage> = ({
	firstCategory,
	menu,
	page,
	products,
}) => {
	return (
		<Course
			firstCategory={firstCategory}
			menu={menu}
			page={page}
			products={products}
		/>
	);
};

export default withLayout(CoursePage);

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		let paths: string[] = [];

		for (const m of firstLevelMenu) {
			const { menu } = await TopPageService.getMenu(m.id);
			paths = paths.concat(
				menu.flatMap((s) =>
					s.pages.map((p) => `/${m.route}/${p.alias}`)
				)
			);
		}

		return {
			paths,
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
		const { page } = await TopPageService.getPage(String(params?.alias));
		const { products } = await ProductService.find(page.category);

		return {
			props: {
				menu,
				firstCategory: firstCategoryItem?.id,
				page,
				products,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};
