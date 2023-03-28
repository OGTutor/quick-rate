import { IsEnum } from 'class-validator';
import { TopLevelCategory } from '../schema/top-page.schema';

export class FindTopPageDto {
	@IsEnum(TopLevelCategory)
	firstCategory: TopLevelCategory;
}
