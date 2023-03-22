import { NextPage } from 'next';

import Button from '@/components/ui/button/Button';
import Heading from '@/components/ui/heading/Heading';

const HomePage: NextPage = () => {
	return (
		<div>
			<Heading tag="h1" title="Home page" />
			<Heading tag="h2" title="Home page" />
			<Heading tag="h3" title="Home page" />
			<Button appearance="primary" children="Some button" arrow="down" />
			<Button appearance="ghost" children="Some button" />
			<Button appearance="ghost" children="Some button" arrow="right" />
		</div>
	);
};

export default HomePage;
