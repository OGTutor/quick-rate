import { Type } from 'class-transformer';
import {
	IsArray,
	IsEnum,
	IsNumber,
	IsOptional,
	IsString,
	ValidateNested,
} from 'class-validator';

enum TopLevelCategoryDto {
	Courses,
	Services,
	Books,
	Products,
}

class DiceDataDto {
	@IsNumber()
	count: number;

	@IsNumber()
	juniorSalary: number;

	@IsNumber()
	middleSalary: number;

	@IsNumber()
	seniorSalary: number;
}

class TopPageAdvantageDto {
	@IsString()
	title: string;

	@IsString()
	description: string;
}

export class CreateTopPageDto {
	@IsEnum(TopLevelCategoryDto)
	firstCategory: TopLevelCategoryDto;

	@IsString()
	secondCategory: string;

	@IsString()
	alias: string;

	@IsString()
	title: string;

	@IsString()
	category: string;

	@IsOptional()
	@Type(() => DiceDataDto)
	dice?: DiceDataDto;

	@IsArray()
	@ValidateNested()
	@Type(() => TopPageAdvantageDto)
	advantages: TopPageAdvantageDto[];

	@IsString()
	seoText: string;

	@IsString()
	tagsTitle: string;

	@IsArray()
	@IsString({ each: true })
	tags: string[];
}
