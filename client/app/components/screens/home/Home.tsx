import { FC, useState } from 'react';

import Button from '@/components/ui/button/Button';
import Heading from '@/components/ui/heading/Heading';
import Input from '@/components/ui/input/Input';
import Paragraph from '@/components/ui/paragraph/Paragraph';
import Rating from '@/components/ui/rating/Rating';
import Search from '@/components/ui/search/Search';
import Tag from '@/components/ui/tag/Tag';
import Textarea from '@/components/ui/textarea/Textarea';

import { IHome } from './home.interface';

const Home: FC<IHome> = ({ menu, firstCategory }) => {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Heading tag="h1" title="Home page" />
			<Heading tag="h2" title="Home page" />
			<Heading tag="h3" title="Home page" />
			<Button appearance="primary" arrow="down">
				Some button
			</Button>
			<Button appearance="ghost" children="Some button" />
			<Button appearance="ghost" children="Some button" arrow="right" />
			<Paragraph size="small">
				Lorem Lorem aadadasdasd asdasdad asdasdasd sadasdadasd asdsadasd
				asdasdsad asdasda s dasd asdsadasd asdasdads Lorem aadadasdasd
				asdasdad asdasdasd sadasdadasd asdsadasd asdasdsad asdasda s
				dasd Lorem aadadasdasd asdasdad asdasdasd sadasdadasd asdsadasd
				asdasdsad asdasda s dasd Lorem aadadasdasd asdasdad asdasdasd
				sadasdadasd asdsadasd asdasdsad asdasda s dasd
			</Paragraph>
			<Paragraph size="medium">
				Lorem Lorem aadadasdasd asdasdad asdasdasd sadasdadasd asdsadasd
				asdasdsad asdasda s dasd asdsadasd asdasdads Lorem aadadasdasd
				asdasdad asdasdasd sadasdadasd asdsadasd asdasdsad asdasda s
				dasd Lorem aadadasdasd asdasdad asdasdasd sadasdadasd asdsadasd
				asdasdsad asdasda s dasd Lorem aadadasdasd asdasdad asdasdasd
				sadasdadasd asdsadasd asdasdsad asdasda s dasd
			</Paragraph>
			<Paragraph size="large">
				Lorem Lorem aadadasdasd asdasdad asdasdasd sadasdadasd asdsadasd
				asdasdsad asdasda s dasd asdsadasd asdasdads Lorem aadadasdasd
				asdasdad asdasdasd sadasdadasd asdsadasd asdasdsad asdasda s
				dasd Lorem aadadasdasd asdasdad asdasdasd sadasdadasd asdsadasd
				asdasdsad asdasda s dasd Lorem aadadasdasd asdasdad asdasdasd
				sadasdadasd asdsadasd asdasdsad asdasda s dasd
			</Paragraph>
			<Tag
				size="medium"
				text="1asdasda"
				color="gray"
				href="https://google.com"
			/>
			<Rating rating={rating} setRating={setRating} isEditable />
			<ul>
				{menu.map((m) => (
					<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
				))}
			</ul>
			<Input placeholder="test" typeOfInput="default" />
			<Textarea placeholder="test area" />
			<Search />
		</>
	);
};

export default Home;
