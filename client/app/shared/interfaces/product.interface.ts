export interface ProductCharacteristic {
	name: string;
	value: string;
}

export interface Review {
	name: string;
	title: string;
	description: string;
	rating: number;
}

export interface IProduct {
	image: string;
	title: string;
	price: number;
	oldPrice?: number;
	credit: number;
	description: string;
	advantages: string;
	disAdvantages: string;
	categories: string[];
	tags: string[];
	characteristics: ProductCharacteristic[];
	reviews: Review[];
	reviewCount: number;
	reviewAvg?: number;
}
