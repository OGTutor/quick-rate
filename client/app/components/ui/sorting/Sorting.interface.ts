import { HTMLAttributes } from 'react';

export enum SortEnum {
	Rating,
	Price,
}

export interface ISorting extends HTMLAttributes<HTMLDivElement> {
	sort: SortEnum;
	setSort: (sort: SortEnum) => void;
}
