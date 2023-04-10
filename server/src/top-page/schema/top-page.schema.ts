import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TopPageDocument = HydratedDocument<TopPage>;

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}

export class DiceData {
	@Prop()
	count: number;

	@Prop()
	juniorSalary: number;

	@Prop()
	middleSalary: number;

	@Prop()
	seniorSalary: number;
}

export class TopPageAdvantage {
	@Prop()
	title: string;

	@Prop()
	description: string;
}

@Schema({ timestamps: true })
export class TopPage {
	@Prop({ enum: TopLevelCategory })
	firstCategory: TopLevelCategory;

	@Prop()
	secondCategory: string;

	@Prop({ unique: true })
	alias: string;

	@Prop()
	title: string;

	@Prop()
	category: string;

	@Prop({ type: DiceData })
	dice?: DiceData;

	@Prop()
	advantages?: TopPageAdvantage[];

	@Prop()
	seoText?: string;

	@Prop()
	tagsTitle: string;

	@Prop({ type: [String] })
	tags: string[];
}

export const TopPageSchema = SchemaFactory.createForClass(TopPage);

TopPageSchema.index({ '$**': 'text' });
