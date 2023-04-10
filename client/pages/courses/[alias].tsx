import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

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

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { menu, firstCategory } = await TopPageService.getMenu();
		const paths = menu.flatMap((m) =>
			m.pages.map((p) => '/courses/' + p.alias)
		);

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
		const { menu, firstCategory } = await TopPageService.getMenu();
		const { page } = await TopPageService.getPage(String(params?.alias));
		const { products } = await ProductService.find(page.category);

		return {
			props: { menu, firstCategory, page, products },
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default CoursePage;
