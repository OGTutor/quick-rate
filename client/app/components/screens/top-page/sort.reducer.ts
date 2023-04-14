import { SortEnum } from '@/components/ui/sorting/Sorting.interface';

import { IProduct } from '@/shared/interfaces/product.interface';

export type SortActions = { type: SortEnum } | { type: SortEnum.Rating };

export interface SortReducerState {
	sort: SortEnum;
	products: IProduct[];
}

export const sortReducer = (
	state: SortReducerState,
	action: SortActions
): SortReducerState => {
	switch (action.type) {
		case SortEnum.Rating:
			return {
				sort: SortEnum.Rating,
				products: state.products.sort((a, b) =>
					a.initialRating > b.initialRating ? -1 : 0
				),
			};
		case SortEnum.Price:
			return {
				sort: SortEnum.Price,
				products: state.products.sort((a, b) =>
					a.price > b.price ? 1 : -1
				),
			};
		default:
			throw new Error('Wrong of sorting type');
	}
};
