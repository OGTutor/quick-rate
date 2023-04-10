export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}

export interface DiceData {
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
}

export interface PageAdvantage {
	title: string;
	description: string;
}

export interface IPage {
	firstCategory: TopLevelCategory;
	secondCategory: string;
	alias: string;
	title: string;
	category: string;
	dice?: DiceData;
	advantages?: PageAdvantage[];
	seoText?: string;
	tagsTitle: string;
	tags: string[];
}
