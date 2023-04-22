import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import SearchIcon from '@/assets/images/search.svg';

import Button from '../button/Button';
import Input from '../input/Input';

import { ISearch } from './Search.interface';
import styles from './Search.module.css';

const Search: FC<ISearch> = ({ className, ...rest }) => {
	const [search, setSearch] = useState('');
	const router = useRouter();

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search,
			},
		});
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') goToSearch();
	};

	return (
		<div className={cn(className, styles.search)} {...rest}>
			<Input
				className={styles.input}
				placeholder="Search..."
				value={search}
				typeOfInput="search"
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button
				appearance="primary"
				className={styles.button}
				onClick={goToSearch}
			>
				<SearchIcon />
			</Button>
		</div>
	);
};

export default Search;
