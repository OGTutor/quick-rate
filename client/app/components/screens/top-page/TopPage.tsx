import { FC, useReducer } from 'react';

import Advantages from '@/components/ui/advantages/Advantages';
import DiceData from '@/components/ui/dice-data/DiceData';
import Heading from '@/components/ui/heading/Heading';
import Sorting from '@/components/ui/sorting/Sorting';
import { SortEnum } from '@/components/ui/sorting/Sorting.interface';
import Tag from '@/components/ui/tag/Tag';

import { TopLevelCategory } from '@/shared/interfaces/page.interface';

import { ITopPageComponent } from './TopPage.interface';
import styles from './TopPage.module.css';
import { sortReducer } from './sort.reducer';

const TopPageComponent: FC<ITopPageComponent> = ({
	firstCategory,
	page,
	products,
}) => {
	const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
		sortReducer,
		{ products, sort: SortEnum.Rating }
	);

	const setSort = (sort: SortEnum) => {
		dispatchSort({ type: sort });
	};

	return (
		<div>
			<div className={styles.title}>
				<Heading tag="h1" title={page.title} />
				{products && (
					<Tag color="gray" size="medium" text={products.length} />
				)}
				<Sorting sort={sort} setSort={setSort} />
			</div>
			<div>
				{sortedProducts &&
					sortedProducts.map((product) => (
						<div key={product._id}>{product.title}</div>
					))}
			</div>
			<div className={styles.diceTitle}>
				<Heading tag="h2" title={`Vacancies - ${page.category}`} />
				<Tag color="red" size="medium" text="dice.com" />
			</div>
			{firstCategory === TopLevelCategory.Courses && page.dice && (
				<DiceData {...page.dice} />
			)}
			{page.advantages && page.advantages.length > 0 && (
				<>
					<Heading tag="h2" title="Advantages" />
					<Advantages advantages={page.advantages} />
				</>
			)}
			{page.seoText && <div className={styles.seo}>{page.seoText}</div>}
			<Heading tag="h2" title="Received skills" />
			{page.tags.map((tag) => (
				<Tag key={tag} color="primary" size="medium" text={tag} />
			))}
		</div>
	);
};

export default TopPageComponent;
