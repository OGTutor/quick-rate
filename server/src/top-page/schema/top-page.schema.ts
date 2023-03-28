import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TopPageDocument = HydratedDocument<TopPage>;

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}

export class Dice {
	@Prop()
	count: number;

	@Prop()
	juniorSalary: number;

	@Prop()
	middleSalary: number;

	@Prop()
	seniorSalary: number;
}

export class Advantages {
	@Prop()
	title: string;

	@Prop()
	description: string;
}

@Schema({ timestamps: true })
export class TopPage {
	@Prop()
	firstCategory: TopLevelCategory;

	@Prop()
	secondCategory: string;

	@Prop()
	title: string;

	@Prop()
	category: string;

	@Prop()
	dice?: Dice;

	@Prop()
	advantages: Advantages[];

	@Prop()
	seoText: string;

	@Prop()
	tagsTitle: string;

	@Prop()
	tags: string[];
}

export const TopPageSchema = SchemaFactory.createForClass(TopPage);
