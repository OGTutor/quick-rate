import { FC } from 'react';

import DiceData from '@/components/ui/dice-data/DiceData';
import Heading from '@/components/ui/heading/Heading';
import Tag from '@/components/ui/tag/Tag';

import { TopLevelCategory } from '@/shared/interfaces/page.interface';

import { ITopPageComponent } from './TopPage.interface';
import styles from './TopPage.module.css';

const TopPageComponent: FC<ITopPageComponent> = ({
	firstCategory,
	page,
	products,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Heading tag="h1" title={page.title} />
				{products && (
					<Tag color="gray" size="medium" text={products.length} />
				)}
				<span>Sorting</span>
			</div>
			<div>
				{products &&
					products.map((product) => (
						<div key={product._id}>{product.title}</div>
					))}
			</div>
			<div className={styles.diceTitle}>
				<Heading tag="h2" title={`Vacancies - ${page.category}`} />
				<Tag color="red" size="medium" text="dice.com" />
			</div>
			{firstCategory === TopLevelCategory.Courses && (
				<DiceData {...page.dice} />
			)}
		</div>
	);
};

export default TopPageComponent;
