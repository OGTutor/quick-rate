import axios from 'api/interceptors';

import { IProduct } from '@/shared/interfaces/product.interface';

import { getFindProductUrl } from '@/config/api.config';

export const ProductService = {
	async find(category: string) {
		const { data: products } = await axios.post<IProduct[]>(
			getFindProductUrl(''),
			{
				category,
				limit: 10,
			}
		);
		return { products };
	},
};
