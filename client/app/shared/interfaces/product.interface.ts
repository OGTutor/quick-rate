export interface ProductCharacteristic {
	name: string;
	value: string;
}

export interface Review {
	_id: string;
	name: string;
	title: string;
	description: string;
	rating: number;
	createdAt: string;
}

export interface IProduct {
	_id: string;
	image: string;
	title: string;
	price: number;
	oldPrice?: number;
	credit: number;
	description: string;
	advantages: string;
	disadvantages: string;
	categories: string[];
	initialRating: number;
	tags: string[];
	characteristics: ProductCharacteristic[];
	reviews: Review[];
	reviewCount: number;
	reviewAvg?: number;
}
