import { HTMLAttributes } from 'react';

import { IProduct } from '@/shared/interfaces/product.interface';

export interface IProductCard extends HTMLAttributes<HTMLDivElement> {
	product: IProduct;
}
